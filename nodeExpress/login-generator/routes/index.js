const { names } = require('debug');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express', name : "akhilesh" });
});

module.exports = router;
