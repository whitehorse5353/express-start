var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', loggedUser: req.query.user, isShow: req.query.isShow});
});

module.exports = router;
