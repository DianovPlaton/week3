const fs = require("fs").promises
const mainRoute = require("express").Router();
mainRoute.get("/", (req, res)=>{
    fs.readFile("../public/index.html", "utf-8").then((data)=>{
        res.header("Content-Type", "text/html").send(data)
    })
    res.status(200).send("<h1>Скоро тут будет  интерфейс</h1>")
});
module.exports = mainRoute;