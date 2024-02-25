import { useState } from "react";

export default function NewCategory(serverURL) {

    const [form, setForm] = useState({})

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form)
    }

    async function handleCategory(e) {
        e.preventDefault();

        let results = await fetch(`${serverURL.serverURL}category`, {
            method: 'POST',
            mode: 'cors',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ form })
        });
    }

    return (
        <div className="mainDiv">
            <h2>Create a new Category</h2>
            <form onSubmit={handleCategory}>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" id="category" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="30" rows="6" onChange={handleChange} maxLength={150} />
                </div>
                <button type="submit">Create Category</button>
            </form>
        </div>
    )
}