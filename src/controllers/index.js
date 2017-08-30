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
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

router.get('/like', (req, res) => {
  pic.get.getLikesByID(1, (err, Ldata) => {
    if (err) {
      console.log(err);
    }
    // console.log(Ldata);
    res.send('' + Ldata);
  });
});

router.get('/tag', (req, res) => {
  pic.get.getPhotosByTag('#sea #houses', (err, Tdata) => {
    if (err) {
      console.log(err);
    }
    // console.log(Tdata);
    res.send(Tdata);
  });
});
module.exports = router;
