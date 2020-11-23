const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const router = require('./Router/upload');
const fs = require('fs');

app.use(cors());
app.set("view options", {layout: false});
app.use(express.static(__dirname + "/build"));
app.get('/*', function(req, res) {
    res.render('/build/index.html');
});
app.listen(port, function () {
    console.log('Server is running on PORT',port);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/upload', router);