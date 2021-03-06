import React from 'react';
import gift from './gift.svg';
import closeicon from './close.png';
import "../common.scss";
import messages from '../../../../services/messages';

const ModalContentOnBingoSucceeded: React.FC<{
    close: () => void,
    count: number,
}> = ({
    close,
    count,
}) => {
    const lines = messages.get('congratulations') as string[] || [];
    const total = messages.get('total_bingo_count', [count]);
    return (
        <div className="Content_Wrapper" onClick={close}>
            <div className="Content_Action" style={{ textAlign: 'right' }}>
                <img src={closeicon} alt="close" style={{ width: '24px' }} />
            </div>
            <div className="Content_Icon">
                <img src={gift} alt="Congraturations!" />
            </div>
            <div className="Content_Message">
                <h1>BINGO!!!</h1>
            </div>
            <div className="Content_Message Lines">
                {lines.map((line, i) => <p key={i}>{line}</p>)}
                {total}
            </div>
        </div>
    );
};

export default ModalContentOnBingoSucceeded;