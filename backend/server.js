const express = require("express")
const mongoose = require("mongoose")
const chalk = require("chalk")
const cors = require("cors")
const path = require("path")
const { createRecording, readRecordings } = require("./CRUD-db/crud")

const PORT = 3000
const server = express()

server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))
server.use(cors({
    origin: 'http://localhost:5173' // Разрешить только с React сервера
}))

server.get("/recordings", async (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), "запрос на получение RECORDINGS")

    const recordings = await readRecordings()

    res.json(recordings)
})

server.post("/recording", (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body))
    res.json({status: "200"})

    createRecording(req.body)
})


mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(() => {
    console.log(chalk.bgGreen("Started mongoose!!!"))
    server.listen(PORT, () => {
        console.log(chalk.bgGreen("Started server!!!"))
    })
})