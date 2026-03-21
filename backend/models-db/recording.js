const mongoose = require("mongoose")

const RecordingSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Recording = mongoose.model("Recording", RecordingSchema)

module.exports = Recording