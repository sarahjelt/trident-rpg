var TheGame = TheGame || {};

TheGame.Board = function(state, grid) {
	Phaser.Group.call(this, state.game);

	this.state = state;
	this.game = state.game;
	this.grid = grid;
	this.rows = grid.length;
	this.cols = grid[0].length;
	this.unit = state.unit;

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
			tile.inputEnabled = true;
			tile.input.pixelPerfectClick = true;


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

TheGame.Board.prototype.moveableSpaces = function(tile, rejectBlocked, playerTurn) {
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
  	var occupiedPositions = []


    relativePositions.forEach(function(pos){
        if((row + pos.r >=0) && (row +pos.r < this.rows) && (col + pos.c >= 0) && (col + pos.c < this.cols)) {

            adjTile = this.getFromRowCol (row + pos.r, col + pos.c);

            //player options display
            if(playerTurn) {
	            for (var i = 0; i < TheGame.GameState.playerUnits.children.length; i++) {
			        if(TheGame.GameState.playerUnits.children[i].alive){
			        
				        var unitObj = {
				            row: TheGame.GameState.playerUnits.children[i].row,
				            col: TheGame.GameState.playerUnits.children[i].col
				        }
			        
				        var occupiedTile = this.getFromRowCol(unitObj.row, unitObj.col);

				        occupiedPositions.push(occupiedTile);

						if(adjTile === occupiedPositions[0] || adjTile === occupiedPositions[1] || adjTile === occupiedPositions[2] || adjTile.key === 'water'){
	                        adjTile.blocked = true;
	                    } else {
	                        adjTile.blocked = false;
	                    }
			        }
			   	}
            }

            //enemy ai movement

            else {
            	for (var i = 0; i < TheGame.GameState.enemyUnits.children.length; i++) {
			        if(TheGame.GameState.enemyUnits.children[i].alive){
			        
				        var unitObj = {
				            row: TheGame.GameState.enemyUnits.children[i].row,
				            col: TheGame.GameState.enemyUnits.children[i].col
				        }
			        
				        var occupiedTile = this.getFromRowCol(unitObj.row, unitObj.col);

				        occupiedPositions.push(occupiedTile);


						if(adjTile === occupiedPositions[0] || adjTile === occupiedPositions[1] || adjTile === occupiedPositions[2] || adjTile === occupiedPositions[3] || adjTile === occupiedPositions[4] || adjTile.key === 'water'){
	                        adjTile.blocked = true;
	                    } else {
	                        adjTile.blocked = false;
	                    }
			        }
			   	}

            }



            if(!rejectBlocked || !adjTile.blocked) {
                adjacentTiles.push(adjTile);
            }
        }
    }, this);
	return adjacentTiles;

};