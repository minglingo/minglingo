import React from 'react';

import "../common.scss";
import check from './check.svg';
import { Payload } from '../../../../models/qrcode';

import messages from '../../../../service/messages';

const ModalContentOnFound: React.FC<{
    payload: Payload,
    close: () => void,
}> = ({
    payload,
    close,
}) => {
   const found = messages.get('found', [payload.value.toString().toUpperCase()]);
    return (
        <div className="Content_Wrapper">
            <div className="Content_Icon">
                <img src={check} alt="Found" />
            </div>
            <div className="Content_Message">
                <div>{found}</div>
            </div>
            <div className="Content_Actions">
                <button onClick={close}>VIEW YOUR CARD</button>
            </div>
        </div>
    );
};

export default ModalContentOnFound;
