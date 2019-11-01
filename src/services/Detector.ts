import jsqr, { QRCode } from 'jsqr';

export function detectQRCodeFromVideo({video, canvas}: {video: HTMLVideoElement | null, canvas: HTMLCanvasElement | null}): QRCode | null {
    if (!canvas) return null;
    if (!video) return null;
    const stream = video.srcObject;
    if (!stream) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, video.width, video.height);
    const img = ctx.getImageData(0, 0, video.width, video.height);
    return jsqr(img.data, video.width, video.height);
}
