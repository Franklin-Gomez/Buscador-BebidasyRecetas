import { Route , Routes , BrowserRouter } from 'react-router-dom'
import IndexPage from './interfaces/IndexPage.tsx'
import FavoritePage from './interfaces/FavoritePage.tsx'
import Layout from './Components/Layout.tsx'

export default function AppRouter() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout/>}>

          <Route path='/' element={<IndexPage/>} />
          <Route path='favoritos' element={<FavoritePage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

