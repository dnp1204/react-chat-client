import React from 'react';
import Icon from './Icon';
import './LinkWithIcon.scss';

const LinkWithIcon = ({ href, iconName, text, backgroundColor }) => {
    const linkStyle = { width: '100%', padding: '10px 0px', color: '#fff', backgroundColor, borderRadius: '5px'  };
    
    return (
        <a style={linkStyle} className="link-with-icon" href={href}>
            <Icon iconName={iconName} size="sm" color="#fff" /> { text }
        </a>
    );
}

export default LinkWithIcon;