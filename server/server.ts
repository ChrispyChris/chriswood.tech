import express from "express";
import sqlite from "sqlite3";

let db = new sqlite.Database("./blog_database.db", (error) => {
    if (error) {
        console.log("There was an error opening the database.");
    }

    console.log("Connected to database.");
});


