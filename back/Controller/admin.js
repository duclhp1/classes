const adminModel = require("../Model/admin");

function addAdmin(res, username, password, role) {
    adminModel.find({username}, (err, data) => {
        if (!err && data.length === 0) {
            const newAdmin = new adminModel({username, password, role})
            newAdmin.save();
            res.send({
                success: true,
                data: newAdmin
            })
        } else {
            res.send({
                success: false
            })
        }
    })
}

function login(res, username, password) {
    adminModel.find({username, password}, (err, data) => {
        if (!err && data.length === 1) {
            res.send({
                success: true,
                data: data[0]
            })
        } else {
            res.send({
                success: false
            })
        }
    })
}

function edit(res, id, password) {
    adminModel.findById(id, (err, data) => {
        if (!err && data) {
            data.password = password
            data.save(err => {
                res.send({
                    success: true,
                    data
                })
            })
        } else {
            res.send({
                success: false
            })
        }
    })
}

module.exports = {
    addAdmin,
    login,
    edit,
}
