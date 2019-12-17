import React, { useState, ReactNode } from 'react';

// Models
import config from './config';
import BingoSheet from "./models/sheet";
import { QRCodeData } from './models/qrcode';

// Components
import Game from './components/Game';
import LaunchingPage from './components/LaunchingPage';
import Modal from './components/Modal';
import ApplicationContext from "./context/Application";
import ModalContentOnFound from './components/Modal/Contents/OnFound';
import ModalContentOnBingoSucceeded from './components/Modal/Contents/OnBingoSucceeded';
import AppScreen from './components/AppScreen';
import VideoScanView from './components/VideoScan';

// Styles
import "./App.scss";

// Let mobile app use rear cameras
const isMobile = /(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent);
const facingMode =  isMobile ? { exact: 'environment' } : 'user';

const App: React.FC = () => {

  const r = (new URL(window.location.href)).searchParams.get('reset');
  if (r === '1' || r === 'true') BingoSheet.drop();

  // BingoSheet.drop();
  const sheet = BingoSheet.exists();
  const [bingo, updateBingo] = useState({ sheet: sheet as BingoSheet });

  const [modalState, setModalState] = useState<{ content?: ReactNode, show: boolean, resolve?: () => void }>({
    content: null, show: false,
  });
  const closeModal = () => {
    setTimeout(() => setModalState({ show: false }), 400);
    setModalState({ show: false, content: modalState.content });
    if (typeof modalState.resolve === 'function') modalState.resolve();
  };
  const showModal = (content: ReactNode) => {
    return new Promise((resolve) => {
      setModalState({ show: false, content, resolve });
      setTimeout(() => setModalState({ show: true, content, resolve }));
    });
  };

  const ctx = {
    modal: null, setModalState: (ms: { modal?: ReactNode, show: boolean }) => setModalState(ms), closeModal,
  }

  const [stream, setStream] = useState<MediaStream>();

  const punch = async (data: QRCodeData) => {
    await showModal(<ModalContentOnFound payload={data.payload} close={closeModal} />);
    const slots = bingo.sheet.hit(data.payload);
    if (!slots.length) return; // TODO: do something
    const bingoCount = bingo.sheet.lines.length;
    updateBingo({ sheet: bingo.sheet.punch(slots) });
    if (bingoCount < bingo.sheet.lines.length) setTimeout(() => {
      showModal(<ModalContentOnBingoSucceeded close={closeModal} count={bingo.sheet.lines.length} />);
    }, 500);
  };

  const startScanning = async () => {
    const width = 400; // FIXME
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false, video: { facingMode, width, height: width }
    });
    setStream(stream);
  };
  const stopScanning = (data?: QRCodeData) => {
      setTimeout(() => setStream(undefined), 0);
      if (stream) stream.getTracks().map(track => track.stop())
      if (data) punch(data);
  };

  // Game control
  const reset = () => {
    if (!window.confirm("Are you sure to delete current progress and start new game?")) return;
    updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });
  };
  const start = () => updateBingo({ sheet: BingoSheet.init(config.bingo).save<BingoSheet>() });

  const ApplicationStoryContainer = (
    <AppScreen>
      {bingo.sheet ?
        <Game
          bingo={bingo}
          reset={reset}
          startScanning={startScanning}
        />
        : <LaunchingPage start={start} />
      }
    </AppScreen>
  );

  const ScanningStoryContainer = (
    stream ?
      <AppScreen styles={{ zIndex: 2000 }}>
        <VideoScanView stream={stream} stop={stopScanning} />
      </AppScreen>
      : null
  );

  const ModalStoryContainer = (
    modalState.content ?
      <Modal close={closeModal} {...modalState} />
      : null
  );

  return (
    <ApplicationContext.Provider value={ctx}>
    <div className="App">
      {ApplicationStoryContainer}
      {ScanningStoryContainer}
      {ModalStoryContainer}
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
