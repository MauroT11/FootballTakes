import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function Posts(serverURL) {

    // const postBoard = document.getElementById('postBoard')

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getPosts()
        getCategories()
    }, [])

    console.log(categories)

    // GETS ALL POSTS FROM DB TO DISPLAY
    async function getPosts() {
        let data = await fetch(`${serverURL.serverURL}posts`);
        let results = await data.json();
        setPosts(results)
    }

    async function getCategories() {
        let data = await fetch(`${serverURL.serverURL}create`);
        let results = await data.json();
        setCategories(results)
    }

    let displayPosts = posts.map((post) => (
        <div className="postsDiv" key={posts.id}>
            <h3>{post.title}</h3>
            <h4>{post.category}</h4>
            <div>
                <h5>{post.likes} 👍</h5>
                <h5>{post.dislikes} 👎</h5>
            </div>
            <div id="postBtnDiv">
                <Link to={`/posts/${post.id}`} state={post}>
                    <button>View Post</button>
                </Link>
                {/* <button className="postBtn delete" onClick={handleDelete}>🗙</button> */}
            </div>
            
        </div>
    ))

    let displayCategories = categories.map((category) => (
        <Link to={`/categories/${category.category}`} state={category} key={category.catid}>{category.category}</Link>
    ))

    // console.log(categories)
    // console.log(posts)

    return (
        <div className="mainDiv">
            <h2 className="pageHeader">POSTS</h2>
            <div>
                {displayCategories ? displayCategories : <h3>hes</h3>}
            </div>
            
            <div className="postBoard">
                {displayPosts ? displayPosts : <h1>NO POSTS FOUND!</h1>}
            </div>
        </div>
    )   
}