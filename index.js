"use strict";
exports.__esModule = true;
var express = require("express");
var path_1 = require("path");
exports.app = express();
exports.app.use(express.static(path_1.resolve(__dirname, 'src/public')));
exports.app.get('*', function (req, res) {
    res.sendFile(path_1.resolve(__dirname, 'src/public/index.html'));
});
var port = process.env.PORT || 3000;
exports.app.listen(port, function (err) {
    if (err)
        throw err;
    else
        console.log('Listening on port ' + port);
});
