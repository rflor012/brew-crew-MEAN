const LocalStrategy  = require('passport-local').Strategy;
const user           = require('../models/user');
const bcrypt         = require('bcryptjs');

module.exports = function (passport) {
  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if(err) {
        next(err);
        return;
      }

      if(!foundUser) {
        next(null, false, { message: 'Incorrect username'});
        return;
      }

      if(!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password'});
        return;
      }

      next(null, foundUser);
    });
  }));

  passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb)=> {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
        cb(err);
        return;
      }

      cb(null, userDocument);
    });
  });
}
