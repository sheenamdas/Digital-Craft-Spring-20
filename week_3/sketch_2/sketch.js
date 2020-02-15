function setup() {
  createCanvas(800,800);

 
  
}


function draw() {
background(200);
  
 
//web- background
 for(x=0; x<=width ;x+=30){
for(y=0; y <= height; y +=30){

  


strokeWeight(3)
  stroke(200)
// line(x+5,y, mouseX, mouseY);
  
// stroke(230)
//   strokeWeight(3)
line(x , y, mouseX, mouseY);

  fill(400);
  noStroke();
rect(x, y, 20, 20);
  //shadow of lines
  strokeWeight(3)
  stroke(200)
 
line(y, x, mouseX, mouseY);
}
}
 
 


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
  line(mouseX-140,mouseY-350, 110,150)
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
  line(mouseX-230, mouseY-170, mouseX, mouseY);
  
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
  line(mouseX-250, mouseY-80, mouseX, mouseY);
    //top right
//line
  line(mouseX +190, mouseY -330, 550, 110)
 
   noFill();
    //shadow
  strokeWeight(5);
  stroke(100)
    line(mouseX +180, mouseY -330, 540, 110);
  //line
  noFill();
  strokeWeight(20);
  stroke(0)
   line(mouseX +190, mouseY -330, mouseX,mouseY);
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
  line(mouseX+200, mouseY-300, mouseX, mouseY);
  
  
  //2nd right
  line(mouseX+300,mouseY-150, 700,300);
   //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX + 290, mouseY -150, 690, 300)
  //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX+300,mouseY-150, mouseX, mouseY);

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