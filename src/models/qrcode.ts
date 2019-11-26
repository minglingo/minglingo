
export enum QRCodeAction {
    DETECTED = "detected",
    DEBUG = "debug",
}

type AnyPayoload = any;
export interface Payload extends AnyPayoload {
    value: string | number | string[] | number[];
}

export interface QRCodeData {
    token?: string;
    action: QRCodeAction;
    payload: Payload; // Defined by application
}
