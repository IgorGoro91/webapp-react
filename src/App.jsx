import DefaultLayout from './layouts/DefaultLayout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import CreateMoviesPage from './pages/CreateMoviesPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={ DefaultLayout }>
            {/* qui vanno le pagine */}
            <Route path='/' Component={HomePage}/>
            <Route path='/movies/:id' Component={MoviesPage}/>
            <Route path='/movies/create' Component={CreateMoviesPage}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
