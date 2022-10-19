import React from 'react';

export default function Input({
    type,
    onChange,
    value,
    placeholder,
    width
}) {

    return (
        <input style={{width: {width}}} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    );
}