import './App.css'
import { Route, Routes} from "react-router-dom"
import Posts from './pages/Posts'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NewPost from './pages/NewPost'
import Footer from './components/Footer'
import PostDetails from './pages/PostDetails'
import NewCategory from './pages/NewCategory'

function App() {

  const serverURL = 'http://localhost:8080/';

  return (
    <>
    <Header />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/posts' element={<Posts serverURL={serverURL} />} />
        <Route path='/posts/:id' element={<PostDetails serverURL={serverURL} />} />
        <Route path='/newPost' element={<NewPost serverURL={serverURL} />} />
        <Route path='/newCategory' element={<NewCategory serverURL={serverURL} />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
