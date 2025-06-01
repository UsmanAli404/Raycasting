let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

let sceneW;
let sceneH;
let sliderFOV;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sceneW = width / 2;
  sceneH = height;

  for (let i = 0; i < 4; i++) {
    let x1 = random(sceneW);
    let x2 = random(sceneW);
    let y1 = random(sceneH);
    let y2 = random(sceneH);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  walls.push(new Boundary(0, 0, sceneW, 0));
  walls.push(new Boundary(sceneW, 0, sceneW, sceneH));
  walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
  walls.push(new Boundary(0, sceneH, 0, 0));

  particle = new Particle();
  sliderFOV = createSlider(0, 360, 60);
  sliderFOV.input(changeFOV);
}

function changeFOV() {
  const fov = sliderFOV.value();
  particle.updateFOV(fov);
}

function draw() {
  if (keyIsDown(65)) {
    particle.rotate(-0.01);
  } else if (keyIsDown(68)) {
    particle.rotate(0.01);
  }

  if (keyIsDown(87)) {
    particle.move(1);
  } else if (keyIsDown(83)) {
    particle.move(-1);
  }

  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.show();

  const scene = particle.look(walls);
  const w = sceneW / scene.length;
  push();
  translate(sceneW, 0);
  for (let i = 0; i < scene.length; i++) {
    noStroke();
    const sq = scene[i] * scene[i];
    const wSq = sceneW * sceneW;
    const b = map(sq, 0, wSq, 255, 0);
    const h = map(scene[i], 0, sceneW, sceneH, 0);
    fill(color(b, b, 0));
    rectMode(CENTER);
    rect(i * w + w / 2, sceneH / 2, w + 1, h);
  }
  pop();

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(sceneW, 0, sceneW, sceneH);
  pop();
}
