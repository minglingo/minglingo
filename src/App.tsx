import React, { useState } from 'react';
import './App.css';

import Scanner from './components/Scanner';
import DebugLog from './debug/DebugLog';

const LogListItemView: React.FC<{log: DebugLog}> = ({log}) => {
  return (
    <li>{JSON.stringify(log)}</li>
  );
}

const App: React.FC = () => {

  const [logs, setLog] = useState([] as DebugLog[]);
  const pushLog = (log: DebugLog) => setLog(logs.concat(log));

  return (
    <div className="App">
      <Scanner pushLog={pushLog} />
      <div>
        <ul>{logs.reverse().map(log => <LogListItemView key={log.timestamp} log={log} />)}</ul>
      </div>
    </div>
  );
}

export default App;
