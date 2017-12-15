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
			first_player: $(this).attr('data-username'),
			second_player: null,
			first_player_score: 0,
			second_player_score: 0,
			turn: $(this).attr('data-username'),
			need_player: true,
			game_complete: false,
			first_player_id: $(this).attr('data-id')
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

$(document).ready(function() {
	$('.signin-input-email').on('click', () => {
		$('#email-label').removeClass('signin-label-right-email')
		$('#email-label').addClass('signin-label-left-email')
	})

	$('.signin-input-email').focusout(() => {
		if ($('.signin-input-email').val() === '') {
			$('#email-label').removeClass('signin-label-left-email')
			$('#email-label').addClass('signin-label-right-email')
		} 
	})

	$('.signin-input-password').on('click', () => {
		$('#password-label').removeClass('signin-label-right-password')
		$('#password-label').addClass('signin-label-left-password')
	})

	$('.signin-input-password').focusout(() => {
		if ($('.signin-input-password').val() === '') {
			$('#password-label').removeClass('signin-label-left-password')
			$('#password-label').addClass('signin-label-right-password')
		} 
	})
})
