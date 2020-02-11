
function setup() {
  createCanvas(400,400);

 
  
}


function draw() {
background(20);

 for(x=0; x<=width ;x+=30){
for(y=0; y <= height; y +=30){
noFill();
stroke(900,0,90);
rect(x, y, 20, 20);
stroke(500);
line(x , y, mouseX, mouseY);
stroke(90,0,90);
noFill();
ellipse(x, y, 60);
stroke(500);
line(x, y, mouseX, mouseY);
}
}

stroke(500);
strokeWeight(200);
line(mouseX, mouseY, mouseX, mouseY);



for(x=0; x<=width ;x+=50){
for(y=0; y <= height; y +=50){
noFill();
stroke(200);
strokeWeight(2);
rect(x, y, 50, 50);
stroke(90, 0, 300);
rectMode(CENTER);
rect(x, y, 20);

stroke(500);

stroke(300,90, 80);
ellipse(x, y, 50);

stroke(90,0,90);
ellipse(x, y, 60);
ellipse(x, y, 70);


}
}
 

  


}