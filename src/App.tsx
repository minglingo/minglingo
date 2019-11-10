import React, { useState } from 'react';
import './App.scss';

import BingoSheetView from './components/BingoSheetView';
import DebugLog from './debug/DebugLog';

import config from './config.json';
import BingoSheet from './models/sheet';
import CaptureView from './components/Capture';

const LogListItemView: React.FC<{log: DebugLog}> = ({log}) => {
  return (
    <li>{JSON.stringify(log)}</li>
  );
}

const App: React.FC = () => {

  // TODO: Make "sheet" persistent, by chomex
  const sheet = BingoSheet.create(config.bingo);

  const [logs, setLog] = useState([] as DebugLog[]);
  const pushLog = (log: DebugLog) => setLog(logs.concat(log));

  return (
    <div className="App">
      <BingoSheetView sheet={sheet} />
      <CaptureView pushLog={pushLog} />
      <div>
        <ul>{logs.reverse().map(log => <LogListItemView key={log.timestamp} log={log} />)}</ul>
      </div>
    </div>
  );
}

export default App;
