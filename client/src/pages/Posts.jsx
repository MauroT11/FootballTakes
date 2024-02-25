import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function Posts(serverURL) {

    // const postBoard = document.getElementById('postBoard')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    // GETS ALL POSTS FROM DB TO DISPLAY
    async function getPosts() {
        let data = await fetch(`${serverURL.serverURL}posts`);
        let results = await data.json();
        setPosts(results)
        // console.log(posts)
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


    return (
        <div className="mainDiv">
            <h2 className="pageHeader">POSTS</h2>
            <div id="postBoard">
                {displayPosts ? displayPosts : <h1>NO POSTS FOUND!</h1>}
            </div>
        </div>
    )   
}