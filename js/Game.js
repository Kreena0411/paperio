class Game {
  constructor() {
    this.resetTitle = createElement('h2')
    this.resetButton = createElement('button')
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
      console.log(data.val())
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();
    console.log(playerCount)

    form = new Form();
    form.display();
    paper1 = createSprite(width / 2 - 50, height - 100)
    paper1.addImage("p1", bluesquareImage)
    paper1.scale = 0.09
    paper2 = createSprite(width / 2 + 50, height - 100)
    paper2.addImage("p2", redsquareImage)
    paper2.scale = 0.09
    papers = [paper1, paper2]

  }

  // addSprites (spriteGroup, numberofSprites, image, scale, positions = []) {
  //   for(var i = 0; i < numberofSprites; i++){
  //     var x, y
  //     if(positions.length > 0){
  //       x = positions[i].x
  //       y = positions[i].y
  //       image = positions[i].image
  //     }
  //     else{
  //       x = random(width/2 + 150, width/2 - 150 )
  //       y = random(-height * 4.5, height - 400)
  //     }
  //     var sprite = createSprite(x, y)
  //     sprite.addImage(image)
  //     sprite.scale = scale
  //     spriteGroup.add(sprite)
  //   }
  // }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    this.resetTitle.html("Reset Game")
    this.resetTitle.class("resetText")
    this.resetTitle.position(width / 2 + 200, 40)

    this.resetButton.class("resetButton")
    this.resetButton.position(width / 2 + 200, 100)





  }

  play() {
    this.handleElements();
    this.handleResetButton()

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      var currentPath = []
      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
        if (mousePressed) {
          const point = { x: mouseX, y: mouseY }
          currentPath.push(point);
        }

        paths.forEach(path => {
          beginShape()
          path.forEach(point => {
            stroke('white')
            vertex(point.x, point.y)
          })
          endShape()
        })
      }


      //   //use data form the database to display the cars in x and y direction
      //   var x = allPlayers[plr].positionX;
      //   var y = height - allPlayers[plr].positionY;

      //   // save the value of players life in a tempary varible
      //   var currentLife = allPlayers[plr].life
      //   if (currentLife <= 0) {
      //     cars[index - 1].changeImage('blast')
      //     cars[index - 1].scale = 0.3
      //   }

      //   cars[index - 1].position.x = x;
      //   cars[index - 1].position.y = y;

      //   if (index === player.index) {
      //     stroke(10);
      //     fill("red");
      //     ellipse(x, y, 60, 60);

      //     this.handleObstacleCollision(index)
      //     this.handleFuel(index)
      //     if(player.life <= 0) {
      //       this.playerMoving = false
      //       this.blast = true
      //     }

      //     // Changing camera position in y direction
      //     camera.position.x = cars[index - 1].position.x;
      //     camera.position.y = cars[index - 1].position.y;
      //   }
      // }

      // if (this.playerMoving){
      //   player.positionY += 5
      //   player.update()
      // }

      // this.handlePlayerControls();

      // const finishLine = height * 6 - 100

      // if(player.positionY > finishLine ) {
      //   gameState = 2
      //   player.rank += 1
      //   Player.updateCarsAtEnd(player.rank)
      //   player.update()
      //   this.showRank()
      // }

      drawSprites();
    }
  }



  handleResetButton() {
    console.log("Resetting")
    this.resetButton.mousePressed(() => {
      database.ref('/').set({
        playerCount: 0,
        gameState: 0,
        players: {}
      })
      window.location.reload()
    })
  }

  // handlePlayerControls() {
  //   // handling keyboard events
  //   if (keyIsDown(UP_ARROW)) {
  //     this.playerMoving = true
  //     player.positionY += 10;
  //     player.update();
  //   }
  //   if (keyIsDown(LEFT_ARROW)) {
  //     this.leftKeyActive = true
  //     player.positionX -= 5;
  //     player.update();
  //   }
  //   if (keyIsDown(RIGHT_ARROW)) {
  //     this.leftKeyActive = false
  //     player.positionX += 5;
  //     player.update();
  //   }
  // }
}
