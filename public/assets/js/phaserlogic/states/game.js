var TheGame = TheGame || {};

TheGame.GameState = {
	init: function() {
		this.TILE_W = 60;
		this.TILE_H = 68;
		this.MARGIN_X = 20;
		this.MARGIN_Y = 5;
	},
	create: function() {
		this.map = JSON.parse(this.game.cache.getText('map'));
		this.board = new TheGame.Board(this, this.map.grid);
	}

};