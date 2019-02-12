const passport = require('passport');

module.exports = (app) => {
  app.use(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    }));

  app.get('/auth/google/callback', 
    passport.authenticate('google'));
  
  app.use('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }));


  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/google1370dc3b6669530c.html', (req, res) => {
    res.redirect('../google1370dc3b6669530c.html');
  });

}