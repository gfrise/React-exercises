import { useState } from 'react'
import { GithubUser } from './GithubUser'

export function GithubUserList() {
	const [usernames, setUsernames] = useState([])

	function handleSubmit(event) {
		event.preventDefault()
		const element = event.target.elements.username.value
		setUsernames([...usernames, element])
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="username" />
				<button type="submit">Submit</button>
			</form>

			<ul>
				{usernames.map((username, key) => (
					<li key={key}>
						<GithubUser username={username} />
					</li>
				))}
			</ul>
		</>
	)
}