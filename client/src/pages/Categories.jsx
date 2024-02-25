import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"

export default function Categories(serverURL) {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        getPosts()
    }, [])

    const state = useLocation()
    
    const id = state.state.catid
    console.log(state)
    const pageHeader = state.state.category
    const pageDesc = state.state.description

    

    async function getPosts() {
        let data = await fetch(`${serverURL.serverURL}categories/${id}`);
        let results = await data.json();
        setPosts(results)
    }

    // const pageHeader = posts[0].category

    // console.log(pageHeader)

    let displayPosts = posts.map((post) => (
        <>
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
        </>
    ))

    return (
        <div>
            <div className="mainDiv">
                <h1>{pageHeader}</h1>
                <h4>{pageDesc}</h4>
                <div className="postBoard">
                    {displayPosts ? displayPosts : <h2>ERROR</h2>}
                </div>
                
            </div>
            
        </div>
        
    )
}