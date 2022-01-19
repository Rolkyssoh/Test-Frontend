import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="*" element={<HomePage to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
