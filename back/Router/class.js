const express = require("express");
const router = express.Router();
const {getClass, addClass, editClass} = require("../Controller/class");
const {getStudent} = require("../Controller/studentInClass");
const {checkAdmin} = require("../Controller/admin");

router.get("/getClass", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)
    if (isAdmin) {
        const resp = await getClass()
        res.send({
            success: true,
            data: resp
        })
    }
    else {
        res.send({
            success: false
        })
    }
});

router.get("/getClassInfo", async function(req, res) {
    const adminId = req.headers.key
    const {classId, state} = req.query
    const isAdmin = await checkAdmin(adminId)
    if (isAdmin) {
        const students = await getStudent({classId, state})
        const resp = await getClass()
        res.send({
            success: true,
            data: resp
        })
    }
    else {
        res.send({
            success: false
        })
    }
});

router.post("/addClass", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await addClass(req.body)
        res.send({
            success: true,
            data: resp
        })
    }
    else {
        res.send({
            success: false
        })
    }
});

router.post("/editClass", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await editClass(req.body)
        res.send({
            success: true,
            data: resp
        })
    }
    else {
        res.send({
            success: false
        })
    }
});

module.exports = router
