import React from 'react';
import BingoSheet from '../../models/sheet';

import refresh from './refresh.svg';
import './index.scss';

const GameMenu: React.FC<{ app: { name: string }, sheet: BingoSheet, reset: () => void, }> = ({ app, sheet, reset, }) => {
    return (
        <div className="game-menu">
            <h1>{app.name}</h1>
            <span className="start-time">
                {sheet.initialized.toLocaleString()}
            </span>
            <img src={refresh} alt="Restart Game" onClick={reset} />
        </div>
    );
};

export default GameMenu;