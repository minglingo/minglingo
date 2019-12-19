import React from 'react';

import './index.scss';
import diamond from './diamond.svg';
import messages from '../../services/messages';

const LinkBanner: React.FC<{
    link: string;
}> = ({ link }) => {
    const message = messages.get('banner_message', [link]);
    return (
        <div className="Link_Banner">
            <img src={diamond} alt="diamond" />
            {message}
            <img src={diamond} alt="diamond" />
        </div>
    )
};

export default LinkBanner;
