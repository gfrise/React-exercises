import { Welcome } from "./Welcome";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name='Giuseppe'/>}>
            </Route>
        </Routes>
    )
}