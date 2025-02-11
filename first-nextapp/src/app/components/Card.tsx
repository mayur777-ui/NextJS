
import React, { JSX } from 'react';

export default function Card({children}: {children: React.ReactNode}): JSX.Element {
    const cardStyle = {
        padding: '100px',
        margin : '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={cardStyle}>{children}</div>
    )
}