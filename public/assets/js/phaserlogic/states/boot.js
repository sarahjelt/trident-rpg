var TheGame = TheGame || {};


TheGame.BootState = {
	init: function() {
		this.game.stage.backgroundColor = '#393939';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = false;
		this.scale.pageAlignVertically = false;
	},

	preload: function() {
		//for loading screen? or somthing
		// this.load.image('background', 'assets/images/image.jpg');
	},
	create: function() {
		this.state.start('preload');
	}

};