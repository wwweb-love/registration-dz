const bcrypt = require("bcrypt")

const authentication = async (user, password) => {
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    return isPasswordCorrect
}


module.exports = {
    authentication
}