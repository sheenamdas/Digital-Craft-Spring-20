let x=0
let y=0
function setup() {
  createCanvas(820, 720);

 
  
}

function draw() {

 fill(700);
  rect(0,0, 820, 720);
  fill(1)
    strokeWeight(0);
  fill(100,100,100);
   //main rect that is static
  rect(100,100,500,500)
   
//little squares that move
  fill(12);
 rect(mouseX,400,100,100)
  rect(mouseX,400,100,100)

  rect(300,mouseY,100,100);
  rect(300,mouseY*2,100,100);
   rect(300,mouseY/2,100,100);
  

  


}