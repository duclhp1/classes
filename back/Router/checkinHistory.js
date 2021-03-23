const express = require("express");
const router = express.Router();
const {checkin} = require("../Controller/checkinHistory");
const {checkAdmin} = require("../Controller/admin");

router.post("/checkin", async function(req, res) {
    const adminId = req.headers.key
    const isAdmin = await checkAdmin(adminId)

    if (isAdmin) {
        const resp = await checkin(req.body)
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
