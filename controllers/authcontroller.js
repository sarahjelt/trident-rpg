var exports = module.exports = {}
var db = require('../models')
 
exports.signup = function(req, res) {
 
    res.render('signup', {user: req.user});
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
  db.Games.findAll({
      where: {
        first_player: req.user.username
      }
  }).then(function(dbGames) {
    console.log('the user id is', req.user.id)
      res.render('dashboard', {username: req.user.username, games: dbGames, userId: req.user.id, user: req.user});
  })
}

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}

exports.game = function(req, res) {
  res.render('phaserView', {layout: 'phaser.handlebars', user: req.user});
}
