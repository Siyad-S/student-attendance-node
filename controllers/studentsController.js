const asyncHandler = require("express-async-handler");
const student = require("../model/student")

//get all students
const getAllstudents = asyncHandler( async (req, res) => {
    const allStudents = await student.find();
    if(!allStudents) {
        res.status(404).json({message: "Error occured during getting all students"});
    } else {
        res.status(200).json({message: "All students are gotten successfully", allStudents});
    }
});

//get one student
const getOneStudent = asyncHandler( async (req, res) => {
    const oneStudent = await student.findById(req.params.id);
    if (!oneStudent) {
        res.status(404).json({message: "Error occured to get one student"})
    } else {
        res.status(200).json({message: "One student gotten successfully", oneStudent});
    }
})

//post student
const postStudent = asyncHandler( async (req, res) => {
    try {
        const { student_name, roll_number } = req.body
        console.log({student_name, roll_number})
        if (!student_name || !roll_number) {
            res.status(404).json({message: "All fields are mandatory"});
        } else {
            const studentdata = await student.create({
                student_name, roll_number
            });
            res.status(200).json({message: "Student posted successfully", studentdata});
        }
    } catch (err) {
        res.status(500).json({err: err});
    }
});

//update Student
const updateStudent = asyncHandler( async (req, res) => {
    const studentData = {...req.body}
    const updateStudentWithId = await student.findByIdAndUpdate(req.params.id, studentData, {new:true});
    if (!updateStudentWithId) {
        res.status(401).json({message: "Error occured during updation"});
    } else {
        res.status(200).json({message: "Student updated successfully", updateStudentWithId});
    }
})

//delete student

const deletestudent = asyncHandler( async (req, res) => {
    const deleteStudentWithId = await student.findByIdAndDelete(req.params.id);
    if (!deleteStudentWithId) {
        res.status.json({message: "Error occured during deletion"});
    } else {
        res.status(200).json({message: "Student deleted successfully", deleteStudentWithId});
    }
})

module.exports = {
    getAllstudents,
    getOneStudent,
    postStudent,
    updateStudent,
    deletestudent
}