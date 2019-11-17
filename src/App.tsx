import React, { useState } from 'react';

import Game from './components/Game';
import LaunchingPage from './components/LaunchingPage';
import BingoSheet from "./models/sheet";

import config from './config.json';
import { QRCodeData } from './models/qrcode';

import "./App.scss";

const App: React.FC = () => {
  // BingoSheet.drop();
  const sheet = BingoSheet.exists();
  const [bingo, updateBingo] = useState({ sheet: sheet as BingoSheet });

  const punch = (data: QRCodeData) => {
    const slot = bingo.sheet.hit(data.payload);
    if (!slot) return; // TODO: do something
    alert(`Congrats! You found the one!!\n\nThe person with you is ${data.payload.value.toString().toUpperCase()}!`)
    updateBingo({ sheet: bingo.sheet.punch(slot) });
  };
  const reset = () => {
    if (!window.confirm("Are you sure to delete current progress and start new game?")) return;
    updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });
  };
  const start = () => updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });

  return bingo.sheet ? <Game bingo={bingo} punch={punch} reset={reset} /> : <LaunchingPage start={start} />
}

export default App;
