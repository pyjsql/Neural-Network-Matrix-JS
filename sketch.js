let a = new Matrix(2,3);
a.matrix = [[1,2,3],[4,5,6]];
let b = new Matrix(3,2);
b.matrix = [[1,2],[3,4],[5,6]]
let c = a.multiply(b);
c.print();
function setup() {
  // put setup code here
  createCanvas(640,480);
  
}

function draw() {
  // put drawing code here
  background(255);


  fill(0);
  textFont("Source Sans Pro");
  textAlign(LEFT,TOP);

  textSize(120);
  text("[",20,30);
  text("]",120,30);
  textSize(160);
  text("[",170,10);
  text("]",240,10);
  textSize(120);
  text("[",300,30);
  text("]",400,30);

  textSize(36);
  text("X", 150, 70);
  text("=", 280, 70);
  let top = 50;
  let top_p = 40;
  let left = 50;
  let left_p = 30;

  for(let i = 0; i< a.rows;i++){
    for(let j = 0; j<a.cols;j++){
      text(a.matrix[i][j],left+left_p*j,top+top_p*i);
    }
  }

  top = 30;
  left = 205;

  for(let i = 0; i< b.rows;i++){
    for(let j = 0; j<b.cols;j++){
      text(b.matrix[i][j],left+left_p*j,top+top_p*i);
    }
  }
  
  top = 50;
  left = 320;
  left_p = 50;
  for(let i = 0; i< c.rows;i++){
    for(let j = 0; j<c.cols;j++){
      text(c.matrix[i][j],left+left_p*j,top+top_p*i);
    }
  }


}