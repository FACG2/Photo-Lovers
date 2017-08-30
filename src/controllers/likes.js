// getLikesByID
const pic = require('../model/index');

exports.post = (req, res, next) => {
  console.log(req.body);
  pic.post.incementLikeById(req.body, (err, ALdata) => {
    if (err) {
      next(err);
    } else {
      // console.log(ALdata);
      res.redirect('/');
    }
  });
};
