const express = require('express');

const router = express.Router();

const home = require('./home');
const search = require('./search');
const addpic = require('./addpic');
const likes = require('./likes');

router.get('/', home.get);
router.get('/search', search.get);
router.post('/addpic', addpic.post);
router.get('/likes', likes.get);

module.exports = router;
