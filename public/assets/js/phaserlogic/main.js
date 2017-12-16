var TheGame = TheGame || {};

TheGame.game = new Phaser.Game(440, 400, Phaser.AUTO, "game-window");


TheGame.game.state.add('boot', TheGame.BootState);
TheGame.game.state.add('preload', TheGame.PreloadState);
TheGame.game.state.add('game', TheGame.GameState);
TheGame.game.state.add('win', TheGame.WinState);
TheGame.game.state.add('loss', TheGame.LossState);

TheGame.game.state.start('boot');
