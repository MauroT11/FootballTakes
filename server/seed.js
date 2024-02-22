import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_URL
})

db.query(
    `CREATE TABLE IF NOT EXISTS footballPosts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        content TEXT NOT NULL,
        likes INTEGER NOT NULL,
        footballCategory INTEGER references footballCategories (id)
    );
    
    CREATE TABLE IF NOT EXISTS footballCategories (
        id SERIAL PRIMARY KEY,
        name varchar(50) NOT NULL
    );
    
    INSERT INTO footballPosts (title, content, likes, footballCategory) VALUES ('EXAMPLE3', 'EXAMPLE CONTENT 3', 0, 3);
    INSERT INTO footballPosts (title, content, likes, footballCategory) VALUES ('EXAMPLE4', 'EXAMPLE CONTENT 4', 0, 4);
    `
)

// INSERT INTO footballCategories (name) VALUES ('Premier League');
//     INSERT INTO footballCategories (name) VALUES ('La Liga');
//     INSERT INTO footballCategories (name) VALUES ('Serie A');
//     INSERT INTO footballCategories (name) VALUES ('Ligue 1');
//     INSERT INTO footballCategories (name) VALUES ('Bundesliga');
//     INSERT INTO footballPosts (title, content, likes, footballCategory) VALUES ('EXAMPLE1', 'EXAMPLE CONTENT 1', 0, 1);
//     INSERT INTO footballPosts (title, content, likes, footballCategory) VALUES ('EXAMPLE2', 'EXAMPLE CONTENT 2', 0, 2);
//     `