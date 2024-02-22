import './App.css'
import { Route, Routes, Link} from "react-router-dom"
import Posts from './pages/Posts'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NewPost from './pages/NewPost'

function App() {

  const serverURL = 'http://localhost:8080/';

  return (
    <>
    <Header />
      <nav>
        <Link to='/home' className='navLinks'>Home</Link> | <Link to='/posts' className='navLinks'>Posts</Link> | <Link to='/newPost' className='navLinks'>Create Post</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/posts' element={<Posts serverURL={serverURL} />} />
        <Route path='/newPost' element={<NewPost serverURL={serverURL} />} />

      </Routes>
    </>
  )
}

export default App
