var TheGame = TheGame || {};

TheGame.Board = function(state, grid) {
	Phaser.Group.call(this, state.game);

	this.state = state;
	this.game = state.game;
	this.grid = grid;
	this.rows = grid.length;
	this.cols = grid[0].length;
}

TheGame.Board.prototype = Object.create(Phaser.Group.prototype);
TheGame.Board.prototype.constructor = TheGame.Board;
