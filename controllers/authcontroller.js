var db = require('../models') 

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
	db.Games.findAll({
		where: {
			need_player: true
		}
	}).then(function(dbGames) {
		res.render('dashboard', {username: req.user.username, games: dbGames});
	})
}

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}