import React from 'react';

import cn from 'classnames';

import BingoSheet from "../../models/sheet";
import BingoSlot from '../../models/slot';
import './index.scss';

const BingoSheetCell: React.FC<{slot: BingoSlot}> = ({slot}) => {
    return (
        <div className={cn("sheet-cell", { punched: slot.punched, bingo: slot.bingo })}>
            <div className="hole">
                {slot.label.split("\n").map((line, i) => <div key={i}>{line}</div>)}
            </div>
        </div>
    );
};

const BingoSheetRow: React.FC<{row: BingoSlot[]}> = ({row}) => {
    return (
        <div className="sheet-row">
            {row.map((slot, i) => <BingoSheetCell key={i} slot={slot} />)}
        </div>
    );
};

const BingoSheetView: React.FC<{sheet: BingoSheet}> = ({sheet}) => {
    return (
        <div className="sheet-container">
            <div className={cn("sheet-wrapper", { bingo: sheet.isBingo() })}>
                {sheet.slots.map((row, i) => <BingoSheetRow key={i} row={row} />)}
            </div>
        </div>
    );
};

export default BingoSheetView;
