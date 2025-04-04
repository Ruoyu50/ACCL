new p5(function(p) {
p.modeA = false; 
p.modeB = false;
p.x = 50;
p.y = 50;

p.setup = function() {
  let canvas = p.createCanvas(400, 400);
  canvas.parent('three');
  p.background(127.5);
};

p.draw = function() {
  if (p.modeA) {
    p.GroupA();
  } else if (p.modeB) {
    p.GroupB();
  }
};


p.GroupA = function() {
  if (p.mouseX < p.width / 2 && p.mouseY < p.height / 2) {
    p.background(255, 0, 0); 
  } else if (p.mouseX > p.width / 2 && p.mouseY < p.height / 2) {
    p.background(0, 255, 0); 
  } else if (p.mouseX < p.width / 2 && p.mouseY > p.height / 2) {
    p.background(0, 0, 255); 
  } else {
    p.background(0); 
  }
};


p.GroupB = function() {
  if (p.mouseX < p.width / 2 && p.mouseY < p.height / 2) {
    p.background(255, 255, 0); 
  } else if (p.mouseX > p.width / 2 && p.mouseY < p.height / 2) {
    p.background(255, 0, 255); 
  } else if (p.mouseX < p.width / 2 && p.mouseY > p.height / 2) {
    p.background(0, 255, 255); 
  } else {
    p.background(255); 
  }
};

  p.keyPressed = function() {
  if (p.key === 'a') {
    p.modeA = true;  
    p.modeB = false; 
  } else if (p.key === 'b') {
    p.modeB = true;  
    p.modeA = false;  
  }
};

  p.mousePressed  = function() {
  p.modeA = false;
  p.modeB = false;
  p.background(127.5);
}
});