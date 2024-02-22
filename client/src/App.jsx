import './App.css'
import { Route, Routes, Link} from "react-router-dom"
import Posts from './pages/Posts'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  const serverURL = 'http://localhost:8080/';

  return (
    <>
    <Header />
      <nav>
        <Link to='/home' className='navLinks'>Home</Link> | <Link to='/posts' className='navLinks'>Posts</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/posts' element={<Posts serverURL={serverURL} />}></Route>

      </Routes>
    </>
  )
}

export default App
