var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/signup'
      }
    ));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    //TEST TEST TEST
    // app.get('/test', function(req, res, next) {
    //   console.log(req.session.passport.user.firstname);
    //   res.render('index');
    // });

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
      successRedirect: '/dashboard',
      failureRedirect: '/signin'
      }
    ));

    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
        console.log(req.user);
      }
      res.redirect('/signin');
    }

};

