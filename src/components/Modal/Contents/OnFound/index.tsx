import React from 'react';

import "../common.scss";
import check from './check.svg';
import { Payload } from '../../../../models/qrcode';

const ModalContentOnFound: React.FC<{
    payload: Payload,
    close: () => void,
}> = ({
    payload,
    close,
}) => {
    const found = payload.value.toString().toUpperCase();
    return (
        <div className="Content_Wrapper">
            <div className="Content_Icon">
                <img src={check} alt="Found" />
            </div>
            <div className="Content_Message">
                <div>
                    <span className="Found_Prefix">Found</span> <span className="Found_Value">{found}</span>
                </div>
            </div>
            <div className="Content_Actions">
                <button onClick={close}>VIEW YOUR CARD</button>
            </div>
        </div>
    );
};

export default ModalContentOnFound;
