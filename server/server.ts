import express from "express";
import sqlite from "sqlite3";

const server = express();

// Load the database and check for errors.
let db = new sqlite.Database("./server-build/blog_database.db", (error) => {
    if (error) {
        console.log("There was an error opening the database.");
    }

    console.log("Connected to database.");
});

const port = 3001;

server.get('/', (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

server.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
