let x = 45;
let s = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 50);
  fill(28, 187, 199);
  ellipse(x, 40, s, s);
  fill(123, 27, 191);
  ellipse(x, 80, s, s);
  fill(234, 7, 250);
  ellipse(x, 120, s, s);
  fill(31, 115, 63);
  ellipse(x, 160, s, s);
  fill(212, 175, 55);
  ellipse(x, 200, s, s);
  fill(0, 98, 255);
  ellipse(x, 240, s, s);
  fill(255, 255, 255);
  ellipse(x, 280, s, s);
  fill(255, 5, 13);
  ellipse(x, 320, s, s);
  fill("black");
  ellipse(x, 360, s, s);
  fill("orange");
  ellipse(x, 400, s, s);
  textStyle(BOLD);
  textSize(10);
  textAlign(RIGHT);
  fill(220);
  text("Refresh the page to clear", (width / 100) * 11, (height / 100) * 93);
}
function draw() {
  if (mouseIsPressed && dist(mouseX, mouseY, x, 40) < s) {
    fill(28, 187, 199);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 80) < s) {
    fill(123, 27, 191);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 120) < s) {
    fill(234, 7, 250);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 160) < s) {
    fill(31, 115, 63);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 200) < s) {
    fill(212, 175, 55);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 240) < s) {
    fill(0, 98, 255);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 280) < s) {
    fill("white");
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 320) < s) {
    fill(255, 5, 13);
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 360) < s) {
    fill("black");
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, 400) < s) {
    fill("orange");
  }

  if (mouseIsPressed && mouseX > 80) {
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
