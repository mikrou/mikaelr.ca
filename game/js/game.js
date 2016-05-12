var SideScroller = SideScroller || {};
 
SideScroller.Game = function(){};
 
SideScroller.Game.prototype = {
 
  preload: function() {
 
      this.game.time.advancedTiming = true;
 
    },
 
  create: function() {
    //loading items for the level
    this.game.world.setBounds(0,0, 360, 2520);
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');
    this.map.addTilesetImage('cannon', 'cannon');
    this.map.addTilesetImage('cannonball', 'cannonball');
    this.map.addTilesetImage('stand', 'stand');
    //load sounds
    this.cannonSound = this.game.add.audio('boom');
    this.weakSound = this.game.add.audio('weak');
    //render the layers
    this.backgroundLayer = this.map.createLayer('background');
    this.blockedLayer = this.map.createLayer('blocked layer');
    this.power = 90;
    this.angleFactor = 1;
    this.map.setCollisionBetween(0, 100000, true, 'blocked layer');
    this.blockedLayer.resizeWorld();
    //create player and cannons
    this.player = this.game.add.sprite(164, 2425, 'cannonball');
    this.cannon = this.game.add.sprite(177, 2430, 'cannon');
    this.cannon.anchor.setTo(0.5, 0.7);
    this.stand = this.game.add.sprite(150, 2410, 'stand');
    this.createCannons();
    this.createStands();
    
    this.createClouds();
    //initialize score to 0
    this.score = 0;
    
    //enable keyboard controls and touch controls
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.physics.arcade.enable(this.player);
    //let the cannon bounce off the walls
    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.set(1);
    
    this.showLabels();
 }, 
 
  update: function() {
     this.game.camera.follow(this.player);
     this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this);
     this.game.physics.arcade.overlap(this.player, this.cannons, this.loadNextCannon, null, this);
     this.game.physics.arcade.overlap(this.player, this.clouds, this.hitCloud, null, this);
     if(this.game.input.pointer1.isDown) {
         this.startLaunch();
     } else {
         this.pressingDown = false;
     }
     if(this.cursors.up.isDown || this.pressingDown){
         this.startLaunch();
     }
     if(this.game.input.mousePointer.holdSent){
         this.startLaunch();
     }
     if(!this.cursors.up.isDown && !this.pressingDown){
         this.cannon.angle += (1*this.angleFactor);
         if(this.cannon.angle >= 50 || this.cannon.angle <= -50){
             this.angleFactor = this.angleFactor * -1;
         }
     }
  },
 
  render: function() {
 
//      this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
//      this.game.debug.spriteInfo(this.cannon, 32, 32);
 
  },
  
  findObjectsByType: function(type, map, layerName) {
      
      var result = new Array();
      map.objects[layerName].forEach(function(element){
          if(element.type === type) {
          //Phaser uses top left, Tiled bottom left so we have to adjust
          //also keep in mind that some images could be of different size as the tile size
          //so they might not be placed in the exact position as in Tiled
              element.y -= map.tileHeight;
              if(type == 'stand'){
                  element.y += 18;
              }
              result.push(element);
          }
      });
   
      return result;
   
  },
  createFromTiledObject: function(element, group){
      var sprite = group.create(element.x, element.y, element.type);
      Object.keys(element.properties).forEach(function(key){
          sprite[key] = element.properties[key];
      }, this);
  },
  createCannons: function() {
      this.cannons = this.game.add.group();
      this.cannons.enableBody = true;
      var result = this.findObjectsByType('cannon', this.map, 'cannon');
      result.forEach(function(element){
          this.createFromTiledObject(element, this.cannons);
      }, this);
  },
  createStands: function() {
      this.stands = this.game.add.group();
      this.stands.enableBody = true;
      this.stands.physicsBodyType = Phaser.Physics.ARCADE;
      
      var result = this.findObjectsByType('stand', this.map, 'stand');
      result.forEach(function(element){
          this.createFromTiledObject(element, this.stands);
      }, this);
  },
  createClouds: function() {
      this.clouds = this.game.add.group();
      
      this.clouds.enableBody = true;
      this.clouds.physicsBodyType = Phaser.Physics.ARCADE;
      
      var numClouds = this.game.rnd.integerInRange(8, 10);
      var cloud;
      for(var i = 0; i < numClouds; i++){
          var yRange = this.game.rnd.integerInRange(0, 2100);
          cloud = this.clouds.create(this.game.world.randomX, yRange, 'cloud');
          cloud.scale.setTo(this.game.rnd.integerInRange(3, 5)/3);
          
          cloud.body.velocity.x = this.game.rnd.integerInRange(-10, 10);
          cloud.body.immovable = true;
          cloud.body.collideWorldBounds = true;
          cloud.body.bounce.set(1);
      }
  },
  playerHit: function(player, blockedLayer){
      var text = "You hit\nthe turf!\nGame over";
      var style = {font: "30px Arial", fill: "#fff", align: "center", width: '200px' };
      var t = this.game.add.text((this.game.width/4)+12, this.game.height/3, text, style);
      t.fixedToCamera = true;
      this.player.body.gravity.y = 0;
      this.player.body.gravity.x = 0;
      this.player.body.velocity.y = 0;
      this.player.body.velocity.x = 0;
      this.game.time.events.add(1800, this.gameOver, this);
  },
  hitCloud: function(player, cloud){
      this.player.body.velocity.x = (this.player.body.velocity.x * 0.97);
      this.player.body.velocity.y = (this.player.body.velocity.y * 0.97);
  },
  loadNextCannon: function(player, cannon) {
      cannon.destroy();
      player.kill();
      this.player = this.game.add.sprite(cannon.x + 20, cannon.y+32, 'cannonball');
      this.cannon = this.game.add.sprite(cannon.x + 28, cannon.y+47, 'cannon');
      this.stand = this.game.add.sprite(cannon.x, cannon.y+30, 'stand');
      this.cannon.anchor.setTo(0.5, 0.7);
      this.game.physics.arcade.enable(this.player);
      this.player.body.collideWorldBounds = true;
      this.player.body.bounce.set(1);
      this.score += 1;
      this.scoreLabel.text = this.score;
  },
  startLaunch: function() {
      this.pressingDown = true;
      if(!this.launchProgress){
          this.launchProgress = true;
          this.game.time.events.add(100, this.incrementPower, this);
      }
  },
  showLabels: function() {
      var text = "0";
      var style = { font: '20px Arial', fill: "#fff", align: 'center'};
      this.scoreLabel = this.game.add.text(this.game.width-50, this.game.height - 50, text, style);
      this.scoreLabel.fixedToCamera = true;
  },
  gameOver: function() {
      this.game.state.start('MainMenu', true, false, this.score);
  },
  fire: function() {
      if(this.power >= 760){
          this.cannonSound.play();
      } else {
          this.weakSound.play();
      }
      this.player.body.gravity.y = 900;
      //calculate x and y velocity of cannonball via cannon's angle
      var radian = (this.cannon.angle*Math.PI)/180;
      this.player.body.velocity.y -= Math.cos(radian)* this.power;
      this.player.body.velocity.x += Math.sin(radian)* this.power;
      this.power = 90;
  },
  incrementPower: function() {
      if(this.cursors.up.isDown || this.pressingDown) {
          this.power += 100;
          console.log(this.power);
          this.game.time.events.add(100, this.incrementPower, this);
      } else {
          this.launchProgress = false;
          this.fire();
      }
  }
 
};