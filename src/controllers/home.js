const pic = require('../model/index.js');

exports.get = (req, res, next) => {
  pic.get.getAllPhotos((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
