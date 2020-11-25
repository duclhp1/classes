const express = require("express");
const router = express.Router();
const {getTeacher, addTeacher, editTeacher} = require("../Controller/teacher");
const {checkAdmin} = require("../Controller/admin");

router.get("/getTeacher", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)
    if (isAdmin) {
        const resp = await getTeacher()
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

router.post("/addTeacher", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await addTeacher(req.body)
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

router.post("/editTeacher", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await editTeacher(req.body)
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
