var hour_xs = [], hour_ys = [], colors = [];
var minute_xs = [], minute_ys = [];
var second_xs = [], second_ys = [];

function setup(){
  createCanvas(750,750);
  frameRate(1); //1 FPS, since nothing needs to change between seconds
  noStroke();

  // Set the random positions for this session (so balls merely show/hide,
  // they don't actually move in this clock.)
  for (var i = 0; i < 24; i++){
    append(hour_xs, 45 + i*25);
    append(hour_ys, 45 + i*25);
    append(colors, random(255))
  }

  for (var i = 0; i < 60; i++){
    append(minute_xs, 20 + i*10);
    append(minute_ys, 20 + i*10);
  }

  for (var i = 0; i < 60; i++){
    append(second_xs, 20 + i*10);
    append(second_ys, 20 + i*10);
  }

}

function draw(){
  background(255);
  fill(0);

  for (var i = 0; i < second(); i++){
  	strokeWeight(1);
  	drawBall(second_xs[i], second_ys[i], 12, 5);
  }

for (var i = 0; i < minute(); i++){

    strokeWeight(4);
    line(minute_xs[i], minute_ys[i], minute_xs[i], 610);
    stroke(10);
  }

  for (var i = 0; i < hour(); i++){
  	strokeWeight(1);
    fill(2*hour_xs[i], hour_ys[i], colors[i] ); // grayscale with 150/255 transparency
  	ellipse(80+hour_xs[i], hour_ys[i], 60, 60);
  }

}

function drawBall(x, y, dia, k) {
  fill(k, 200); // grayscale with 150/255 transparency
  ellipse(x, y, dia, dia);
}