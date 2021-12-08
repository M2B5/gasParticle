let ball1;

let wall1;
let wall2;

let slider;
let slider2;
let slider3;

let fpc = 0;

let red, green, blue;

let button;

function setup() {
  createCanvas(1010, 500);

  slider = createSlider(100, 800, 800);
  slider2 = createSlider(1, 10, 5);
  slider3 = createSlider(1, 10, 1);

  red = createInput();
  green = createInput();
  blue = createInput();

  button = createButton('submit rgb');
  button.mousePressed(subColour);

  ball1 = new ball;

  wall1 = new wall(2);
  wall2 = new wall(1);

  avForce = ball1.mass * ball1.xVelocity;

}

function draw() {
  background(0);

  ball1.mass = slider2.value();
  ball1.temperature = slider3.value();

  

  hitCheck();

  ball1.calculate();
  ball1.render();

  wall1.render();
  wall2.render();

  let d = slider.value();
  d += 100;
  wall2.location.x = d;

  text('mass: ' + ball1.mass, 200, 100);
  text('temperature: ' + ball1.temperature, 300, 100);
  text('velocity: ' + ball1.xVelocity, 400, 100);
  text('momentum: ' + ball1.momentum, 500, 100);

}

function hitCheck(){

  if (((ball1.location.x >= (wall1.location.x + 32)) && (ball1.location.x + ball1.xVelocity <= (wall1.location.x + 32))) || ((ball1.location.x <= (wall2.location.x - 32)) && (ball1.location.x + ball1.xVelocity >= (wall2.location.x - 32)))){

    ball1.xVelocity *= -1;  

  }else if ((ball1.location.x + 32) > (wall2.location.x)){

    ball1.location.x = wall2.location.x - (32 + abs(ball1.xVelocity));

  }

}

function subColour(){

  if ((red.value() != '') && (green.value() != '') && (blue.value() != '')){
    ball1.red = red.value();
    ball1.green = green.value();
    ball1.blue = blue.value();
    red.value('');
    green.value('');
    blue.value('');
  }

}


