var express = require('express')
var router = express.Router()
var db = require('../models') 

// all routes direct from /api/[whatever]
// user-specific view screen
router.get('/user/:username?', (request, result) => {
	db.Games.findAll({
		where: {
			first_player: request.params.username
		}
	}).then(function(dbUser) {
		console.log('dbUser', dbUser)
		result.render('viewUserActiveGames',{games: dbUser})
	})
})

// show all active games 
// tested and renders
router.get('/games', (request, result) => {
	db.Games.findAll({
		where: {
			need_player: true
		}
	}).then(function(dbGames) {
		result.render('openGames', {games: dbGames})
	})
})

// create a new game
router.post('/games', (request, result) => {
	console.log('I got to the /api/games post route')
	db.Games.create(request.body, {include: [db.Users]}).then(function(dbGame) {
		console.log('/api/games post route', request.body)
		db.Users.update(
		{
			GameId: dbGame.id
		},
		{
			where: {
				id: request.body.first_player_id,
			},
		})
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