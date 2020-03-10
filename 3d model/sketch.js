let octahedron;

function preload() {
  Shark = loadModel('https:// GitHub.io model file');
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);

  model(octahedron);
}