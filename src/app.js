const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index.js');
const bodyParser = require('body-parser');
// const helpers = require('./views/helpers/index');

const app = express();

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
    // helpers: helpers
  })
);

app.set('port', process.env.PORT || 2200);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(controllers);

module.exports = app;
