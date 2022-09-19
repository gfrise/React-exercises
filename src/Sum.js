import React from 'react';

export function Sum({numbers}) {
    const initial = 0;
    const sumWithInitial = numbers.reduce(
    (prev, current) => prev + current,
    initial)
    
    return <h1>{sumWithInitial}</h1>
}