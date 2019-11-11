import React from 'react';
import camera from '../camera.svg';
import BingoSheetContext from '../../../context/BingoSheet';

const TriggerButton: React.FC = () => {
    return (
        <BingoSheetContext.Consumer>
            {({scanning, startScanning}) =>
                <div onClick={startScanning}>
                    <img src={camera} alt="Start detecting" />
                </div>
            }
        </BingoSheetContext.Consumer>
    )
};

export default TriggerButton;