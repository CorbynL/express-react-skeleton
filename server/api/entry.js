const express = require('express');
const userModel = require('../models/users');

const router = express.Router();



router.post('/login', function(req, res, next) {
    console.log(req.body);
    userModel.create({ email: req.body.email , password: req.body.password}, function (err) {
        if (err) return () => console.log(err);
        // saved!
      });
});

router.get('/users', function(req,res,next) {
  userModel.find().exec(function(err, users) {
    console.log(users)
    res.send(users);
  });
});

module.exports = router;