$(document).ready(function() {
	$('#findAllGames').on('click', () => {
		$.ajax({
			method: 'GET',
			url: '/api/games'
		}).done((response) => {
			console.log(response)
		})
	})

	$('#createNewGame').on('click', () => {
		let data = {
			first_player: 'catslug',
			second_player: null,
			first_player_score: 0,
			second_player_score: 0,
			turn: 'catslug',
			need_player: true,
			game_complete: false,
		}

		$.ajax({
			method: 'POST',
			url: '/api/games',
			data: data
		}).done((response) => {
			console.log(response)
		})
	})
})