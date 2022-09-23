import { ClickCounter } from "./ClickCounter";
import { BrowserRouter as Route, Routes } from 'react-router-dom'

export function App() {
    return (
        <Routes>
            <Route path="/counter" element={<ClickCounter />} />
        </Routes>
    )
}