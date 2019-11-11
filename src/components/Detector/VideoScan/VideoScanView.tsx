import React, { createRef } from 'react';
import "./VideoScanView.scss";

import camera from "../camera.svg";
import { detectQRCodeFromVideo } from '../../../services/Detector';
import { QRCodeData } from '../../../models/qrcode';

const [vw, vh] = [80, 80];

// TODO: Use rear camera.
const isMobile = /(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent);
const facingMode =  isMobile ? { exact: 'environment' } : 'user';
const constraints = { audio: false, video: { width: vw, height: vh, facingMode } };

const VideoScanView: React.FC<{ punch(data: QRCodeData): void }> = ({ punch }) => {
    const vref = createRef<HTMLVideoElement>();
    const canvas = document.createElement('canvas');
    canvas.width = vw; canvas.height = vh;
    let detectorInterval: NodeJS.Timeout;
    const detect = (video: HTMLVideoElement) => {
        const qrcode = detectQRCodeFromVideo({ video, canvas })
        if (!qrcode) return;
        clearInterval(detectorInterval);
        video.pause();
        punch(JSON.parse(qrcode.data));
    };
    const startVideoScanning = async () => {
        if (!vref.current) return;
        vref.current.play();
        vref.current.setAttribute('muted', '');
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        vref.current.srcObject = stream;
        detectorInterval = setInterval(() => detect(vref.current as HTMLVideoElement), 1000);
    };
    return (
        <div className="video-capture-container">
            <div>
                <video ref={vref} autoPlay playsInline width={vw} height={vh} />
            </div>
            <div onClick={startVideoScanning}>
                <img src={camera} alt="Star Scanning QR" />
            </div>
        </div>
    );
};

export default VideoScanView;