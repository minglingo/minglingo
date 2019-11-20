import { createContext } from "react";
import BingoSheet from "../models/sheet";
import config from "../config";
import { QRCodeData } from "../models/qrcode";

const BingoSheetContext = createContext({
    bingo: {
        sheet: BingoSheet.init(config.bingo),
    },
    punch(data: QRCodeData) {},
    scanning: false,
    startScanning() {},
    stopScanning() {},
});

export default BingoSheetContext;
