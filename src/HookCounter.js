import React from 'react';
import { useCounter } from './useCounter';

export function HookCounter() {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(0)

    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
        </>
    )
}