import React, { createRef } from 'react';
import cn from 'classnames';

import BingoSheet from "../../models/sheet";
import BingoSlot from '../../models/slot';

import './index.scss';

const LineDrawerCanvas: React.FC<{ sheet: BingoSheet }> = ({ sheet }) => {

    const lines = sheet.lines;
    const draw = (canvas: HTMLCanvasElement, scale: number) => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        lines.map(line => line.draw(ctx, scale));
        console.log('Completed:', sheet.isCompleted());
    };

    const ref = createRef<HTMLCanvasElement>();

    // Make sure canvas exists.
    // TODO: Find another way.
    const scale = 1000;
    setTimeout(() => ref.current ? draw(ref.current, scale) : null);
    return (
        <canvas width={scale} height={scale} ref={ref} />
    );
};

const LineDrawer: React.FC<{ sheet: BingoSheet }> = ({ sheet }) => {
    return (
        <div className="Bingo_Line_Drawer_Container">
            <LineDrawerCanvas sheet={sheet} />
        </div>
    );
};

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
            <LineDrawer sheet={sheet} />
        </div>
    );
};

export default BingoSheetView;
