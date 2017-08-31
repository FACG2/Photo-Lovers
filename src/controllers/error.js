const path = require('path');  // eslint-disable-line

exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Page not found'
  });
};

exports.server = (err, req, res, next) => {
  if (err) {
    next(err);
  }
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Internal server error'
  });
};
