new p5(function(p) {
      p.currentMode = 1;

  p.setup = function() {
  let canvas = p.createCanvas(300, 300);
      canvas.parent('two');
  p.background(0);
}

p.draw = function() {
    if (p.currentMode === 1) {
    p.conditionGroupA1()
  } else if (p.currentMode === 2) {
    p.conditionGroupB2()
  }
};


    
    
    
  p.conditionGroupA1 = function(){
      
  // Face
    p.faceWidth = p.map(p.mouseX, 0, p.windowWidth, 64, 640)
    p.faceHeight = p.map(p.mouseY, 0, p.windowHeight, 64, 640)
    
  // Eyes
     p.eyeX = p.faceWidth / 5
     p.LeyeSizeM = p.random(0, p.faceWidth / 5)
     p.ReyeSizeM = p.random(0, p.faceWidth / 5)
     
     if (p.faceHeight < p.faceWidth / 5) {
       p.faceHeight = p.faceWidth / 5
     };
     if (p.faceWidth < p.faceWidth / 5) {
       p.faceWidth = p.faceWidth / 5
     };
    
    p.background(0);
     p.translate(p.width/2, p.height/2)
  
     //face
     p.fill(255);
     p.rectMode(p.CENTER);
     p.rect(0, 0, p.faceWidth, p.faceHeight, 50);
  
    //Leye
     p.fill(0);
     p.ellipse( p.eyeX, 0, p.LeyeSizeM);
     
     //Reye
     p.fill(0);
     p.ellipse( -p.eyeX, 0, p.ReyeSizeM);
    
    p.resetMatrix()
    };
  
    p.conditionGroupB2 = function(){
  // Face

    p.faceWidth = p.map(p.mouseX, 0, p.width, 64, 640)
    p.faceHeight = p.map(p.mouseY, 0, p.height, 64, 640)
    
  // Eyes
    // color

    // shape
     p.eyeX = p.faceWidth / 5
     p.LeyeSizeM = p.random(0, p.faceWidth / 5)
     p.ReyeSizeM = p.random(0, p.faceWidth / 5)
     
     if (p.faceHeight < p.faceWidth / 5) {
       p.faceHeight = p.faceWidth / 5
     };
     if (p.faceWidth < p.faceWidth / 5) {
       p.faceWidth = p.faceWidth / 5
     };
        
     p.background(0);
     p.translate(p.width/2, p.height/2)
  
     //face
     p.fill(255);
     p.ellipse(0, 0, p.faceWidth, p.faceHeight);
  
    //Leye
     p.fill(0);
     p.ellipse( p.eyeX, 0, p.LeyeSizeM);
     
     //Reye
     p.fill(0);
     p.ellipse( -p.eyeX, 0, p.ReyeSizeM);
      
     p.resetMatrix()
    };
  
p.keyPressed = function() {
  if (p.key === 'a') {
    p.currentMode = 1;
  } else if (p.key === 'b') {
    p.currentMode = 2;
  }
};
 });