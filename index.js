const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const path = require('path');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/google1370dc3b6669530c.html', (req, res) => {
  // res.send('../google1370dc3b6669530c.html');
  // res.redirect('./google1370dc3b6669530c.html');
  res.sendFile(path.join(__dirname + '/google1370dc3b6669530c.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// https://guarded-oasis-46908.herokuapp.com/
// https://git.heroku.com/guarded-oasis-46908.git