const pic = require('../model/index.js');

exports.get = (req, res, next) => {
  console.log('sdfbn');
  pic.get.getAllPhotos((err, data) => {
    if (err) {
      next(err);
    } else {
      console.log(data);
      res.render('home', {data});
    }
  });
};
