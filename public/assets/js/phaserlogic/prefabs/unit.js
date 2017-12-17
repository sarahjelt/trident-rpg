var TheGame = TheGame || {};

TheGame.Unit = function(state, data) {
  var position = state.board.getXYFromRowCol(data.row, data.col);

  Phaser.Sprite.call(this, state.game, position.x, position.y, data.asset);

  this.game = state.game;
  this.state = state;
  this.board = state.board;
  this.row = data.row;
  this.col = data.col;
  this.data = data;





  this.anchor.setTo(0.5);

  // this.inputEnabled = true;
  // this.input.pixelPerfectClick = true;
  // this.events.onInputDown.add(this.showMovementOptions, this);

};

TheGame.Unit.prototype = Object.create(Phaser.Sprite.prototype);
TheGame.Unit.prototype.constructor = TheGame.Unit;



TheGame.Unit.prototype.showMovementOptions =  function() {

	this.state.clearSelection(); 

	if(this.state.uiBlocked) {
		return;
	}

	console.log(TheGame.GameState.playerUnits.children[0].row)

	// for (var i = 0; i < units.length; i++) {
 //          if (units[i].key === this.key) {
 //              units[i].row = this.row
 //              units[i].col = this.col
 //          }
 // 	};

	var curTile = this.board.getFromRowCol(this.row, this.col);

	var adjCells = this.board.moveableSpaces(curTile, true, );

	adjCells.forEach(function(tile){
		tile.alpha = 0.7;

		tile.events.onInputDown.add(this.moveUnit, this);
	}, this);
};

TheGame.Unit.prototype.moveUnit = function(tile){
	this.state.clearSelection();

	this.state.uiBlocked = true;

	var pos = this.board.getXYFromRowCol(tile.row, tile.col);

	var unitMovement = this.game.add.tween(this);
	unitMovement.to(pos, 200);
	unitMovement.onComplete.add(function(){
		this.state.uiBlocked = false;
		this.row = tile.row;
		this.col = tile.col;

		this.checkBattle();

		this.state.checkWinCon();

		this.state.prepareNextUnit();

	}, this);
	unitMovement.start();
};

TheGame.Unit.prototype.attack = function(attacked){
	var attacker = this;

	var damageAttacked = Math.max(0, attacker.data.attack * Math.random() - attacked.data.defense * Math.random());
	var damageAttacker = Math.max(0, attacked.data.attack * Math.random() - attacker.data.defense * Math.random());

	attacked.data.health -= damageAttacked;
	attacker.data.health -= damageAttacker;

	if(attacked.data.health <= 0) {
		attacked.kill();
	}

	if(attacker.data.health <= 0) {
		attacker.kill();
	}

};

TheGame.Unit.prototype.checkBattle = function() {
	var rivalUnits = this.isPlayer ? this.state.enemyUnits : this.state.playerUnits;
	var fightUnit;
	rivalUnits.forEachAlive(function(unit){
		if(this.row === unit.row && this.col === unit.col) {
			fightUnit = unit;
		}
	}, this);

	if(fightUnit) {
		while(this.data.health >= 0 && fightUnit.data.health >=0) {
			this.attack(fightUnit);
		}
	}
};

TheGame.Unit.prototype.playTurn = function() {
	if(this.isPlayer) {
		this.showMovementOptions();
	}
	else {
		this.aiEnemyMovement();
	}
};

TheGame.Unit.prototype.aiEnemyMovement = function() {
	this.state.clearSelection();

	var curTile = this.board.getFromRowCol(this.row, this.col);

	var adjCells = this.board.moveableSpaces(curTile, true);

	var targetTile;

	adjCells.forEach(function(tile){
		this.state.playerUnits.forEachAlive(function(unit){
			if(tile.row === unit.row && tile.col === unit.col) {
				targetTile = tile;
			}
		}, this)
	}, this)	

	if(!targetTile) {
		var randomIndex = Math.floor(Math.random() * adjCells.length);
		targetTile = adjCells[randomIndex];
	}

	this.moveUnit(targetTile);
}