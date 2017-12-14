var TheGame = TheGame || {};

TheGame.PreloadState = {
	preload: function() {
		//images and data will go here

		this.load.image('grass', 'assets/images/grass.png');

		this.load.text('map', 'assets/data/map.json');
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
		this.load.image('firemage', 'assets/images/firemage.png');
		this.load.image('soldier', 'assets/images/soldier.png');
		this.load.image('knight', 'assets/images/knight.png');
		this.load.image('mage', 'assets/images/mage.png');
		this.load.image('assasin', 'assets/images/assasin.png');
		this.load.image('wizard', 'assets/images/wizard.png');
		this.load.image('dwarf', 'assets/images/dwarf.png');
		this.load.image('bluedragon', 'assets/images/bluedragon.png');
		this.load.image('reddragon', 'assets/images/reddragon.png');
		this.load.image('spider', 'assets/images/spider.png');
	},

	create: function() {
		this.state.start('game');
	}
};