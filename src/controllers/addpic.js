const pic = require('../model/index.js');

exports.post = (req, res, next) => {
  var photo = req.body;
  pic.post.addPhoto(photo, (err, Adata) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
};
