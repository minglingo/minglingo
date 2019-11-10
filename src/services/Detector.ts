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

export function detectQRCodeFromImageURL(imageURL: string): Promise<QRCode | null> {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = imageURL;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            [canvas.width, canvas.height] = [img.width, img.height];
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.drawImage(img, 0, 0);
            const qrcode = jsqr(ctx.getImageData(0, 0, img.width, img.height).data, img.width, img.height);
            resolve(qrcode);
        };
    });
}