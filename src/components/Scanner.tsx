import React, { useRef, useState } from 'react';
import DebugLog from '../debug/DebugLog';
import './Scanner.css';
import camera from './camera.svg';

import {detectQRCodeFromVideo} from '../services/Detector'

// Video size
const vh = 320;
const vw = 320;

const facingMode = navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) ? { exact: "environment" } : "user";

const ScannButton: React.FC<{ setStream: (stream: MediaStream) => void }> = ({ setStream }) => {
    const startScanProcess = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { width: vw, height: vh, facingMode } });
        setStream(stream);
    };
    return (
        <div className="Scan-Button-Wrapper" onClick={startScanProcess} >
            <img src={camera} width={80} alt="Start Scanning" />
        </div>
    )
}

const Scanner: React.FC<{pushLog: (log: DebugLog) => void}> = ({pushLog}) => {

    const [scanning, setScanStatus] = useState(false);

    // To show what is to be detected.
    const video: React.RefObject<HTMLVideoElement> = useRef(null);
    // We need to render the stream to get an ImageData to detect QR code.
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

    let detectorInterval: NodeJS.Timeout;
    const detect = () => {
        const qrcode = detectQRCodeFromVideo({ video: video.current, canvas: canvas.current });
        if (!qrcode) return;
        setScanStatus(false);
        clearInterval(detectorInterval);
        (video.current as HTMLVideoElement).style.display = 'none';
        pushLog(new DebugLog("detected", qrcode.data));
        try {
            const data = JSON.parse(qrcode.data);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    const setStream = (stream: MediaStream) => {
        (video.current as HTMLVideoElement).style.display = 'block';
        if (!video.current) return;
        video.current.srcObject = stream;
        detectorInterval = setInterval(detect, 1000);
        setScanStatus(true);
    };

    return (
        <div className="Scanner">
            <div className="video-wrapper">
                <video
                    width={vw} height={vh}
                    ref={video} autoPlay={true}
                />
                <div className="code-area" />
                <canvas
                    className="capture-canvas"
                    ref={canvas}
                    width={vw} height={vh}
                />
                {scanning ? null : <ScannButton setStream={setStream} />}
            </div>
            {/* <button onClick={() => pushLog(new DebugLog())}>Debug</button> */}
        </div>
    );
}

export default Scanner;
