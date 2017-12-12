var express = require('express')
var router = express.Router()
var db = require('../models') 

// login
// user-specific view screen
router.get('/user/:username?', (request, result) => {
	db.Users.findOne({
		where: {
			id: request.params.username
		},
		include: [db.Games] // joins the games db
	}).then(function(dbUser) {
		result.json(dbUser)
	})
})

// create a new user
router.post('/user', (request, result) => {
	db.Users.create(request.body).then(function(dbUser) {
		result.json(dbUser)
	})
})

// find all games and list them for view to user
router.get('/games', (request, result) => {
	console.log('I got to the /api/games get route')
	db.Games.findAll({
		where: {
			need_player: true
		},
		include: [db.Users]
	}).then(function(dbGames) {
		console.log('/api/games get all route', dbGames)
		result.json(dbGames)
	})
})

// create a new game
router.post('/games', (request, result) => {
	console.log('I got to the /api/games post route')
	db.Games.create(request.body).then(function(dbGame) {
		console.log('/api/games post route', dbGame)
		result.json(dbGame)
	})
})

// update game stats upon movement, adding player, etc
router.put('/games/:id?', (request, result) => {
	db.Games.update(request.body,
	{
		where: {
			id: request.params.id
		}
	}).then(function(dbGame) {
		result.json(dbGame)
	})
})

module.exports = router