import React from 'react';
import './index.scss';

/**
 * AppScreen component separates differences between laptop browsers and mobile browsers.
 * Users can just use this component as a parent and provide any children to this.
 */
const AppScreen: React.FC<{
    styles?: React.CSSProperties,
    children: React.ReactNode,
}> = ({ styles = {}, children }) => {
    return (
        <div className="AppScreen_Container" style={styles} >
            <div className="AppScreen_Main">
                {children}
            </div>
        </div>
    );
};

export default AppScreen;
