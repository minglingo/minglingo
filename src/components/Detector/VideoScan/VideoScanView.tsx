import React, { createRef } from 'react';
import "./VideoScanView.scss";

import camera from "../camera.svg";
import { detectQRCodeFromVideo } from '../../../services/Detector';
import { QRCodeData } from '../../../models/qrcode';

const [vw, vh] = [80, 80];

const isMobile = /(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent);
const facingMode =  isMobile ? { exact: 'environment' } : 'user';
const constraints = { audio: false, video: { width: vw, height: vh, facingMode } };

const VideoScanView: React.FC<{ punch(data: QRCodeData): void }> = ({ punch }) => {
    const vref = createRef<HTMLVideoElement>();
    const canvas = document.createElement('canvas');
    canvas.width = vw; canvas.height = vh;
    let detectorInterval: NodeJS.Timeout;
    const detect = (video: HTMLVideoElement, stream: MediaStream) => {
        const qrcode = detectQRCodeFromVideo({ video, canvas })
        if (!qrcode) return;
        clearInterval(detectorInterval);
        video.pause();
        stream.getTracks().map(track => track.stop());
        punch(JSON.parse(qrcode.data));
    };
    const startVideoScanning = async () => {
        if (!vref.current) return;
        vref.current.play();
        vref.current.setAttribute('muted', '');
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        vref.current.srcObject = stream;
        detectorInterval = setInterval(() => detect(vref.current as HTMLVideoElement, stream), 1000);
    };
    return (
        <div className="video-capture-container">
            <button>SCAN QR CODE</button>
            {/* <div>
                <video ref={vref} autoPlay playsInline width={vw} height={vh} />
            </div>
            <div onClick={startVideoScanning}>
                <img src={camera} alt="Star Scanning QR" />
            </div> */}
        </div>
    );
};

export default VideoScanView;
