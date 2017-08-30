const express = require('express');

const router = express.Router();

const home = require('./home');
const search = require('./search');
const addpic = require('./addpic');
const like = require('./likes');

router.get('/', home.get);
router.get('/search', search.get);
router.post('/addpic', addpic.post);
router.post('/like', like.post);

module.exports = router;
