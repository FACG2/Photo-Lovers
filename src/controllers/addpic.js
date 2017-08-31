const pic = require('../model/index.js');
const formidable = require('formidable');
const path = require('path');

exports.post = (req, res, next) => {
  var form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, '..', '..', 'public', 'images');
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
    } else {
      var photo = {
        title: fields.title,
        tags: fields.tags,
        filePath: files.filepath.path.split('/public/')[1]
      };
      pic.post.addPhoto(photo, (err, data) => {
        if (err) {
          next(err);
        } else {
          res.redirect('/');
        }
      });
    }
  });
};
