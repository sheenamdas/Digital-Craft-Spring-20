function setup() {
  createCanvas(400,400);

 
  
}


function draw() {
background(200);
  
  //underside
  noStroke();
  fill(150);
   ellipse(mouseX -15, mouseY -15, mouseX-15, mouseY-15);
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
  ellipse(mouseX - 10, mouseY + 20, mouseX - 10, mouseY -10)
  
  
 
  
    //legs
  noFill();
  strokeWeight(20);
  stroke(0)
 line(mouseX-90,mouseY-90,40 ,50)
   //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-90,mouseY-80, 45,60)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-90, mouseY-90, mouseX, mouseY)
  //middle left
  line(mouseX-100,mouseY-20,10, 300);
  //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-90,mouseY-20, 20,300)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-100, mouseY-20, mouseX, mouseY);
  //3rd left
  line(mouseX-100, mouseY-50, 20, 150);
  //shadow
    strokeWeight(5);
  stroke(100)
  line(mouseX-90,mouseY-50, 25,160)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-100, mouseY-50, mouseX, mouseY);
  
  //left bottom
  line(mouseX-90,mouseY+60, 10, 380);
     //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX-85,mouseY+70, 15,390)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX-90, mouseY+60, mouseX, mouseY);
  
  //top right
  line(mouseX+90, mouseY -100,370, 20);
   //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX + 100, mouseY - 90,370, 30)
    //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX+90, mouseY-100, mouseX, mouseY);
  
  //2nd right
  line(mouseX+120,mouseY-50, 360,100);
   //shadow
  strokeWeight(5);
  stroke(100)
  line(mouseX + 120, mouseY -40, 360, 110)
  //line
   noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX +120, mouseY-50, mouseX, mouseY);

  //3rd right
  //line
  line(mouseX+150,mouseY, 360, 250);
   //shadow
  strokeWeight(5);
  stroke(100)
   line(mouseX+145,mouseY +10, 350, 260)
   //line
  noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX+150, mouseY, mouseX, mouseY);
  
  //bottom right
//line
  line(380, 380, mouseX + 160,mouseY +80);
   noFill();
    //shadow
  strokeWeight(5);
  stroke(100)
    line(370, 390, mouseX + 150,mouseY +90);
  //line
  noFill();
  strokeWeight(20);
  stroke(0)
  line(mouseX +160, mouseY +80, mouseX, mouseY);
  
  
  //Moving Circle-Center Body

  noStroke();
  fill(0);
ellipse(mouseX, mouseY, mouseX, mouseY);
  
  
    //head
  noStroke();
  fill(0)
  ellipse(mouseX +50, mouseY+100,mouseX -100, mouseY-100);
  //head shadow
  fill(100)
  ellipse(mouseX +40, mouseY +90, mouseX-100, mouseY-100);
  
 
  //eyes, white
  fill(300);
  ellipse(mouseX+70,mouseY+100, mouseX/10, mouseY/10);
  ellipse(mouseX+30, mouseY+100, mouseX/10, mouseY/10);
   //pupila
  noStroke();
  fill(0);
  ellipse(mouseX +71, mouseY +100, mouseX/20, mouseY/20);
  ellipse(mouseX +31, mouseY +100, mouseX/20, mouseY/20);
  //grey outline
  stroke(50)
  noFill();
  strokeWeight(5);
  ellipse(mouseX+70, mouseY+100, mouseX/10, mouseY/10);
  ellipse(mouseX+30, mouseY+100, mouseX/10, mouseY/10);
 
  

  


}