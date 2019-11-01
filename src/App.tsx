import React, { useState } from 'react';
import './App.css';

import BingoSheetView from './components/BingoSheetView';
import Scanner from './components/Scanner';
import DebugLog from './debug/DebugLog';

import config from './config.json';
import BingoSheet from './models/sheet';

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
      <Scanner pushLog={pushLog} />
      <div>
        <ul>{logs.reverse().map(log => <LogListItemView key={log.timestamp} log={log} />)}</ul>
      </div>
      <BingoSheetView sheet={sheet} />
    </div>
  );
}

export default App;
