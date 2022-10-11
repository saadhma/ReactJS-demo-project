import React from 'react';

export default function Input({
    type,
    onChange,
    value,
    placeholder
}) {

    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} />
    );
}