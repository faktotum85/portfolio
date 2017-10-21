var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', {title: 'Simon Weller - Full Stack Web Developer'}));

module.exports = router;
