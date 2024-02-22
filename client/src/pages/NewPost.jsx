export default function NewPost(serverURL) {

    const categorySelect = document.getElementById('categorySelect')

    async function getCategories() {
        const posts = await fetch(`${serverURL.serverURL}create`);
        let results = posts.json();
        return results;
    }

    async function displayCategoriess() {
        let categories = await getCategories();
        
        categorySelect.innerHTML = '';

        categories.forEach(category => {
            let option = document.createElement('option')

            option.textContent = category.category

            categorySelect.appendChild(option)
        });
    }

    displayCategoriess()

    return (
        <div className="mainDiv">
            <h2 className="pageHeader">Create a Post!</h2>
            <p>Fill in the form below to add a new post to the board.</p>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="categorySelect">Select category</label>
                    <select name="categorySelect" id="categorySelect">
                    </select>
                </div>
                <div>
                    <label htmlFor="title">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}