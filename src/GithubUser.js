import React, { useEffect, useState } from 'react';
import { useGithubUser } from './useGithubUser';

export function GithubUser({username}) {
    const {name, url} = useGithubUser({username});

    return (
        <>
            {name && <p>Il nome è {name}</p>}
            {url && <p>Questo è il link: {url}</p>}
        </>
    )
}