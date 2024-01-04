const express = require("express")
const router = express.Router();
const {
    getAllstudents,
    getOneStudent,
    postStudent,
    updateStudent,
    deletestudent
} = require("../controllers/studentsController");

router.route("/").get(getAllstudents).post(postStudent);
router.route("/:id").get(getOneStudent).put(updateStudent).delete(deletestudent);

module.exports = router;
