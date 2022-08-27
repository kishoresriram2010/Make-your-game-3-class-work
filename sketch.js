var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount=0;
var gameState = 0;

var p1, p2, players= [];
var allPlayers = []

function preload() {
  backgroundImage = loadImage("./assets/bg1.jpeg");
  bgImg = loadImage("./assets/bg2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
