const queries = require('../model/index');

exports.get = (req, res) => {
  // console.log(photoList);

  queries.get.getAllPhotos((err, data) => {
    if (err) {
      console.log(err);
    }
    res.render(data);
  });
  // res.render('photos', {photoList: photoList});
};
