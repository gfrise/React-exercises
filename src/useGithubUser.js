import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export function useGithubUser(username) {
	const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

	return {data, error, mutate}
}