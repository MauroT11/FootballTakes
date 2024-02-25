import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_URL
})

db.query(
    `CREATE TABLE IF NOT EXISTS footballPosts (
        id SERIAL PRIMARY KEY,
        title TEXT) NOT NULL,
        content TEXT NOT NULL,
        likes INTEGER NOT NULL,
        dislikes INTEGER NOT NULL,
        date TEXT
        footballCategory INTEGER references footballCategories (id)
    );
    
    CREATE TABLE IF NOT EXISTS footballCategories (
        id SERIAL PRIMARY KEY,
        name TEXT,
        description TEXT
    );
    
    INSERT INTO footballCategories (name, description) VALUES ('Premier League', 'Posts relating to the premier league. Englands top football division.');
    INSERT INTO footballCategories (name, description) VALUES ('La Liga', 'Posts relating to the La Liga. Spains top football division.');
    INSERT INTO footballCategories (name, description) VALUES ('Serie A', 'Posts relating to the Serie A. Italys top football division.');
    INSERT INTO footballCategories (name, description) VALUES ('Ligue 1', 'Posts relating to the Ligue 1. Frances top football division.');
    INSERT INTO footballCategories (name, description) VALUES ('Bundesliga', 'Posts relating to the Bundesliga. Germanys top football division.');
    INSERT INTO footballPosts (title, content, likes, dislikes, date, footballCategory) VALUES ('EXAMPLE1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed odio.', 0, 0, '21/2/2024 15:21' 1);
    INSERT INTO footballPosts (title, content, likes, dislikes, date, footballCategory) VALUES ('EXAMPLE2', 'Morbi leo urna molestie at. Tellus elementum sagittis vitae et leo. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et.', 0, 0, '18/2/2024 7:59' 3);
    INSERT INTO footballPosts (title, content, likes, dislikes, date, footballCategory) VALUES ('EXAMPLE3', 'Congue quisque egestas diam in arcu cursus. Pretium viverra suspendisse potenti nullam. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.', 0, 0, '5/2/2024 12:17' 5);
    INSERT INTO footballPosts (title, content, likes, dislikes, date, footballCategory) VALUES ('EXAMPLE4', 'Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Faucibus et molestie ac feugiat sed lectus. Vulputate ut pharetra sit amet.', 0, 0, '25/2/2024 20:50' 4);
    `
)
