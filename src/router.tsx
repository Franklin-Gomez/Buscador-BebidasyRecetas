import { BrowserRouter , Routes , Route } from "react-router-dom";
import IndexPage from "./interfaces/IndexPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
