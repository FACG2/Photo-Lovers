const dbConnection = require('../database/db_connection.js');

// returns an array with all photos
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

// returns an object that has
const getphotoById = (id, cb) => {
  const sql = {text: 'SELECT id,title,tags,filePath, likes from posts where id = $1',
    values: [id]};
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};

// returns an array with photos that includes the passed tag
const getPhotosByTag = (tag, cb) => {
  const sql = {
    text: 'SELECT id,title,tags,filePath,likes from posts where tags like $1',
    values: [`%${tag}%`]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};

// returns an integer with the number of likes for the given id
const getLikesByID = (id, cb) => {
  const sql = {
    text: 'SELECT likes from posts where id=$1',
    values: [id]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows[0].likes);
    }
  });
};

module.exports = {
  getAllPhotos,
  getphotoById,
  getPhotosByTag,
  getLikesByID
};
