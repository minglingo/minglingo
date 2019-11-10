
export enum QRCodeAction {
    DETECTED = "detected",
}

type AnyPayoload = any;
export interface Payload extends AnyPayoload {
    value: string | number;
}

export interface QRCodeData {
    token: string;
    action: QRCodeAction;
    payload: Payload; // Defined by application
}
