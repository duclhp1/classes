const {isEmpty} = require("../utils");

const teacher = require("../Model/teacher");

async function getTeacher() {
    const res = await teacher.find({})
    return res
}

async function addTeacher(s) {
    if (isEmpty(s.name) || isEmpty(s.phone)) return null
    const newStudent = new teacher(s);
    await newStudent.save()
    return newStudent
}

async function editTeacher(s) {
    if (isEmpty(s.id) || isEmpty(s.name) || isEmpty(s.phone)) return null
    let st = await teacher.findById(s.id);
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
    getTeacher,
    addTeacher,
    editTeacher,
}
