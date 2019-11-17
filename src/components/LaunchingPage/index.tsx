import React from 'react';
import './index.scss';

import logo from "../../logo.svg";

const LaunchingPage: React.FC<{start: () => void}> = ({start}) => {
    return (
        <div className="App">
        <div className="launching-page">
            <div className="legend">
                <div className="title">
                    <h1>
                        <img src={logo} alt="QRBINGO" />
                        QRBINGO
                    </h1>
                </div>
                <div className="introduction">
                    <ol>
                        <li>
                            <br />
                            <div>
                                Scan QR code of people around you
                            </div>
                        </li>
                        <li>
                            <br />
                            Collect differnt types of QR codes
                        </li>
                        <li>
                            <br />
                            Aim for Bingo and win a prize!
                        </li>
                    </ol>
                </div>
                <div className="start-button-wrapper">
                    <button onClick={start}>START!</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LaunchingPage;
