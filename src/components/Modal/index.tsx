import React, { ReactNode, useState, useEffect } from 'react';

// import closeIcon from "./close.png";

import "./index.scss";

const Modal: React.FC<{
    close: () => void,
    show: boolean,
    content?: ReactNode,
}> = ({ close, content, show }) => {
    const [opacity, setOpacity] = useState<number>(0);
    useEffect(() => {
        setOpacity(show ? 1 : 0);
    }, [show]);
    return (
        <div className="Modal_Container" style={{ opacity }}>
            <div className="Modal_Content_Wrapper">
                <div
                    className="Modal_Content_Background"
                    onClick={close}
                >
                    <div className="Modal_Content">
                        {content}
                    </div>
                </div>
            </div>
            <div className="Modal_Background"></div>
        </div>
    );
};

export default Modal;
