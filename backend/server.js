const express = require("express")
const mongoose = require("mongoose")
const chalk = require("chalk")
const cors = require("cors")
const path = require("path")
const { 
    createRecording, 
    readRecordings, 
    createUser
 } = require("./CRUD-db/crud")
const { identification } = require("./registration/identification")
const { authentication } = require("./registration/authentication")
const { authorization } = require("./registration/authorization")
const { error } = require("console")

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

server.post("/login/auth", async (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body))

    let userIdentification = ""
    let userAuthentication = ""
    let userAuthorization = ""

    if (req.body.email) {
        userIdentification = await identification(req.body.email)
        console.log(chalk.bgGreen("User"), userIdentification)
    }

    if (userIdentification) {
        userAuthentication = await authentication(userIdentification, req.body.password) 
        console.log(chalk.bgGreen("Аутентификация"), userAuthentication)
    }

    if (userAuthentication) {
        userAuthorization = await authorization(userIdentification)
        console.log(chalk.bgGreen("Авторизация"), userAuthorization)

        res.json({ user: userIdentification, role: userAuthorization, error: null })
    } else {
        res.json({ user: userIdentification, role: userAuthorization, error: "Ошибка" })
    }

})

server.post("/login/create", (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body))
    createUser(req.body)
})


mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(() => {
    console.log(chalk.bgGreen("Started mongoose!!!"))
    server.listen(PORT, () => {
        console.log(chalk.bgGreen("Started server!!!"))
    })
})