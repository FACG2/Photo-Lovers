// getLikesByID
const queries = require('../model/index');

exports.get = (req, res) => {
  queries.get.getLikesByID(id, (err, Ldata) => {
    console.log('like' + Ldata);
    res.render(Ldata);
  });
};
