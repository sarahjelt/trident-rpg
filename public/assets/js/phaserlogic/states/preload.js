var TheGame = TheGame || {};

TheGame.PreloadState = {
	preload: function() {
		//images and data will go here



		this.load.text('map', 'assets/data/map.json');
		this.load.text('enemyUnits', 'assets/data/enemyUnits.json');
		this.load.text('playerUnits', 'assets/data/playerUnits.json');

		//terrains
		this.load.image('grass', 'assets/images/grass.png');
		this.load.image('water', 'assets/images/water.png');
		this.load.image('desert', 'assets/images/desert.png');
		this.load.image('stone', 'assets/images/stone.png');
		this.load.image('mountain', 'assets/images/mountain.png');
		this.load.image('mountains2', 'assets/images/mountains2.png');
		this.load.image('tree1', 'assets/images/tree1.png');
		this.load.image('deadtree', 'assets/images/deadtree.png');
		this.load.image('pinetree', 'assets/images/pinetree.png');
		this.load.image('rock', 'assets/images/rock.png');
		this.load.image('stonebase', 'assets/images/stonebase.png');
		this.load.image('tanbase', 'assets/images/tanbase.png');
		//units
		this.load.image('orc', 'assets/images/orc.png');
		this.load.image('orc2', 'assets/images/orc2.png');
		this.load.image('orc3', 'assets/images/orc3.png');
		this.load.image('orc4', 'assets/images/orc4.png');
		this.load.image('soldier', 'assets/images/soldier.png');
		this.load.image('knight', 'assets/images/knight.png');
		this.load.image('mage', 'assets/images/mage.png');
		this.load.image('assassin', 'assets/images/assasin.png');
		this.load.image('wizard', 'assets/images/wizard.png');
		this.load.image('dwarf', 'assets/images/dwarf.png');
		this.load.image('bluedragon', 'assets/images/bluedragon.png');
		this.load.image('reddragon', 'assets/images/reddragon.png');
		this.load.image('doubletroll', 'assets/images/doubletroll.png');
	},

	create: function() {
		this.state.start('game');
	}
};