function setup() {
  createCanvas(windowWidth,windowHeight,SVG);

 
  
}


function draw() {
background(500) 
 mouseX=400
  mouseY=400

     //body shadow
  fill(100)
  noStroke();
  ellipse(mouseX - 20, mouseY + 30, mouseX - 10, mouseY -10)
  
   //legs
  //top left
  noFill();
  strokeWeight(20);
  stroke(0)
 line(mouseX-150,mouseY-350,100 ,150)
   //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-130,mouseY-350, 120,150)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-150, mouseY-350, mouseX, mouseY)
  
  
  //middle left
  line(mouseX-200,mouseY-280,100, 300);
  //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-190,mouseY-280, 110,300)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-200, mouseY-280, mouseX, mouseY);
  
  
  //3rd left
  line(mouseX-230, mouseY-170, 50, 380);
  //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-220,mouseY-170, 60,380)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-230, mouseY-170, mouseX, mouseY+20);
  
  //left bottom
  line(mouseX-250,mouseY-80, 90, 600);
     //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX-240,mouseY-80, 100,600)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-250, mouseY-80, mouseX, mouseY+60);
    //top right
//line
  line(540, 80, 540, 210)
 
   noFill();
    //shadow
  strokeWeight(5);
  stroke(100)
    line(530, 80, 530, 210);
  //line
  noFill();
  strokeWeight(20);
  stroke(0)
   line(540, 80, mouseX,mouseY-180);
  //top right
  line(mouseX+200, mouseY -300,650, 250);
   //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX + 190, mouseY - 300,640, 250)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX+200, mouseY-300, mouseX, mouseY-100);
  
  
  //2nd right
  line(mouseX+300,mouseY-50, 780,150);
   //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX + 290, mouseY -50, 770, 150)
  //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(780,150, mouseX, mouseY);

  //3rd right
  //line
  line(mouseX+380,mouseY-100, 720, 460);
   //shadow
  strokeWeight(5);
  stroke(100)
   line(mouseX+370,mouseY -100, 710, 460)
   //line
  noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX+380, mouseY-100, mouseX, mouseY);
  

  
  //Moving Circle-Center Body

  noStroke();
  fill(0);
ellipse(mouseX, mouseY, mouseX, mouseY);
  
  
    //head shadow
 fill(60)
  ellipse(mouseX +110, mouseY+140,mouseX -40, mouseY-50);
  fill(0)
  ellipse(mouseX +130, mouseY+140,mouseX -40, mouseY-50);
  //head 
  // noStroke()
  fill(100)
  ellipse(mouseX +140, mouseY +190, mouseX-200, mouseY-100);
  ellipse(mouseX+300, mouseY+180, mouseX-300, mouseY -80)
 
  //eyes, white
  fill(300);
  ellipse(mouseX+300,mouseY+200, mouseX/5, mouseY/5);
  ellipse(mouseX+100, mouseY+200, mouseX/5, mouseY/5);
   //pupila
  noStroke();
  fill(0);
  ellipse(mouseX +280, mouseY +201, mouseX/10, mouseY/10);
  ellipse(mouseX +80, mouseY +201, mouseX/10, mouseY/10);
  //grey outline
  stroke(50)
  noFill();
  strokeWeight(5);
  ellipse(mouseX+300, mouseY+200, mouseX/5, mouseY/5);
  ellipse(mouseX+100, mouseY+200, mouseX/5, mouseY/5);
 
  

  


}

function mousePressed(){
save();
}