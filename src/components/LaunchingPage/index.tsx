import React from 'react';
import './index.scss';

const LaunchingPage: React.FC<{start: () => void}> = ({start}) => {
    return (
        <div className="launching-page">
            <div className="legend">
                <div className="title">
                    <h1>QRBINGO</h1>
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
    );
}

export default LaunchingPage;