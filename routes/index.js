const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index', { title: 'Simon Weller - Full Stack Web Developer' }));

module.exports = router;
