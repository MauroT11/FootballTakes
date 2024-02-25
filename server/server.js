import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

const app = express();
app.use(cors())
dotenv.config()
app.use(express.json());

let PORT = 8080
const db = new pg.Pool({
    connectionString: process.env.DB_URL
}) 

// GETS ALL DATA FROM POST
app.get('/posts', async (req, res) => {
    try {
        const result = await db.query(
        `SELECT footballPosts.id, footballPosts.title, footballPosts.content, footballPosts.date, footballPosts.likes, footballPosts.dislikes, footballCategories.name AS Category FROM footballPosts JOIN footballCategories ON footballPosts.footballCategory = footballCategories.id`
        )
        res.send(result.rows)
        // console.log(result.rows)
        res.status(200)
        // console.log(result)
    } catch (err) {
        res.status(500).json({error: err})
    }
    
})

// QUERY TO GET EVERY POST WITH THE SELECTED CATEGORY
app.get('/categories/:id', async (req, res) => {
    
    try {
        let id = req.params.id
        const result = await db.query(
        `SELECT footballPosts.id, footballPosts.title, footballPosts.content, footballPosts.date, footballPosts.likes, footballPosts.dislikes, footballCategories.name AS Category FROM footballPosts JOIN footballCategories ON footballPosts.footballCategory = footballCategories.id WHERE footballCategory = $1`,
        [id]
        )
        res.send(result.rows)
        console.log(result.rows)
        res.status(200)
        // console.log(result)
    } catch (err) {
        res.status(500).json({error: err})
    }
    
})

// GETS ALL DATA FROM CATEGORY
app.get('/create', async (req, res) => {
    try {
        const result = await db.query(
        `SELECT footballCategories.name AS category, footballCategories.description, footballCategories.id AS catId FROM footballCategories`
        )
        res.send(result.rows)
        res.status(200)
        // console.log(result)
    } catch (err) {
        res.status(500).json({error: err})
    }
    
})

// CREATE A NEW POST
app.post('/create', async (req, res) => {
    console.log(req.body)
    try {
        let title = req.body.form.title
        let content = req.body.form.content
        let category = req.body.form.categorySelect
        let date = req.body.date

        const result = await db.query(
            `INSERT INTO footballPosts (title, content, likes, dislikes, footballcategory, date) VALUES ($1, $2, $3, $4, $5, $6)`,
            [title, content, 0, 0, category, date]
        );
        
        // console.log(result)
        res.status(200)
    } catch (err) {
        res.status(500).json({error: err})
    }
    
})

// CREATES A NEW CATEGORY FROM USER INPUT
app.post('/category', async (req, res) => {
    
    // console.log(req.body)
    try {
        let category = req.body.form.category
        let description = req.body.form.description

        const result = await db.query(
            `INSERT INTO footballCategories (name, description) VALUES ($1, $2)`,
            [category, description]
        );
        
        // console.log(result)
        res.status(200)
    } catch (err) {
        res.status(500).json({error: err})
    }
    
})

// INCREMENTS THE LIKE ON THE POST
app.put('/like', async (req, res) => {
    try {
        let id = req.body.id
        let likes = req.body.like

        const result = await db.query(
            `UPDATE footballPosts Set likes = $1 WHERE id = $2`, [likes, id]
        );
        
        // console.log(result)
        res.status(200)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

// INCREMENTS THE DISLIKE ON THE POST
app.put('/dislike', async (req, res) => {
    
    // console.log(req.body)
    
    try {
        let id = req.body.id
        let dislikes = req.body.dislike

        const result = await db.query(
            `UPDATE footballPosts Set dislikes = $1 WHERE id = $2`, [dislikes, id]
        );
        
        // console.log(result)
        res.status(200)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

// DELETE POST
app.delete('/delete/:id', (req, res) => {
    // console.log(req.params)

    try {
        const id = req.params.id
        const result = db.query(
            `DELETE FROM footballPosts WHERE id = $1`, [id]
        )
        res.status(200)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})