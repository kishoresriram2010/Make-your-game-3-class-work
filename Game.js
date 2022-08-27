class Game {
  constructor() {}

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    p1 = createSprite(width/2 - 100, height/2, 20, 20);
    p1.shapeColor = "blue";

    p2 = createSprite(width/2 - 60, height/2, 20, 20);
    p2.shapeColor = "red";

    

    players = [p1, p2];
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  handleElements(){
    form.hide();
  }

  play(){
    Player.getPlayersInfo();
    this.handleElements();
    this.handlePlayerControls();
    
    if(allPlayers != undefined){
      image(bgImg, 0, 0, width, height );

      var index=0;

      for(var plr in allPlayers){
        index = index+1;
        var x = allPlayers[plr].positionX;
        var y = height-allPlayers[plr].positionY;

        players[index-1].position.x = x;
        players[index-1].position.y = y;
      }

      


      drawSprites();
      
    }

    
    

  }

  handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY +=5;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW)){
      player.positionY -=5;
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW)){
      player.positionX +=5;
      player.update();
    }

    if(keyIsDown(LEFT_ARROW)){
      player.positionX -=5;
      player.update();
    }
  }
}
