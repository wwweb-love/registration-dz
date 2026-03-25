const { Role } = require("../models-db/role")
const { createRole, readRoles } = require("../CRUD-db/crud")

const authorization = async (user) => {
    const roles = await readRoles()

    userRole = ""

    roles.forEach((element, index) => {
        if (element.role_id == user.role_id) {
            userRole = element
        }
    })

    return userRole
}   

module.exports = {
    authorization
}