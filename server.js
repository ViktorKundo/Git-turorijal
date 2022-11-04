const express = require("express");
const {StatusCodes} = require("http-status-codes");
const res = require("express/lib/response");
const { TOO_MANY_REQUESTS } = require("http-status-codes");
const serverlessMysql = require("serverless-mysql");

const server = express();

server.use(express.static("public"));
server.use(express.json())

server.get("/",(req,res) => {
    res.send("<h1>Početna<h1>");
})

server.post("/api/users", async (req,res) => {
    const {email, password, name} = req.body;
    try{
        await mysql.query("INSERT INTO users VALUES (?, ?, ?)",
        [
            email,
            password,
            name
        ])
        res.status(StatusCodes,CREATED).json({ok:true})
    }
    catch(error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ok: false, message: error.message})
    }
})

server.listen(5000, () => console.log("Server slusa na portu 5000..."));
