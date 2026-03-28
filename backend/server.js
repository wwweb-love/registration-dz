const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const path = require("path");
const {
    createRecording,
    readRecordings,
    createUser,
    createRole,
} = require("./CRUD-db/crud");
const { identification } = require("./registration/identification");
const { authentication } = require("./registration/authentication");
const { authorization } = require("./registration/authorization");
const { error } = require("console");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/auth");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./constants");

const PORT = 3000;
const server = express();

server.use(
    cors({
        origin: true,
        credentials: true,
    }),
);
server.use(cookieParser());
server.use(express.json());

server.post("/login/auth", async (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body));

    const email = req.body.email;

    let userIdentification = "";
    let userAuthentication = "";
    let userAuthorization = "";

    if (req.body.email) {
        userIdentification = await identification(req.body.email);
        console.log(chalk.bgGreen("User"), userIdentification);
    }

    if (userIdentification) {
        userAuthentication = await authentication(
            userIdentification,
            req.body.password,
        );
        console.log(chalk.bgGreen("Аутентификация"), userAuthentication);
    }

    if (userAuthentication) {
        userAuthorization = await authorization(userIdentification);
        console.log(chalk.bgGreen("Авторизация"), userAuthorization);

        // res.json({ user: userIdentification, role: userAuthorization, error: null })
    } else {
        // res.json({ user: userIdentification, role: userAuthorization, error: "Ошибка" })
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "30d" });
    console.log(token);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: "lax",
        path: "/",
    });

    res.json({
        success: true,
        message: "Успешный вход",
        user: {
            email: email,
            role: userAuthorization,
        },
    });
});

server.post("/login/create", (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body));
    createUser(req.body);
});

server.post("/login/role/create", (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body));
    createRole(req.body);
});

server.use(auth);


server.get("/recordings", async (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), "запрос на получение RECORDINGS");
    
    const recordings = await readRecordings();
    
    res.json({recordings: recordings});
});

server.get("/users", async (req, res) => {
    console.log("users")
    res.json({ access: true, user: req.user.email })
})

server.post("/recording", (req, res) => {
    console.log(chalk.bgBlue("Фронтенд"), JSON.stringify(req.body));
    res.json({ status: "200" });

    createRecording(req.body);
});

mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(() => {
    console.log(chalk.bgGreen("Started mongoose!!!"));
    server.listen(PORT, () => {
        console.log(chalk.bgGreen("Started server!!!"));
    });
});
