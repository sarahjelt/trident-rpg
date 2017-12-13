var express = require('express')
var router = express.Router()
var db = require('../models') 

// html route, home page
router.get('/', (request, result) => {
	result.render('index')
})

// html route
router.get('/game', (request, result) => {
	result.render('index', {layout: 'phaser.handlebars'})
})

// html route
router.get('/buttons', (request, result) => {
	result.render('buttons')
})

// show all active games
router.get('/games', (request, result) => {
	console.log('I got to the /api/games get route')
	db.Games.findAll({
		where: {
			need_player: true
		}
	}).then(function(dbGames) {
		console.log('/api/games get all route 0', dbGames[0].dataValues.id)
		console.log('the length of dbGames is ', dbGames.length)
		let dbGamesArr = []

		for (var i = 0; i < dbGames.length; i++) {
			let newObj = {
				id: dbGames[i].dataValues.id,
				first_player: dbGames[i].dataValues.first_player
			}

			dbGamesArr.push(newObj)
		}

		console.log('dbGamesArr', dbGamesArr)

		let openGamesObj = {
			games: dbGamesArr
		}

		console.log('openGamesObj', openGamesObj)

		result.render('openGames', {games: dbGames})
	})
})
  
//html route for about page
router.get('/about', (req, res) => {
	res.render('about', {layout: 'main.handlebars'})
})

module.exports = router