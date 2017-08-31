// getLikesByID
const pic = require('../model/index');

exports.post = (req, res, next) => {
  pic.post.incementLikeById(req.body, (err, ALdata) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
};
