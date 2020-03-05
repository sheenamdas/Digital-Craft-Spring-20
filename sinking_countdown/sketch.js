function setup() {
  createCanvas(400, 400);
  timer = 10
  var xPos
  var yPos
}

function draw() {
  background(500);
  
  if (frameCount %60 == 0){
    timer--
  }//timer interval for number to change
  if (0<timer < 10){//circle around number
  
    noFill()
      
      

    }
//there is defintily a shorter way of doing this

  if (timer ===10){
   noStroke() 
    fill("lightblue")
    ellipse(width/2,height/2, random(50,54))
    fill("red")
     
   ellipse(100,100, 200) 
   
  }
   if (timer ===9){
     fill("lightblue")
    ellipse(width/2,height/2, random(100,104))
     fill(500,0,0)
   ellipse(200,50,180) 
     // ellipse(width/2,height/2, 300)
  }
   if (timer ===8){
     fill("lightblue")
    ellipse(width/2,height/2, random(150,154))
     fill(400,0,0)
   ellipse(300,100, 160) 
  }
   if (timer ===7){
     fill("lightblue")
    ellipse(width/2,height/2, random(200,204))
     fill(300,0,0)
   ellipse(350,200, 140) 
  }
   if (timer ===6){
     fill("lightblue")
    ellipse(width/2,height/2, random(250,254))
     fill(200,0,0);
   ellipse(300,300, 120) 
  } if (timer ===5){
    fill("lightblue")
    ellipse(width/2,height/2, random(300,304))
    fill(100, 0,0);
   ellipse(200,350, 100) 
  }
   if (timer ===4){
     fill("lightblue")
    ellipse(width/2,height/2, random(350,354))
     fill(50,0,0);
   ellipse(120,330, 80) 
  }
   if (timer ===3){
     fill("lightblue")
    ellipse(width/2,height/2, random(400,396))
     fill(25,0,0)
   ellipse(60,260, 60) 
  }
   if (timer ===2){
     fill("lightblue")
    ellipse(width/2,height/2, 450)
     fill(10,0,0)
   ellipse(50,170, 40) 
  }
   if (timer ===1){
     fill("lightblue")
    ellipse(width/2,height/2, random(500,505))
     fill(20)
   ellipse(50,100, 20) 
  }
  if (timer ==0){
   
    fill("lightblue")
     rect(0,0,width,height)
  noLoop(); //timer stops at 0
   
  }
  
  textSize(random(100,110))
  textAlign(CENTER);
  fill(0);

  text(timer, width/2, height/2); //countdown
  
  
}
function mousePressed(){
timer++ 
  //number increases by one if the mouse is clicked
}

