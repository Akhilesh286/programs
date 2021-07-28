var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let name = ['akhilesh','aji','sanju','mazil','copu']
    let person={names:'akhil',addmin:true}
    res.render('array',name);
});

module.exports = router;
