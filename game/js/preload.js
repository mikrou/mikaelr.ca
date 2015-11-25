var SideScroller = SideScroller || {};
 
//loading the game assets
 
SideScroller.Preload = function(){};
 
SideScroller.Preload.prototype = {
 
  preload: function() {
 
    //show loading screen
 
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
 
    this.preloadBar.anchor.setTo(0.5);
 
    this.preloadBar.scale.setTo(3);
 
    this.load.setPreloadSprite(this.preloadBar);
 
    //load game assets
 
    this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    
    this.load.image('sky', 'assets/images/sky.png');
    
    this.load.image('menuimage', 'assets/images/mainmenu.png');
    
    this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png');
    
    this.load.image('cannonball', 'assets/images/cannonball.png');
    
    this.load.image('stand', 'assets/images/CannonStand-t.png');
    
    this.load.image('cannon', 'assets/images/cannon.png');
    
    this.load.image('title', 'assets/images/title.png');
    
    this.load.image('cloud', 'assets/images/cloud.png');
    
    this.load.audio('boom', 'assets/audio/shot.mp3');
    
    this.load.audio('weak', 'assets/audio/weakShot.mp3');
 
  },
 
  create: function() {
 
    this.state.start('MainMenu');
 
  }
 
};