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
		for(col = 0; col < this.cols; cols++) {
			if(row % 2 === 0) {
				x = this.state.Margin_X + col * this.state.TILE_W;
			}
		}
	}
}

TheGame.Board.prototype = Object.create(Phaser.Group.prototype);
TheGame.Board.prototype.constructor = TheGame.Board;
