var TheGame = TheGame || {};

TheGame.game = new Phaser.Game(640, 360, Phaser.AUTO);

TheGame.game.state.add('Boot', TheGame.BootState);
TheGame.game.state.add('Preload', TheGame.PreloadState);
TheGame.game.state.add('Game', TheGame.GameState);

TheGame.game.state.start('Boot');