import { GithubUser } from './GithubUser';
import { BrowserRouter as Route, Routes, useParams } from 'react-router-dom'

export function ShowGithubUser() {
	const { username } = useParams() 
	return <GithubUser username={username} />
}

export function App() {
    return (
        <Routes>
			  <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
    )
}