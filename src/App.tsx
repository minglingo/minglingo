import React, { useState } from 'react';
import './App.scss';

import BingoSheetView from './components/BingoSheetView';

import BingoSheet from "./models/sheet";
import config from "./config.json";

import BingoSheetContext from './context/BingoSheet';
import { QRCodeData } from './models/qrcode';
import GameMenu from './components/GameMenu';
import VideoScanView from './components/Detector/VideoScan/VideoScanView';

const Content: React.FC<{ reset: () => void, }> = ({ reset, }) => {
  return (
    <BingoSheetContext.Consumer>
      {({bingo, punch}) => <div className="App">
        <GameMenu app={config.application} sheet={bingo.sheet} reset={reset} />
        <BingoSheetView sheet={bingo.sheet} />
        <VideoScanView punch={punch} />
      </div>
      }
    </BingoSheetContext.Consumer>
  );
};

const App: React.FC = () => {

  const [scanning, setScanState] = useState(false);
  const startScanning = () => setScanState(true);
  const stopScanning = () => setScanState(false);

  const sheet = BingoSheet.exists() || BingoSheet.init(config.bingo).save() as BingoSheet;
  const [bingo, updateBingo] = useState({ sheet });

  const punch = (data: QRCodeData) => {
    const slot = bingo.sheet.hit(data.payload);
    if (!slot) return; // TODO: do something
    // TODO: Implement better feedback UI
    alert(`Congrats! You found the one!!\n\nThe person with you is ${data.payload.value.toString().toUpperCase()}!`)
    updateBingo({ sheet: bingo.sheet.punch(slot) });
  };
  const reset = () => {
    if (!window.confirm("Are you sure to delete current progress and start new game?")) return;
    updateBingo({ sheet: BingoSheet.init(config.bingo).save() });
  };

  const context = {
    bingo, punch,
    scanning, startScanning, stopScanning,
  };

  return (
    <BingoSheetContext.Provider value={context}>
      <Content reset={reset} />
    </BingoSheetContext.Provider>
  );
}

export default App;
