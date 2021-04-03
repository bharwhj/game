var plyr , backgroundimg
var count = 0 , incre
var question= []
var answer= []




function preload(){
player=loadImage("charter.png")
backgroundimg=loadImage('pixel.jpg')




}



function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
 plyr=createSprite(50, displayHeight-200, 50, 50);
 plyr.addImage(player)
 plyr.scale=0.5
 form= new Form()
 form.display()

 if (count=== 1 ){


  textSize(14)
  
  fill("yellow")
   text(question[count-1],200,200 )
   
  var input1 = createInput()
  input1.position(200,100)
  if(input1.value === 15 ){
  
  count=2
  
  
  }
  
  }

}

function draw() {
  background(backgroundimg); 
  
  
  if (keyDown("UP_ARROW")){
plyr.y=plyr.y-50

  }

  
  if (keyDown("DOWN_ARROW")){
    plyr.y=plyr.y+50
    
      }
        
  if (keyDown("RIGHT_ARROW")){
    plyr.x=plyr.x+50
    
      }
        
  if (keyDown("LEFT_ARROW")){
    plyr.x=plyr.x-50
    
      }

      if(count === 1 ){
     textSize(20)
     fill("darkblue")
     text("Level 1", 40,50 )

      }
question.push("what is the square root of 225 ")
question.push("what is 2 to the power of three")
answer=[["15"]]


for( var a in question){

if (count=== 1 ){


textSize(14)

fill("yellow")
 text(question[count-1],200,200 )
 
var input1 = createInput()
input1.position(200,100)
if(input1.value === 15 ){

count=2


}

}

if (count=== 2 ){


  textSize(14)
  
  fill("yellow")
   text(question[count-1],200,200 )
   
  
  
  }





} 


  drawSprites();

}

