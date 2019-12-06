import React from 'react';
import './index.scss';

import logo from "../../logo.svg";
import config from '../../config';
import messages from '../../services/messages';

const LaunchingPage: React.FC<{start: () => void}> = ({start}) => {
    const introduction = messages.get('introduction') as string[] || [];
    const startMessage = messages.get('start_btn') as string;
    return (
        <div className="launching-page">
            <div className="legend">
                <div className="title">
                    <h1>
                        <img src={logo} alt="QRBINGO" />
                        QRBINGO
                    </h1>
                </div>
                <div className="lang-list">
                    {config.languages.map((av) => {
                        return <a key={av.lang} href={`?lang=${av.lang}`}>{av.label}</a>;
                    })}
                </div>
                <div className="introduction">
                    <ol>
                        {introduction.map((line, i) => <li key={i}>
                            <br /><div>{line}</div>
                        </li>)}
                    </ol>
                </div>
                <div className="start-button-wrapper">
                    <button onClick={start}>{startMessage}</button>
                </div>
            </div>
        </div>
    );
}

export default LaunchingPage;
