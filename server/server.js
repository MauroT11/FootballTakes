import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

const app = express();
app.use(cors())
dotenv.config()

let PORT = 8080
const db = new pg.Pool({
    connectionString: process.env.DB_URL
}) 

app.get('/posts', async (req, res) => {
    const result = await db.query(
        `SELECT footballPosts.title, footballPosts.content, footballPosts.likes, footballCategories.name AS Category FROM footballPosts JOIN footballCategories ON footballPosts.footballCategory = footballCategories.id`
    )
    res.send(result.rows)
    console.log(result)
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})