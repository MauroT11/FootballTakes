import { useLocation } from "react-router-dom"

export default function PostDetails(serverURL) {

    const post = useLocation()
    console.log(post)

    // WHEN BUTTON GETS PRESSED THE ID AND LIKE OF THE POST INCREASES AND UPDATES POST ON DB
    async function handleLikes(id, likes) {
        console.log('liked')

        let like = likes + 1

        let results = await fetch(`${serverURL.serverURL}like`, {
            method: 'PUT',
            mode: 'cors',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, like })
        });
        console.log(results)
    }

    async function handleDislikes(id, dislikes) {
        console.log('dislikes')

        let dislike = dislikes + 1

        let results = await fetch(`${serverURL.serverURL}dislike`, {
            method: 'PUT',
            mode: 'cors',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, dislike })
        });
        console.log(results)
    }

    async function handleDelete(id) {
        console.log('DELETE')

        const result = await fetch(`${serverURL.serverURL}delete/${id}`, {
            mode: 'cors',
            method: 'DELETE'
        })
        console.log(result)
    }

    return (
        <div id="postDetails">
            {/* <h1>POST DETAILS</h1> */}
            <h1>{post.state.title}</h1>
            <h2>{post.state.category}</h2>
            <h5>Upload: {post.state.date}</h5>
            <p>{post.state.content}</p>
            <div>
                <h4>{post.state.likes} Like(s)</h4>
                <h4>{post.state.dislikes} Dislike(s)</h4>
            </div>
            <div id="postBtns">
                <button className="postBtn" onClick={() => handleLikes(post.state.id, post.state.likes)}>👍</button>
                <button className="postBtn" onClick={() => handleDislikes(post.state.id, post.state.dislikes)}>👎</button>
                <button className="postBtn delete" onClick={() => handleDelete(post.state.id)}>🗙</button>
            </div>
        </div>
    )
}