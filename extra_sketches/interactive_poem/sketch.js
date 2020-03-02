function setup() {
  value = 0
  counter =0
  createCanvas(1000, 1000);
}

function draw() {
  background(value);
  for (x =0; x< width; x +=5){
    fill(random (x,0));
  rect(x, 0, 1, 1000)  
  }
  

  textSize(random(50,52))
  
  noStroke();
 
  fill (500);
  typ();
  
  if (value ==500){
   type(); 
  }
 
    
  
}
function typ(){
    textFont("roboto")
  textAlign (CENTER)
 
  // textSize(mouseX/2);
  text("The Cloths of Heaven", 500, 150)
   
  // textSize(mouseY/2);

    text("Had I the heaven's embroidered cloths,", 500, 200);
  text("Enwrought with golden and silver light,", 500, 250);
   text("The blue and the dim and the dark cloths", 500, 300);
   text("Of night and light and the half-light;",500, 350);
   text("I would spread the cloths under your feet:",500, 400);
   text("But I, being poor, have only my dreams;",500, 450);
   text("I have spread my dreams under your feet;",500, 500);
     text("Tread softly because you tread on my dreams.;",500, 550);
  textAlign(LEFT)
  text ("W. B. Yeats", 500, 600);
    
}


function mouseClicked(){
 if (value === 0){
  value = 500 

 }
  else {
    (value = 0)
    
    
  }
  
}


function type(){
  
  fill(0);
     textFont("roboto")
  textAlign (CENTER)
  
  // textSize(mouseX/2);
  text("The Cloth        ", 500, 150)
   
  // textSize(mouseY/2);

    text("Had I                                                     ,", 500, 200);
  text("           golden             light,", 500, 250);
   text(" blue         dim and     dark       ", 500, 300);
   text("Of night         and the half-light;",500, 350);
   text("I would spread                 your       ",500, 400);
   text("          poor                dreams;",500, 450);
   text("                            under your feet;",500, 500);
     text("Tread softly because you tread on     dreams.;",500, 550);
  textAlign(LEFT)
  text ("", 500, 600);

}