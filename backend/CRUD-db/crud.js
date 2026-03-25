const Recording = require("../models-db/recording")
const { Role } = require("../models-db/role")
const User = require("../models-db/user")
const bcrypt = require("bcrypt")
const chalk = require("chalk")

const createRecording = async (formData) => {
    await Recording.create(formData)
}

const readRecordings = async () => {
    return await Recording.find()
}

const createUser = async (data) => {
    const passwordHash = await bcrypt.hash(data.password, 10)
    await User.create({ email: data.email, password: passwordHash, role_id: data.role_id })
    console.log(chalk.bgGreen("User create"), data.email, passwordHash)
}

const readUsers = async () => {
    return await User.find()
}

const createRole = async () => {
    await Role.create({ role_id: 2, role_name: "GUEST" })
    console.log(chalk.bgGreen("Role create"))
}

const readRoles = async () => {
    return await Role.find()
}

module.exports = {
    createRecording,
    readRecordings,
    createUser,
    readUsers,
    createRole,
    readRoles
}