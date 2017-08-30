const dbConnection = require('../database/db_connection.js');

// inserts a photo and returns it's id and title
const addPhoto = (photo, cb) => {
  const sql = {text: 'INSERT INTO posts (title, tags, filePath, likes) VALUES ($1, $2, $3, $4) RETURNING ID,title',
    values: [photo.title, photo.tags, photo.filePath, 0]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows[0]);
    }
  });
};

// incements
const incementLikeById = (id, cb) => {
  const sql = {text: 'UPDATE posts set likes = likes+1 WHERE id=$1 RETURNING likes',
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
  addPhoto,
  incementLikeById
};
