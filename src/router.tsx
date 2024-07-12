import { lazy , Suspense  } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";

const FavoritesPage = lazy(() => import ('./interfaces/FavoritePage'))
const IndexPage = lazy(() => import ( './interfaces/IndexPage' ))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layouts/>}>
                    {/* index indicia que es pagina principal */}
                    <Route path='/' element={
                        <Suspense fallback="Cargando...">
                            <IndexPage/>
                        </Suspense>
                    } />

                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage/>
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
