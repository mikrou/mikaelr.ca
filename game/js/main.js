var SideScroller = SideScroller || {};
SideScroller.game = new Phaser.Game(360, 640, Phaser.AUTO, '');
 
SideScroller.game.state.add('Boot', SideScroller.Boot);
 
SideScroller.game.state.add('Preload', SideScroller.Preload);

SideScroller.game.state.add('MainMenu', SideScroller.MainMenu);
 
SideScroller.game.state.add('Game', SideScroller.Game);

SideScroller.game.state.start('Boot');