import { useEffect, useState } from "react";

export default function NewPost(serverURL) {

    const categorySelect = document.getElementById('categorySelect')
    // const form = document.querySelector('form')

    const [form, setForm] = useState({})
    const [cats, setCats] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    async function getCategories() {
        const posts = await fetch(`${serverURL.serverURL}create`);
        let results = await posts.json();
        setCats(results)
    }

    async function displayCategoriess() {
        let categories = cats
        
        categorySelect.innerHTML = '';

        categories.map((category) => {
            let option = document.createElement('option')

            option.textContent = category.category
            option.value = category.catid

            categorySelect.appendChild(option)
        });
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form)
    }

    async function handlePost(e) {
        e.preventDefault();

        let results = await fetch(`${serverURL.serverURL}create`, {
            method: 'POST',
            mode: 'cors',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ form })
        });

        if (results.ok) {
            getCategories()
        }
    }

    displayCategoriess()

    return (
        <div className="mainDiv">
            <h2 className="pageHeader">Create a Post!</h2>
            <p>Fill in the form below to add a new post to the board.</p>
            <form onSubmit={handlePost}>
                <div>
                    <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" onChange={handleChange} maxLength={50}/>
                </div>
                <div>
                    <label htmlFor="categorySelect">Select category</label>
                    <select name="categorySelect" id="categorySelect" onChange={handleChange}>
                    </select>
                </div>
                <div>
                    <label htmlFor="title">Content (MAX 200 CHAR):</label>
                <textarea name="content" id="content" cols="30" rows="6" onChange={handleChange} maxLength={1000}></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}