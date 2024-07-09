import { BrowserRouter , Routes , Route } from "react-router-dom";
import IndexPage from "./interfaces/IndexPage";
import FavoritePage from "./interfaces/FavoritePage";
import Layouts from "./layouts/Layouts";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layouts/>}>
                    {/* index indicia que es pagina principal */}
                    <Route path='/' element={<IndexPage />} index /> 
                    <Route path='/favorite' element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
