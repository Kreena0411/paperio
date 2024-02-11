var canvas;
var backgroundImage ;
var database, gameState;
var form, player, playerCount;
var allPlayers ;
var paths = [];
var paper1, paper2, papers





function preload() {
// load all the images we need into the variables
  bluesquareImage = loadImage("./assets/bluesquare.png");
  redsquareImage = loadImage("./assets/redsquare.png");
  
}

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     player.positionY += 10;
//     player.update();
//   }
//   if (keyCode === LEFT_ARROW) {
//     player.positionX -= 5;
//     player.update();
//   }
//   if (keyCode === RIGHT_ARROW) {
//     player.positionX += 5;
//     player.update();
//   }
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();

  game.start();
  
}

function draw() {
  // add white background to the canvas
  background('#474667');
  if (playerCount ==2) {
    gameState = 1
    game.update(gameState);
  }
  if (gameState == 1) {
    game.play();
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 