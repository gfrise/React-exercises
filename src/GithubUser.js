import React, { useEffect, useState } from 'react';
import { useGithubUser } from './useGithubUser';

export function GithubUser({username}) {
    const {data, error, mutate} = useGithubUser(username);

    
    function onRefresh() {
        mutate()
    }


    return (
        <>
            {data && <p>Il nome è {data.name}</p>}
            {data && <p>Questo è il link: {data.url}</p>}
            {error && <p>Err 404</p>}
            <button onClick={onRefresh}>Refresh</button>
        </>
    )
}