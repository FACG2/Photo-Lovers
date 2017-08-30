const pic = require('../model/index.js');

exports.get = (req, res, next) => {
  const tag = req.query.tags;
  pic.get.getPhotosByTag(tag, (err, data) => {
    if (err) {
      next(err);
    } else {
      console.log(data);
      res.render('home', {data});
    }
  });
};
