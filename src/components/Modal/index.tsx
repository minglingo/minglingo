import React, { ReactNode, useState, useEffect } from 'react';

import closeIcon from "./close.png";

import "./index.scss";

const Modal: React.FC<{
    close: () => void,
    children: ReactNode,
    defaultClose?: boolean
}> = ({ close, children, defaultClose = true }) => {
    const [opacity, setOpacity] = useState<number>(0);
    useEffect(() => setOpacity(1), []);
    return (
        <div className="Modal_Container" style={{ opacity }}>
            <div className="Modal_Content_Wrapper">
                <div
                    className="Modal_Content_Background"
                    onClick={defaultClose ? () => {} : close}
                >
                    {defaultClose ? <div className="Modal_Close_Action">
                        <button className="Modal_Close_Button" onClick={close}>
                            <img src={closeIcon} alt="close" />
                        </button>
                    </div> : null}
                    <div className="Modal_Content">
                        {children}
                    </div>
                </div>
            </div>
            <div className="Modal_Background"></div>
        </div>
    );
};

export default Modal;