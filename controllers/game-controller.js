var express = require('express')
var router = express.Router()
var db = require('../models') 

// html route, home page
router.get('/', (request, result) => {
	result.render('index')
})

// html route
// router.get('/game', (request, result) => {
// 	result.render('index', {layout: 'phaser.handlebars'})
// })
router.get('/games', (request, result) => {
    console.log('I got to the /api/games get route')
    db.Games.findAll({
        where: {
            need_player: true
        }
    }).then(function(dbGames) {
        console.log('/api/games get all route 0', dbGames[0])
        console.log('the length of dbGames is ', dbGames.length)

        for (var i = 0; i < dbGames.length; i++) {

        }

        let openGamesObj = {
            games: dbGames
        }

        result.render('openGames', {games: openGamesObj})
    })
});

// html route 
// remove this before deploying. this was just for testing.
router.get('/buttons', (request, result) => {
	result.render('buttons', )
})
  
//html route for about page
router.get('/about', (req, res) => {
	res.render('about', {layout: 'main.handlebars'})
})

module.exports = router