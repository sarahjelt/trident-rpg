var express = require('express')
var router = express.Router()
var game = require('../models/game.js') // do we need this with sequelize? 

router.get('/', (request, result) => {
	game.all((data) => {
		var gameObj = {
			game: data
		}
		result.render('index', gameObj)
	})
})

module.exports = router