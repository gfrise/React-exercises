import { useState, useEffect} from 'react';

export function useGithubUser() {
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function fetcha(username){
        setLoading(true)
        setError(false)
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.ok) {
            const info = await response.json()
        setData(info)
        } else {throw new Error('Oh oh')}
        } catch(e) {
        setError(true)
        setData(false)
        console.log(e.name)
        } finally {setLoading(false)}
    }

    return {
        data,
        error,
        loading,
        fetcha
    }
}