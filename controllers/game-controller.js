var express = require('express')
var router = express.Router()
var db = require('../models') 

// html route, home page
router.get('/', (request, result) => {
	result.render('index')
})

// login
// user-specific view screen
router.get('/api/user/:username?', (request, result) => {
	db.Users.findOne({
		where: {
			id: req.params.username
		},
		include: [db.Games] // joins the games db
	}).then(function(dbUser) {
		res.json(dbUser)
	})
})

// create a new user
router.post('/api/user', (request, result) => {
	db.Users.create(req.body).then(function(dbUser) {
		res.json(dbUser)
	})
})

// find all games and list them for view to user
router.get('/api/games', (request, result) => {
	db.Games.findAll({
		include: [db.Users]
	}).then(function(dbGames) {
		res.json(dbGames)
	})
})

// create a new game
router.post('/api/games', (request, result) => {
	db.Games.create(req.body).then(function(dbGame) {
		res.json(dbGame)
	})
})

// update game stats upon movement, adding player, etc
router.put('/api/games/:id?', (request, result) => {
	db.Games.update(req.body,
	{
		where: {
			id: req.params.id
		}
	}).then(function(dbGame) {
		res.json(dbGame)
	})
})

// html route
router.get('/game', (request, result) => {
	result.render('index', {layout: 'phaser.handlebars'})
})

module.exports = router