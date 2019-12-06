import React from 'react';
import BingoSheet from '../../models/sheet';
import { QRCodeData } from '../../models/qrcode';

import config from '../../config';
import GameMenu from '../GameMenu';
import BingoSheetView from '../BingoSheetView';
import VideoScanView from '../Scan/VideoScanView';

import './index.scss';

const Game: React.FC<{
    bingo: { sheet: BingoSheet },
    punch: (data: QRCodeData) => void,
    reset: () => void,
}> = ({ bingo, punch, reset }) => {

  return (
    <div className="Game">
      <div className="Game_Title">
        <GameMenu app={config.application} sheet={bingo.sheet} reset={reset} />
      </div>
      <div className="Game_Contents">
        <div className="Bingo_Sheet_Label">
          <h2>YOUR BINGO SHEET</h2>
          {bingo.sheet.lines.length ? <span>{bingo.sheet.lines.length} bingo</span> : null}
        </div>
        <BingoSheetView sheet={bingo.sheet} />
        <VideoScanView punch={punch} />
      </div>
    </div>
  );
}

export default Game;
