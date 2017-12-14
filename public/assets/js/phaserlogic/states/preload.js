var TheGame = TheGame || {};

TheGame.PreloadState = {
	preload: function() {
		//images and data will go here

		this.load.image('grass', 'assets/images/tile1.png');

		this.load.text('map', 'assets/data/map.json');
	},

	create: function() {
		this.state.start('game');
	}
};