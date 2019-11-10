import { createContext } from "react";
import BingoSheet from "../models/sheet";
import config from "../config.json";
import { QRCodeData } from "../models/qrcode";

const BingoSheetContext = createContext({
    bingo: {
        sheet: BingoSheet.create(config.bingo),
    },
    punch(data: QRCodeData) {}
});

export default BingoSheetContext;
