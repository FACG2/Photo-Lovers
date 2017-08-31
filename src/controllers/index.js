const express = require('express');

const router = express.Router();

const home = require('./home');
const search = require('./search');
const addpic = require('./addpic');

const like = require('./likes');
const error = require('./error');

router.get('/', home.get);
router.get('/search', search.get);
router.post('/addpic', addpic.post);

router.get('/like', like.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
