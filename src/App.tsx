import React, { useState, ReactNode } from 'react';

import Game from './components/Game';
import LaunchingPage from './components/LaunchingPage';
import BingoSheet from "./models/sheet";

import config from './config.json';
import { QRCodeData } from './models/qrcode';

import "./App.scss";
import Modal from './components/Modal';

import ApplicationContext from "./context/Application";
import ModalContentOnFound from './components/Modal/Contents/OnFound.tsx';

const App: React.FC = () => {
  // BingoSheet.drop();
  const sheet = BingoSheet.exists();
  const [bingo, updateBingo] = useState({ sheet: sheet as BingoSheet });

  const [modalState, setModalState] = useState<{ content?: ReactNode, show: boolean }>({ content: null, show: false });
  const closeModal = () => {
    setTimeout(() => setModalState({ show: false }), 400);
    setModalState({ show: false, content: modalState.content });
  };
  const showModal = (content: ReactNode) => {
    setModalState({ show: false, content });
    setTimeout(() => setModalState({ show: true, content }));
  };

  const ctx = {
    modal: null, setModalState: (ms: { modal?: ReactNode, show: boolean }) => setModalState(ms), closeModal,
  }

  const punch = (data: QRCodeData) => {
    const slot = bingo.sheet.hit(data.payload);
    if (!slot) return; // TODO: do something
    showModal(<ModalContentOnFound payload={data.payload} close={closeModal} />);
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
      {modalState.content ? <Modal close={closeModal} {...modalState} /> : null}
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
