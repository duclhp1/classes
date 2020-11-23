const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
var fs = require('fs')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        const {originalname} = file
        let kt = false;
        let mime = ''
        for (let i=0; i<originalname.length; i++) {
            const item = originalname[i]
            if (kt) {
                mime = mime + item
            }
            else {
                if (item === '.') {
                    kt = true
                    mime = mime + item
                }
            }
        }

        cb(null, file.fieldname + '-' + Date.now() + mime)
    }
})

const upload = multer({
    limits: {
        fileSize: 40 * 1024 * 1024,
    },
    storage: storage
});

router.get('/', async function (req, res) {
    fs.readFile('data.txt', 'utf8', (err, d) => {
        let data = []
        if (d) {
            data = JSON.parse(d)
        }

        res.send({
            ok: true,
            data
        })
    });
});

router.post('/post', upload.single('image'), async function (req, res, next) {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    sharp(file.path).resize(200).toFile('./public/uploads/'+file.filename, function(err) {
        if (!err) {
            fs.readFile('data.txt', 'utf8', (err, d) => {
                let data = []
                if (d) {
                    data = JSON.parse(d)
                }
                data.push('/uploads/' + file.filename)
                fs.writeFile('data.txt', JSON.stringify(data), err => {})

                res.send({
                    ok: true,
                    path: file.filename
                })
            });
        }
    })
});

module.exports = router;
