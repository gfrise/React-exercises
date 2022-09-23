import { BrowserRouter as Route, Routes, useParams, Link } from 'react-router-dom'
import { Welcome } from './Welcome'
import { GithubUser } from './GithubUser'
import { ClickCounter } from './ClickCounter'

export function ShowGithubUser() {
	const { username } = useParams()
	return <GithubUser username={username} />
}

export function App() {
	return (
		<>
		 <h1>Links:</h1>
        <p><Link to={"/"}>Home</Link> | <Link to={"counter"}>Counter</Link> | <Link to={"/gfrise"}>Github</Link></p>
		<Routes>
			<Route path="/" element={<Welcome name="Jim" />} />
            <Route path="/counter" element={<ClickCounter />} />
            <Route path="/:username" element={<ShowGithubUser />} />
		</Routes>
		</>
	)
}