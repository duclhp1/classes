const {isEmpty} = require("../utils");

const studentInClass = require("../Model/studentInClass");

async function getStudent() {
    if (isEmpty(s.classId)) return null
    const res = await studentInClass.find({classId: s.classId, state: s.state})
    return res
}

async function addStudent(s) {
    if (isEmpty(s.classId) || isEmpty(s.studentId) || isEmpty(s.state)) return null
    const newStudent = new studentInClass(s);
    await newStudent.save()
    return newStudent
}

async function removeStudent(s) {
    if (isEmpty(s.classId) || isEmpty(s.studentId)) return null
    let st = await studentInClass.findById(s.id);
    st.state = 'removed';
    await st.save()
    return st
}

module.exports = {
    getStudent,
    addStudent,
    removeStudent,
}
