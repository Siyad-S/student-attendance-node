const mongoose = require("mongoose");
const student = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    roll_number: {
        type: Number,
        required: true
    }
});

const studentCollection = mongoose.model("student", student);
module.exports = studentCollection;
