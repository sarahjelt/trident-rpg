var TheGame = TheGame || {};


TheGame.BootState = {
	init: function() {
		this.game.stage.backgroundColor = '#fff';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},

	preload: function() {
		//for loading screen? or somthing
		// this.load.image('background', 'assets/images/image.jpg');
	},
	create: function() {
		this.state.start('Preload');
	}

};