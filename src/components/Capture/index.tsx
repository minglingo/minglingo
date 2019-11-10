import React, { useState, useRef } from 'react';
import DebugLog from '../../debug/DebugLog';

import camera from '../camera.svg';
import './index.scss';
import { detectQRCodeFromImageURL } from '../../services/Detector';
import { QRCodeData } from '../../models/qrcode';

const CaptureView: React.FC<{
    pushLog: (log: DebugLog) => void,
    punch: (data: QRCodeData) => void,
}> = ({ pushLog, punch }) => {
    const input = useRef<HTMLInputElement>(null);
    const [imgURL, setImageURL] = useState<string>("");
    const onChangeImage = ({ target }: { target: HTMLInputElement }) => {
        if (!target.files || !target.files.length) return setImageURL(""); // Image not set.
        const f = target.files[0];
        const r = new FileReader();
        r.onload = async () => {
            setImageURL(r.result as string);
            const qrcode = await detectQRCodeFromImageURL(r.result as string);
            if (!qrcode) return; // QR code not detected.
            const data = JSON.parse(qrcode.data) as QRCodeData;
            punch(data);
        };
        r.readAsDataURL(f);
    };
    const openCaptureScreen = () => input.current && input.current.click();
    return (
        <div className="capture-trigger-wrapper">
            <div className="capture-result-container">
                {imgURL ? <img src={imgURL} alt='Captured' /> : null}
            </div>
            <div
                className="capture-trigger-container"
                onClick={openCaptureScreen}
            >
                <img src={camera} alt="Capture QR code!" />
            </div>
            <input
                ref={input}
                type="file"
                accept="image/*"
                capture
                onChange={onChangeImage}
            />
        </div>
    );
}

export default CaptureView;
