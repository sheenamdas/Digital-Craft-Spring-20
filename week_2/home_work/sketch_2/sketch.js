x = 0.05
y = 0.05
function setup() {
  createCanvas(820, 720);
  background(60);
}

function draw() {
  //blue stroke
  stroke(40,400,400);
  strokeWeight(4);
  line(x, y, 0, 0);
  x = x +200
  y = y * 3
  
  //pink stroke
   stroke(900, 80, 700)
   line(x , y , 100, 720);
  
  //black stroke
  stroke(10)
  line(820, 0, x/y, y/x);
  x = x + 70
  y = y +30
  stroke(250, 60, 75);

  
 // red stroke 
  line (820, 300, x/80, y/80);
  x = x-30
  y = y-30
 
 //green line
  stroke(10, 120, 100)
  line(x, y *2, -60, 100)
  
  //purpleline
  stroke(120,10,190);
  line(x*y,y*y,0,180 )
  x=x*2
  
  //line
  stroke(800,50);
  line(-x,-y,0,720);
  
   //line
  stroke(800,50);
  line(-x,-y,300,720);
   //line
  stroke(800,50);
  line(-x,-y,0,0);
   //line
  stroke(800,50);
  line(-x,-y,820,700);
  
}