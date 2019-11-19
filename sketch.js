let redSlider;
let greenSlider;
let blueSlider;
let strokeSlider;
let menue;
let doodle;
let RBV, rV, gV, bV, rRBV, gRBV, bRBV;
let RBArrayVal;


function setup() {
  createCanvas(600, 400);
  background(255);
  
  redSlider = createSlider(0, 255, 100);
  redSlider.position(7, 20);
  greenSlider = createSlider(0, 255, 100);
  greenSlider.position(7, 55);
  blueSlider = createSlider(0, 255, 100);
  blueSlider.position(7, 90);
  strokeSlider = createSlider(1, 20, 1);
  strokeSlider.position(7, 230);
  
  doodle = 0;
  
  rRBV = 255;
  gRBV = 255;
  bRBV = 255;
  rV = [255, 255, 255, 61, 0, 1, 228];
  gV = [26, 106, 205, 255, 230, 17, 0];
  bV = [3, 5, 1, 0, 255, 255, 255];
//change RBV value to 1 to use gradient pen (change later)
  RBV = 0;
  RBArrayVal = 0;
}

function draw() {
  //scale(width/600, height/400);
  const r = redSlider.value();
  const g = greenSlider.value();
  const b = blueSlider.value();
  const str = strokeSlider.value();

  if(mouseIsPressed) {
    if(mouseX > 20 && mouseX <130 && mouseY > 360 && mouseY < 390) {
      fill(180);
      noStroke();
      rect(150, 0, 300, 200);
      fill(160);
      rect(425, 5, 20, 20);
      fill(0);
      text('X', 430, 20);
      doodle = 1;
    }
    if (doodle < 1 && RBV < 1) {
      strokeWeight(str);
      stroke(r, g, b);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (mouseX > 425 && mouseX < 445 && mouseY > 5 && mouseY < 25) {
      if (doodle > 0) {
        noStroke();
        fill(255);
        rect(150, 0, 300, 200);
        doodle = 0;
      }
    }
    if (RBV > 0) {
      if(rRBV < rV[RBArrayVal]) {
        rRBV++;
      }
      if(rRBV > rV[RBArrayVal]) {
        rRBV--;
      }
      if(gRBV < gV[RBArrayVal]) {
        gRBV++;
      }
      if(gRBV > gV[RBArrayVal]) {
        gRBV--;
      }
      if(bRBV < bV[RBArrayVal]) {
        bRBV++;
      }
      if(bRBV > bV[RBArrayVal]) {
        bRBV--;
      }
      if(rRBV == rV[RBArrayVal] && gRBV == gV[RBArrayVal] && bRBV == bV[RBArrayVal]) {
        RBArrayVal++
        if(RBArrayVal == 7) {
          RBArrayVal = 0;
      }
      }
      stroke(rRBV, gRBV, bRBV);
      strokeWeight(srt);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  
  print(mouseX, mouseY);
  fill(200);
  noStroke();
  rect(0, 0, 150, 400);
  fill(150);
  rect(20, 360, 110, 30);
  
  fill(0);
  textSize(15);
  text('Red', 20, 50);
  text('Green', 20, 85);
  text('Blue', 20, 120);
  text('Stroke', 20, 260);
  text("Press 'c' to clear.", 20, 200);
  text('More +', 50, 380);
  
  fill(r, g, b);
  rect(20, 135, 110, 40);
  stroke(0);
  strokeWeight(str);
  line(20, 217, 130, 217);
  
  if(keyIsPressed) {
   if (doodle < 1) {
    if(key == "c") {
      push();
        fill(255);
        noStroke();
        rect(150, 0, 600, 400);
      pop();
    }
   }
  }

}