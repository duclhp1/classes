const express = require("express");
const router = express.Router();
const {addAdmin, login, edit} = require("../Controller/admin");

router.post("/add", function(req, res) {
    const {username, password, role} = req.body;
    addAdmin(res, username, password, role);
});

router.post("/login", function(req, res) {
    const {username, password} = req.body;
    login(res, username, password);
});

router.post("/edit", function(req, res) {
    const {id, password} = req.body;
    edit(res, id, password);
});

module.exports = router
