$(document).ready(function() {
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

	// $('.continueGame').on('click', function() {
	// 	console.log($(this).attr('data-id'));

	// });
})

// input animation
$(document).ready(function() {
	$('.signin-input-email').on('click', () => {
		$('#email-label').removeClass('signin-label-right-email')
		$('#email-label').addClass('signin-label-left-email')
	})

	$('.signin-input-email').focusin(() => {
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

	$('.signin-input-password').focusin(() => {
		$('#password-label').removeClass('signin-label-right-password')
		$('#password-label').addClass('signin-label-left-password')
	})

	$('.signin-input-password').focusout(() => {
		if ($('.signin-input-password').val() === '') {
			$('#password-label').removeClass('signin-label-left-password')
			$('#password-label').addClass('signin-label-right-password')
		} 
	})

	$('#register-input-email').on('click', () => {
		$('#reg-email-label').removeClass('register-label-right-email')
		$('#reg-email-label').addClass('register-label-left-email')
	})

	$('#register-input-email').focusin(() => {
		$('#reg-email-label').removeClass('register-label-right-email')
		$('#reg-email-label').addClass('register-label-left-email')
	})

	$('#register-input-email').focusout(() => {
		if ($('#register-input-email').val() === '') {
			$('#reg-email-label').removeClass('register-label-left-email')
			$('#reg-email-label').addClass('register-label-right-email')
		}
	})

	$('#register-input-first').on('click', () => {
		$('#reg-first-label').removeClass('register-label-right-first')
		$('#reg-first-label').addClass('register-label-left-first')
	})

	$('#register-input-first').focusin(() => {
		$('#reg-first-label').removeClass('register-label-right-first')
		$('#reg-first-label').addClass('register-label-left-first')
	})

	$('#register-input-first').focusout(() => {
		if ($('#register-input-first').val() === '') {
			$('#reg-first-label').removeClass('register-label-left-first')
			$('#reg-first-label').addClass('register-label-right-first')
		}
	})

	$('#register-input-last').on('click', () => {
		$('#reg-last-label').removeClass('register-label-right-last')
		$('#reg-last-label').addClass('register-label-left-last')
	})

	$('#register-input-last').focusin(() => {
		$('#reg-last-label').removeClass('register-label-right-last')
		$('#reg-last-label').addClass('register-label-left-last')
	})

	$('#register-input-last').focusout(() => {
		if ($('#register-input-last').val() === '') {
			$('#reg-last-label').removeClass('register-label-left-last')
			$('#reg-last-label').addClass('register-label-right-last')
		}
	})

	$('#register-input-username').on('click', () => {
		$('#reg-username-label').removeClass('register-label-right-username')
		$('#reg-username-label').addClass('register-label-left-username')
	})

	$('#register-input-username').focusin(() => {
		$('#reg-username-label').removeClass('register-label-right-username')
		$('#reg-username-label').addClass('register-label-left-username')
	})

	$('#register-input-username').focusout(() => {
		if ($('#register-input-username').val() === '') {
			$('#reg-username-label').removeClass('register-label-left-username')
			$('#reg-username-label').addClass('register-label-right-username')
		}
	})

	$('#register-input-password').on('click', () => {
		$('#reg-password-label').removeClass('register-label-right-password')
		$('#reg-password-label').addClass('register-label-left-password')
	})

	$('#register-input-password').focusin(() => {
		$('#reg-password-label').removeClass('register-label-right-password')
		$('#reg-password-label').addClass('register-label-left-password')
	})

	$('#register-input-password').focusout(() => {
		if ($('#register-input-password').val() === '') {
			$('#reg-password-label').removeClass('register-label-left-password')
			$('#reg-password-label').addClass('register-label-right-password')
		}
	})
})
