// getPhotosByTag
const queries = require('../model/index');

exports.get = (req, res) => {
  queries.get.getPhotosByTag(tag, (err, Tdata) => {
    console.log('tag' + Tdata);
    res.render(Tdata);
  });
};
