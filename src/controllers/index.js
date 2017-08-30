const express = require('express');
const pic = require('../model/index.js');

const userListFromDatabase = require('./../model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { users: userListFromDatabase });
});

router.get('/data', (req, res) => {
  pic.get.getAllPhotos((err, data) => {
    // console.log(data);
    res.send(data);
  });
});

router.get('/like', (req, res) => {
  pic.get.getLikesByID(1, (err, Ldata) => {
    console.log(err);
    console.log(Ldata);
    res.send(Ldata);
  });
});

router.get('/tag', (req, res) => {
  pic.get.getPhotosByTag('#sea #houses', (err, Tdata) => {
    console.log(Tdata);
    res.send(Tdata);
  });
});
module.exports = router;
