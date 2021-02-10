var hr, hrAngle,h;
var mn, mnAngle, m;
var sec, secAngle, s;

function setup() {
  createCanvas(800,800);
  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);


}

function draw() {
  background(0);  

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  push()
  rotate(secAngle)
  stroke(255,0,0);
  strokeWeight(7);
  translate(400,400);
  line(0,0,10,0);
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  push()
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  drawSprites();
}