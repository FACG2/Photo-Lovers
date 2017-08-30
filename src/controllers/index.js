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

router.get('/like/:id/', (req, res) => {
  console.log(req.params.id);
  pic.get.getLikesByID(parseInt(req.params.id), (err, Ldata) => {
    if (err) {
      console.log(err);
    }
    // console.log(Ldata);
    res.status(200).json(Ldata);
  });
});

router.get('/tag/:tags', (req, res) => {
  pic.get.getPhotosByTag(req.params.tags, (err, Tdata) => {
    if (err) {
      console.log(err);
    }
    console.log(Tdata);
    res.send(Tdata);
  });
});

router.get('/ph/:id/', (req, res) => {
  pic.get.getphotoById(req.params.id, (err, Pdata) => {
    if (err) {
      console.log(err);
    }
    // console.log(Pdata);
    res.status(200).json(Pdata);
  });
});

// addPhoto
router.post('/addpic', (req, res) => {
  var photo = req.body;
  // console.log(req);
  pic.post.addPhoto(photo, (err, Adata) => {
    if (err) {
      console.log(err);
    }
    // console.log(Adata);
    res.send(Adata);
  });
});

// incementLikeById
router.post('/addlike', (req, res) => {
  console.log(req.body);
  pic.post.incementLikeById(req.body, (err, ALdata) => {
    if (err) {
      console.log(err);
    }
    console.log(ALdata);
    res.send('' + ALdata);
  });
});
module.exports = router;
