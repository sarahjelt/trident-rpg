var TheGame = TheGame || {};

TheGame.Board = function(state, grid) {
	Phaser.Group.call(this, state.game);

	this.state = state;
	this.game = state.game;
	this.grid = grid;
	this.rows = grid.length;
	this.cols = grid[0].length;

	//make grid
	var row, col, tile, x, y;
	for(row = 0; row < this.rows; row++) {
		for(col = 0; col < this.cols; col++) {
			x = this.state.MARGIN_X + col * this.state.TILE_W;
			y = this.state.MARGIN_Y + row * this.state.TILE_H;

			tile = new Phaser.Sprite(this.game, x, y, 'grass');

			this.add(tile);

		}
	}
}

TheGame.Board.prototype = Object.create(Phaser.Group.prototype);
TheGame.Board.prototype.constructor = TheGame.Board;
