import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1>FOOTBALL HOT TAKES</h1>
            <nav>
        <Link to='/' className='navLinks'>Home</Link> <Link to='/posts' className='navLinks'>Posts</Link> <Link to='/newPost' className='navLinks'>Create Post</Link> <Link to='/newCategory' className="navLinks">Create Category</Link>
      </nav>
        </header>
    )
}