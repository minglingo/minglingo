import React, { useState, ReactNode } from 'react';

import Game from './components/Game';
import LaunchingPage from './components/LaunchingPage';
import BingoSheet from "./models/sheet";

import config from './config.json';
import { QRCodeData } from './models/qrcode';

import "./App.scss";
import Modal from './components/Modal';

import ApplicationContext from "./context/Application";

const App: React.FC = () => {
  // BingoSheet.drop();
  const sheet = BingoSheet.exists();
  const [bingo, updateBingo] = useState({ sheet: sheet as BingoSheet });

  const [modal, setModal] =  useState<ReactNode>(null);
  const closeModal = () => setModal(null);
  const ctx = {
    modal: null, setModal: (modal: ReactNode) => setModal(modal), closeModal,
  }

  const punch = (data: QRCodeData) => {
    const slot = bingo.sheet.hit(data.payload);
    if (!slot) return; // TODO: do something
    // alert(`Congrats! You found the one!!\n\nThe person with you is ${data.payload.value.toString().toUpperCase()}!`)
    setModal(<p>Found <b>{data.payload.value.toString().toUpperCase()}</b></p>)
    updateBingo({ sheet: bingo.sheet.punch(slot) });
  };

  const reset = () => {
    if (!window.confirm("Are you sure to delete current progress and start new game?")) return;
    updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });
  };
  const start = () => updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });

  return (
    <ApplicationContext.Provider value={ctx}>
    <div className="App">
      {bingo.sheet ? <Game bingo={bingo} punch={punch} reset={reset} /> : <LaunchingPage start={start} />}
      {modal ? <Modal close={closeModal}>{modal}</Modal> : null}
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
