var TheGame = TheGame || {};

TheGame.Board = function(state, grid) {
	Phaser.Group.call(this, state.game);

	this.state = state;
	this.game = state.game;
	this.grid = grid;
	this.rows = grid.length;
	this.cols = grid[0].length;

	this.terrains = [
		{asset: 'grass'},
		{asset: 'water', blocked: true},
		{asset: 'mountains2'},
		{asset: 'trees'}
	];

	//make grid
	var row, col, tile, x, y;
	for(row = 0; row < this.rows; row++) {
		for(col = 0; col < this.cols; col++) {
			x = this.state.MARGIN_X + col * this.state.TILE_W;
			y = this.state.MARGIN_Y + row * this.state.TILE_H;

			tile = new Phaser.Sprite(this.game, x, y, this.terrains[this.grid[row][col]].asset);

			tile.row = row;
			tile.col = col;
			tile.terrainAsset = this.terrains[this.grid[row][col]].asset;
			tile.blocked = this.terrains[this.grid[row][col]].blocked;

			//tile.water
			//tile.mountain
			//tile.base

			tile.inputEnabled = true;
			tile.input.pixelPerfectClick = true;

			//highlight tiles
			// tile.events.onInputDown.add(function(tile) {
			// 	var adj = this.moveableSpaces(tile, true);

			// 	adj.forEach(function(t){
			// 		t.alpha = 0.3;
			// 	}, this);
			// }, this);


			this.add(tile);

		}
	}
}

TheGame.Board.prototype = Object.create(Phaser.Group.prototype);
TheGame.Board.prototype.constructor = TheGame.Board;

TheGame.Board.prototype.getFromRowCol = function(row, col) {
	var foundTile;

	this.forEach(function(tile){
		if(tile.row === row && tile.col === col) {
			foundTile = tile;
		}
	}, this);

	return foundTile;
};

TheGame.Board.prototype.getXYFromRowCol = function(row, col){
	var position = {};

	position.x = this.state.MARGIN_X + col * this.state.TILE_W + this.state.TILE_W/2;
	position.y = this.state.MARGIN_Y + row * this.state.TILE_H + this.state.TILE_H/2;

	return position;
}; 

TheGame.Board.prototype.moveableSpaces = function(tile, rejectBlocked) {
	var adjacentTiles = [];
	var row = tile.row;
	var col = tile.col;

	var relativePositions = [
		{r: -1, c: 0},
		{r: -2, c: 0},
		{r: 1, c: 0},
		{r: 2, c: 0},
		{r: 0, c: -1},
		{r: 0, c: 1},
		{r: 0, c: -2},
		{r: 0, c: 2},
		{r: 1, c: 1},
		{r: -1, c: -1},
		{r: -1, c: 1},
		{r: 1, c: -1}
	];

	var adjTile;

	relativePositions.forEach(function(pos){
		if((row + pos.r >=0) && (row +pos.r < this.rows) && (col + pos.c >= 0) && (col + pos.c < this.cols)) {

			adjTile = this.getFromRowCol (row + pos.r, col + pos.c);

			

			if(!rejectBlocked || !adjTile.blocked) {
				adjacentTiles.push(adjTile);
			}
		}
	}, this);

	return adjacentTiles;

};