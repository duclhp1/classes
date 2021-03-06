const express = require("express");
const router = express.Router();
const {getStudent, addStudent, editStudent} = require("../Controller/student");
const {checkAdmin} = require("../Controller/admin");

router.get("/getStudent", async function(req, res) {
    const adminId = req.headers.key
    console.log("adminId", adminId)
    const isAdmin = await checkAdmin(adminId)
    if (isAdmin) {
        const resp = await getStudent()
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

router.post("/addStudent", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await addStudent(req.body)
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

router.post("/editStudent", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await editStudent(req.body)
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
