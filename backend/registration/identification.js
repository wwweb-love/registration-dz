const { readUsers } = require("../CRUD-db/crud")
const chalk = require("chalk")

const identification = async (email) => {
    const users = await readUsers()
    let user = ""
    users.forEach((element, index) => {
        if (element.email == email) {
            user = element
        }
    });
    return user
}

module.exports = {
    identification
}