function setup() {
  createCanvas(400, 400);
  
  xPos = 0
  yPos = 300
}

function draw() {
  background(2);
  
  if (yPos >= 400){
    yPos = 0;
  }
  
  for (a = xPos; a <= height ; a += 20){
    stroke (5);
    strokeWeight(1);
    fill(0, 900, 900);
    rect(a -10, 100, 20, 100);
   
    rect(a -10, 290, 20, 110);
   
  
    rect(a -10, 0, 20, 50);
    
    rect(a-10, 50, 20, 50);
   
    fill(200, 0, 100);
    rect (a - 10, 200, 20, 100);
    
    fill (0);
    noStroke();
    ellipse (a, yPos, 10, 10);
    yPos = yPos + 0.1
    
    
  }
  
  if (yPos < 300){
   
    yPos = yPos - 1
    ellipse (a, yPos, 10, 10);
   
    
  }
  if (yPos < 200){
    yPos = yPos +20
    ellipse (a, yPos, 10, 10);
    
  }
  if (yPos < 100){
   yPos = yPos + .01
    ellipse (a , yPos, 10, 10);
    
  }

}