import React, { useState, useCallBack } from 'react';

export function useCounter() {
	const [counter, setCounter] = useState(0)

	const handleIncrement = useCallBack(function handleCounterIncrement() {
		setCounter((counter) => counter + 1)
	}, [])

	const handleDecrement = useCallBack(function handleCounterDecrement() {
		setCounter((counter) => counter - 1)
	}, [])

	const handleReset = useCallBack(function handleCounterReset() {
		setCounter(0)
	}, [])

	return {
		counter: counter,
		onIncrement: handleIncrement,
		onDecrement: handleDecrement,
		onReset: handleReset,
	}
}