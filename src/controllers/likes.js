const pic = require('../model/index');

exports.get = (req, res, next) => {
  pic.post.incementLikeById(req.query.id, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
};
