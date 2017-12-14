var TheGame = TheGame || {};

TheGame.game = new Phaser.Game(640, 360, Phaser.AUTO);


TheGame.game.state.add('boot', TheGame.BootState);
TheGame.game.state.add('preload', TheGame.PreloadState);
TheGame.game.state.add('game', TheGame.GameState);

TheGame.game.state.start('boot');
