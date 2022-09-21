import React, { useState } from 'react';

export function Login({ onLogin }) {
    const [status, setStatus] = useState({
         username: '',
        password: '',
        remember: false,
    })

    handleButton = () => {
        onLogin(status)
    }

    handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        setStatus((status) => {
            return {
                ...status,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    
    return (
        <>
            <input
                name="username"
                value={status.username}
                onChange={handleChange}
            />
            <input
                name="password"
                value={status.password}
                onChange={handleChange}
            />
            <input
                name="remember"
                type='checkbox'
                checked={status.remember}
                onChange={handleChange}
            />
            <button onClick={handleButton} disabled={!status.username || !status.password}>Login</button>
        </>
    )
}