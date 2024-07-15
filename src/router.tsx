import { Route , Routes , BrowserRouter } from 'react-router-dom'
import IndexPage from './interfaces/IndexPage.tsx'

export default function AppRouter() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<IndexPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

