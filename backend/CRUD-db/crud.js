const Recording = require("../models-db/recording")

const createRecording = async (formData) => {
    await Recording.create(formData)
}

const readRecordings = async () => {
    return await Recording.find()
}

module.exports = {
    createRecording,
    readRecordings
}