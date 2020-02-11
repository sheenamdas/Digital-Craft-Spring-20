function setup() {
  createCanvas(600, 600);
  xPos = 0
  yPos = 0
  
}

function draw() {
  // background(200);
   yPos = yPos + 10
for (a = 0; a<height; a +=50){
 
  
   ellipse( a, yPos, 10, 10);
    if (yPos >= 600){
    yPos = 0;
  }
}
  
  xPos = xPos + 10
  for (b =0; b<width; b += 50){
    
    ellipse (xPos, b, 10, 10)
    if (xPos >= 600){
      xPos = 0
    }
  }
  for (x = 0; x< width; x += 20){
    for ( y =0; y < height; y += 20){
      //    fill(300);
      // ellipse (x, y, 10, 10);
     noStroke();
    fill(50, 600, 500);
     // rect(x, 0, mouseX, 600); 
     //  rect(0, y, 600, mouseY);
      rect (x, y, mouseX, mouseY);
      fill(20);
//        ellipse(mouseX -x, y, 10, 10);
      
   
  
    }
      
  }
 

  
}