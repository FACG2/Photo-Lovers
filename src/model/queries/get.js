const dbConnection = require('../database/db_connection.js');

const getAllPhotos = (cb) => {
  const sql = {text: 'SELECT id,title,tags,filePath, likes from posts'};
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};

const getPhotosByTag = (tag, cb) => {
  const sql = {
    text: 'SELECT id,title,tags,filePath,likes from posts where tags like %$1%',
    values: [tag]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};

const getLikesByID = (id, cb) => {
  const sql = {
    text: 'SELECT likes from posts where id=$1',
    values: [id]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows.likes);
    }
  });
};

module.exports = {
  getAllPhotos,
  getPhotosByTag,
  getLikesByID
};
