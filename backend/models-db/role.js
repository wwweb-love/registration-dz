const mongoose = require("mongoose")

const RoleSchema = mongoose.Schema({
    role_id: {
        type: String,
        required: true
    },
    role_name: {
        type: String, 
        required: true
    }
})

const Role = mongoose.model("Role", RoleSchema)


module.exports = {
    Role
}