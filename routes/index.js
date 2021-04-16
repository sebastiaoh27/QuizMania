var express = require('express');
var router =express.Router();


router.get('/', function (req,res,next) {
    res.sendFile("index.html",{root: "./public"})
})

router.get('/help', function (req,res,next) {
    res.sendFile("help.html",{root: "./public"})
})

router.get('/contact', function (req,res,next) {
    res.sendFile("contact.html",{root: "./public"})
})

router.get('/createRoom', function (req,res,next) {
    res.sendFile("createRoom.html",{root: "./public"})
})

module.exports = router;