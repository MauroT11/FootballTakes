export default function Posts(serverURL) {

    const postBoard = document.getElementById('postBoard')

    async function getPosts() {
        const posts = await fetch(`${serverURL.serverURL}posts`);
        let results = posts.json();
        return results;
    }

    async function displayPosts() {
        let posts = await getPosts();
        console.log(posts);
        
        postBoard.innerHTML= '';

        posts.forEach(post => {
            let postsDiv = document.createElement('div');
            let title = document.createElement('h3');
            let content = document.createElement('p');
            let likes =  document.createElement('p');
            let category = document.createElement('p');

            postsDiv.setAttribute('class', 'postsDiv');
            title.textContent = post.title;
            content.textContent = post.content;
            likes.textContent = `👍${post.likes}`;
            category.textContent = `Category: ${post.category}`;

            postsDiv.appendChild(title);
            postsDiv.appendChild(category);
            postsDiv.appendChild(content);
            postsDiv.appendChild(likes);
            
            postBoard.appendChild(postsDiv);
        });

    }
    
    displayPosts()

    return (
        <div className="mainDiv">
            <h2 className="pageHeader">POSTS</h2>
            <div id="postBoard">
                
            </div>
        </div>
    )   
}