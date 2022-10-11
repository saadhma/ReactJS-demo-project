import './Button.css';
import React from 'react';

export default function Button({
    color,
    text,
    onClick,
    className
}) {

    return (
        <button
            className={className}
            onClick={onClick}
            style={{
                backgroundColor: color,
            }}
        >
            {text}
        </button>
    );
}