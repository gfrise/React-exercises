import React from 'react';

export function Sum({number=[1,3,4,5,5]}) {
    const initial = 0;
    const sumWithInitial = number.reduce(
    (prev, current) => prev + current,
    initial)
    
    return <h1>{sumWithInitial}</h1>
}