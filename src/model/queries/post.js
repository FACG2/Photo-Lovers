const dbConnection = require('../database/db_connection.js');

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

module.exports = {
  addPhoto
};
