
export enum QRCodeAction {
    DETECTED = "detected",
}

export interface QRCodeData {
    token: string;
    action: QRCodeAction;
    payload: any; // Defined by application
}
