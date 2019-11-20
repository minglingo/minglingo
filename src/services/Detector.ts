import jsqr, { QRCode } from 'jsqr';

function getRectOfQRCode(video: HTMLVideoElement, size: { width: number, height: number }): {
    x: number, y: number, width: number, height: number,
} {
    const x = (video.videoWidth  - size.width) / 2;
    const y = (video.videoHeight - size.height) / 2;
    return {x, y, ...size};
}

export function detectQRCodeFromVideo({
    video, canvas, size,
}: {
    video: HTMLVideoElement | null,
    canvas: HTMLCanvasElement | null,
    size: { width: number, height: number },
}): QRCode | null {
    if (!canvas) return null;
    if (!video) return null;
    const stream = video.srcObject;
    if (!stream) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const rect = getRectOfQRCode(video, size);
    ctx.drawImage(
        video, // Data Source
        rect.x, rect.y, rect.width, rect.height, // Source Rect
        0, 0, canvas.width, canvas.height, // Dest Rect
    );
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