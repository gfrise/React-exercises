import React, { useEffect, useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
    const intervalid = setInterval(() => {
    setCount((count) => count +1)
    }, 1000)

    return () => {
        if (intervalid) {
            clearInterval(interval)
        }
    }
    }, [])

    return <h1>{count}</h1>
}