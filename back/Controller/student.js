const {isEmpty} = require("../utils");

const student = require("../Model/student");

async function getStudent() {
    const res = await student.find({})
    return res
}

async function addStudent(s) {
    if (isEmpty(s.name) || isEmpty(s.parentName) || isEmpty(s.parentPhone)) return null
    const newStudent = new student(s);
    await newStudent.save()
    return newStudent
}

module.exports = {
    getStudent,
    addStudent,
}
