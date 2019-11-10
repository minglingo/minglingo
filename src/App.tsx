import React, { useState } from 'react';
import './App.scss';

import BingoSheetView from './components/BingoSheetView';
import DebugLog from './debug/DebugLog';

import BingoSheet from "./models/sheet";
import config from "./config.json";

import BingoSheetContext from './context/BingoSheet';
import CaptureView from './components/Capture';
import { QRCodeData } from './models/qrcode';

const LogListItemView: React.FC<{log: DebugLog}> = ({log}) => {
  return (
    <li>{JSON.stringify(log)}</li>
  );
}

const Content: React.FC<{ pushLog: (log: DebugLog) => void }> = ({ pushLog }) => {
  return (
    <BingoSheetContext.Consumer>
      {({bingo, punch}) => <div className="App">
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

  return (
    <BingoSheetContext.Provider value={{bingo, punch}}>
      <Content pushLog={pushLog} />
      <div>
        <ul>{logs.reverse().map(log => <LogListItemView key={log.timestamp} log={log} />)}</ul>
      </div>
    </BingoSheetContext.Provider>
  );
}

export default App;
