$(document).ready(function() {
	$('#findAllGames').on('click', () => {
		$.ajax({
			method: 'GET',
			url: '/api/games'
		}).done((response) => {
			console.log(response)
		})
	})

	$('.createNewGame').on('click', function() {
		console.log($(this).attr('data-id'));
		let data = {
			first_player: $(this).attr('data-id'),
			second_player: null,
			first_player_score: 0,
			second_player_score: 0,
			turn: $(this).attr('data-id'),
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
