import { useGithubUser } from './useGithubUser';

export function GithubUser({username}) {
    const {data, error, loading, fetcha} = useGithubUser();

    function handle() {
        fetcha(username)
    }

    return (
        <>
            <button onClick={handle}>Prendi</button>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>User not found</p>}
            {!loading && data && <p>Il nome è {data.name}</p>}
        </>
    )
}