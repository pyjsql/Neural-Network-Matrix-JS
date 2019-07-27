
function setup() {
  // put setup code here
  createCanvas(640,480);
  
  let nn = new NeuralNetwork(24,16,4);
  let a = new Matrix(24,1);
  let input = a.toArray();
  let output = nn.feedforward(input);
  output.print();
}

function draw() {
  // put drawing code here
  background(255);
  fill(255,0,0);
  ellipse(mouseX,mouseY,60,60);
}