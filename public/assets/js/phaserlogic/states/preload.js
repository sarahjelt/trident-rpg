var TheGame = TheGame || {};

TheGame.PreloadState = {
	preload: function() {
		//images and data will go here

		this.load.image('grass', 'assets/images/grass.png');

		this.load.text('map', 'assets/data/map.json');
	},

	create: function() {
		this.state.start('game');
	}
};