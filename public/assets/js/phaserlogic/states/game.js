var TheGame = TheGame || {};

TheGame.GameState = {

	init: function() {
		this.TILE_W = 32;
		this.TILE_H = 32;
		this.MARGIN_X = 20;
		this.MARGIN_Y = 20;
	},
	create: function() {
		this.map = JSON.parse(this.game.cache.getText('map'));
		this.board = new TheGame.Board(this, this.map.grid);
		this.places = this.add.group();

		this.playerUnits = this.add.group();
		this.enemyUnits = this.add.group();

		this.initUnits();
		this.initPlaces();
		this.newTurn();
		this.initGui();
	},
	initUnits: function() {
		this.playerUnitsData = JSON.parse(this.game.cache.getText('playerUnits'));

		var unit;
		this.playerUnitsData.forEach(function(unitData){
			unit = new TheGame.Unit(this, unitData);


			unit.isPlayer = true;

			this.playerUnits.add(unit);
		}, this);

		this.enemyUnitsData = JSON.parse(this.game.cache.getText('enemyUnits'));

		this.enemyUnitsData.forEach(function(unitData){
			unit = new TheGame.Unit(this, unitData);
			this.enemyUnits.add(unit);
		}, this);

	},
	clearSelection: function() {
		this.board.setAll('alpha', 1);

		this.board.forEach(function(tile){
			tile.events.onInputDown.removeAll();
		}, this);
	},
	newTurn: function(){
		this.playerUnitTurn = [];
		this.enemyUnitTurn = [];

		this.playerUnits.forEachAlive(function(unit){
			this.playerUnitTurn.push(unit);
		}, this);

		this.enemyUnits.forEachAlive(function(unit){
			this.enemyUnitTurn.push(unit);
		}, this);

		this.shuffle(this.playerUnitTurn);
		this.shuffle(this.enemyUnitTurn);

		this.currPlayerUnitIndex = 0;
		this.currEnemyUnitIndex = 0;
		this.prepareNextUnit();
	},
	 //shuffle array method from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript)
	shuffle: function(array) {
		var counter = array.length, temp, index;

		// While there are elements in the array
		while (counter > 0) {
		    // Pick a random index
		    index = Math.floor(Math.random() * counter);

		    // Decrease counter by 1
		    counter--;

		    // And swap the last element with it
		    temp = array[counter];
		    array[counter] = array[index];
		    array[index] = temp;
		}

		return array;
    },
    prepareNextUnit: function(){
    	if(this.currPlayerUnitIndex < this.playerUnitTurn.length) {
    		var unit = this.playerUnitTurn[this.currPlayerUnitIndex];

    		this.currPlayerUnitIndex++;

    		if(unit.alive){
    			unit.playTurn();
    		}
    		else{
    			this.prepareNextUnit();
    		}
    	}

    	else {
    		this.prepareEnemyUnit();
    	}
    },
    prepareEnemyUnit: function() {
    	if(this.currEnemyUnitIndex < this.enemyUnitTurn.length) {
    		var unit = this.enemyUnitTurn[this.currEnemyUnitIndex];

    		this.currEnemyUnitIndex++;

    		if(unit.alive){
    			unit.playTurn();
    		}
    		else{
    			this.prepareEnemyUnit();
    		}
    	}
    	else {
    		this.newTurn();
    	}
    },

    initPlaces: function(){
    	var pos = this.board.getXYFromRowCol(this.map.playerBase.row, this.map.playerBase.col);
    	this.playerBase = new Phaser.Sprite(this.game, pos.x, pos.y, this.map.playerBase.asset);
    	this.playerBase.anchor.setTo(0.5);
    	this.playerBase.row = this.map.playerBase.row;
    	this.playerBase.col = this.map.playerBase.col;
    	this.places.add(this.playerBase);


    	var pos = this.board.getXYFromRowCol(this.map.enemyBase.row, this.map.enemyBase.col);
    	this.enemyBase = new Phaser.Sprite(this.game, pos.x, pos.y, this.map.enemyBase.asset);
    	this.enemyBase.anchor.setTo(0.5);
    	this.enemyBase.row = this.map.enemyBase.row;
    	this.enemyBase.col = this.map.enemyBase.col;
    	this.places.add(this.enemyBase);
    },
    checkWinCon: function() {
    	var playerTurnUnit = this.playerUnitTurn[this.currPlayerUnitIndex - 1];
    	var enemyTurnUnit = this.enemyUnitTurn[this.currEnemyUnitIndex - 1];

    	if(playerTurnUnit.isPlayer) {
    		if(playerTurnUnit.row === this.enemyBase.row && playerTurnUnit.col === this.enemyBase.col) {
    			
    			console.log('you win')
    		// 	var gameWidth = 650;
    		// 	var gameHeight = 255;
    		// 	this.overlay = this.add.bitmapData(gameWidth, gameHeight);
    		// 	this.overlay.ctx.fillStyle = '#333';
    		// 	console.log(this.overlay)
    		// 	this.overlay.ctx.fillRect(0, 0, gameWidth, gameHeight);

    		// 	this.panel = this.add.sprite(0, gameHeight, this.overlay);

    		// 	var gameOverPanel = this.add.tween(this.panel);
    		// 	gameOverPanel.to({y: 0}, 500);

    		// 	gameOverPanel.onComplete.add(function(){
    		// 		var style = {font: '30px Arial', fill: '#fff'};
    		// 		this.add.text(gameWidth/2, gameHeight/2, 'Game Over', style).anchor.setTo(0.5)
    		// 	})

    		// 	gameOverPanel.start();
    		}
    	}
    	else {
    		if(enemyTurnUnit.row === this.playerBase.row && enemyTurnUnit.col === this.playerBase.col) {
    			//player loses
    			console.log('you lose! :(')
    			//TheGame.state.start(lossscrean)
    		}
    	}
    },
    initGui: function() {
    	var y = this.TILE_H * 2;
        var x = this.TILE_W * 10;
        var bitmapRect = this.add.bitmapData(this.x, this.y);
        bitmapRect.ctx.fillStyle = '#000058';
        bitmapRect.ctx.fillRect(0, 0, x, y);
        this.panel = this.add.sprite(50, 229, bitmapRect);
        var style = {
            font: '10px Prstart',
            fill: '#fff',
            align: 'left'
        };
        this.healthIcon = this.add.sprite(175, 235, 'heart');
        this.healthLabel = this.add.text(185, 250, '', style);
        //attack
        this.attackIcon = this.add.sprite(175, 250, 'attack');
        this.attackLabel = this.add.text(this.game.width - 70, y -10 + 2 * this.TILE_SIZE/2 + 5, '', style);
        //defense
        this.defenseIcon = this.add.sprite(175, 270, 'defense');
        this.defenseLabel = this.add.text(this.game.width - 70, y -10 + 3 * this.TILE_SIZE/2 + 5, '', style);
        this.charImage = this.add.sprite(100, 245, 'firemage');
        this.refreshStats();
    },
    refreshStats: function(player, health, attack, defense) {
    	console.log(player, health, attack, defense)
        // console.log("this works");
        // var myUnit;
        // this.playerUnits.forEachAlive(function(unit){
        // 	this.playerUnitTurn.push(unit);
       	// 	myUnit = unit;
        // }, this);
        // console.log("this also works", myUnit);
        // this.healthLabel.text = Math.ceil(JSON.parse(this.TheGame.cache.getText('playerUnits'))); 
        // console.log("finished refresh");
    }
};