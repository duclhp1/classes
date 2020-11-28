const {isEmpty} = require("../utils");

const Class = require("../Model/class");

async function getClass() {
    const res = await Class.find({})
    return res
}

async function addClass(s) {
    if (isEmpty(s.id) || isEmpty(s.price) || isEmpty(s.name) || isEmpty(s.teacher) || isEmpty(s.students) || isEmpty(s.day) || isEmpty(s.fromTime) || isEmpty(s.toTime)) return null
    const newClass = new Class(s);
    await newClass.save()
    return newClass
}

async function editClass(s) {
    if (isEmpty(s.id) || isEmpty(s.price) || isEmpty(s.name) || isEmpty(s.teacher) || isEmpty(s.students) || isEmpty(s.day) || isEmpty(s.fromTime) || isEmpty(s.toTime)) return null
    let st = await Class.findById(s.id);
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
    getClass,
    addClass,
    editClass,
}
