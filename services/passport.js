const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


//turn user into cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// get user from cookie
passport.deserializeUser((id, done)=> {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// passport.use(new GoogleStrategy({
//   clientID: keys.googleClientID,
//   clientSecret: keys.googleClientSecret,
//   callbackURL: "/auth/google/callback",
//   proxy: true
// }, async (accessToken, refreshToken, profile, done) => {
//   console.log(profile);
  
//   const existingUser = await User.findOne({ googleId: profile.id });
    
//   if (existingUser) {
//     // already have a record
//     return done(null, existingUser);
//   } 
//   // create a new user
//   const user = await new User({ googleId: profile.id }).save();
//   done(null, user);
    
// }));

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'email'],
  enableProof: true,
  proxy: true
},
async function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  // const existingUser = await User.findOne({ facebookId: profile.id});

  // if (existingUser) {
  //   return done(null, existingUser);
  // } 

  // const user = await new User({ facebookId: profile.id}).save()
  //   .then(validUser => done(null, validUser));
  
  const existingUser = await User.findOne({ facebookId: profile.id });
    
  if (existingUser) {
    // already have a record
    return done(null, existingUser);
  } 
  
  // create a new user
  const user = await new User({ facebookId: profile.id }).save();
  done(null, user);
  
    
}
));
