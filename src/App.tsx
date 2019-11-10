import React, { useState } from 'react';
import './App.scss';

import BingoSheetView from './components/BingoSheetView';
import DebugLog from './debug/DebugLog';

import BingoSheet from "./models/sheet";
import config from "./config.json";

import BingoSheetContext from './context/BingoSheet';
import CaptureView from './components/Capture';
import { QRCodeData } from './models/qrcode';
import GameMenu from './components/GameMenu';

const Content: React.FC<{ pushLog: (log: DebugLog) => void, reset: () => void, }> = ({ pushLog, reset, }) => {
  return (
    <BingoSheetContext.Consumer>
      {({bingo, punch}) => <div className="App">
        <GameMenu app={config.application} sheet={bingo.sheet} reset={reset} />
        <BingoSheetView sheet={bingo.sheet} />
        <CaptureView pushLog={pushLog} punch={punch} />
      </div>
      }
    </BingoSheetContext.Consumer>
  );
};

const App: React.FC = () => {

  const [logs, setLog] = useState([] as DebugLog[]);
  const pushLog = (log: DebugLog) => setLog(logs.concat(log));

  const [bingo, updateBingo] = useState({sheet: BingoSheet.create(config.bingo)});
  const punch = (data: QRCodeData) => {
    const slot = bingo.sheet.hit(data.payload);
    if (!slot) return; // TODO: do something
    updateBingo({ sheet: bingo.sheet.punch(slot) });
  };
  const reset = () => {
    if (!window.confirm("Are you sure to delete current progress and start new game?")) return;
    updateBingo({ sheet: BingoSheet.create(config.bingo) });
  };

  return (
    <BingoSheetContext.Provider value={{bingo, punch}}>
      <Content pushLog={pushLog} reset={reset} />
    </BingoSheetContext.Provider>
  );
}

export default App;
