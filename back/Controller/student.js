const {isEmpty} = require("../utils");

const student = require("../Model/student");

async function getStudent() {
    const res = await student.find({state: 'visible'})
    return res
}

async function addStudent(s) {
    if (isEmpty(s.name) || isEmpty(s.parentName) || isEmpty(s.parentPhone)) return null
    const newStudent = new student({...s, state: 'visible'});
    await newStudent.save()
    return newStudent
}

async function editStudent(s) {
    if (isEmpty(s.id) || isEmpty(s.name) || isEmpty(s.parentName) || isEmpty(s.parentPhone)) return null
    let st = await student.findById(s.id);
    const keys = Object.keys(s)
    for (let i=0; i < keys.length; i++) {
        if (keys[i] !== "id") {
            st[keys[i]] = s[keys[i]]
        }
    }
    await st.save()
    return st
}

module.exports = {
    getStudent,
    addStudent,
    editStudent,
}
