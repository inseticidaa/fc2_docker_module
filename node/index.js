const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
    host: "database",
    user: "root",
    password: "root",
    database: "nodedb"
}

const conn = mysql.createConnection(config);

const query = `insert into people(name) values('alisson')`;
conn.query(query);
conn.end();

app.get("/", (req, res) => {
    res.send("<h1>Hello, World! </h1>")
})

app.listen(3000, () => {
    console.log(`Rodando na portar ${port}`)
})