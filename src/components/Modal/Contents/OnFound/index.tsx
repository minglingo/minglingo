import React from 'react';

import "../common.scss";
import check from './check.svg';
import { Payload } from '../../../../models/qrcode';

import messages from '../../../../service/messages';
import config from '../../../../config';

function getFoundValueTexts(values: string[] = []): string[] {
    // FIXME: ugly
    return config.bingo.slot.variations
        .filter(v => values.some(val => val === v.value))
        .map((v) => v.label.split('\n').join(''));
}

const ModalContentOnFound: React.FC<{
    payload: Payload,
    close: () => void,
}> = ({
    payload,
    close,
}) => {
    const texts = getFoundValueTexts(payload.value as string[]);
    const found = messages.get('found', texts);
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
