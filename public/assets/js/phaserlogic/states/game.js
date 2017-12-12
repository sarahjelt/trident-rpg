var TheGame = TheGame || {};

TheGame.GameState = {
	init: function() {
		this.TILE_W = 60;
		this.TILE_H = 68;
		this.MARGIN_X = 10;
		this.MARGIN_Y = 2;
	},
	create: function() {
		this.board = new TheGame.Board(this, this.map.grid);
	}

};