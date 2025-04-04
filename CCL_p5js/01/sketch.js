new p5(function(p) {
  p.setup = function() {
let canvas = p.createCanvas(300,300);
      canvas.parent('one');
};

p.draw = function() {
  p.background(255, 255, 225);
  
  p.blendMode(p.BLEND);

  p.push()
  //f(x)=1 / 2 - [(1 / 2)^(x+1)]
  let k = -2
  let base = 1 / 2
  let exponent = -k
  let scalenumber = base ** exponent
  let result = base - (base ** (exponent + 1))
  let resultX = p.width * result
  let resultY = p.height * result
  p.translate(resultX, resultY)  
  p.scale(scalenumber)
  //console.log(scalenumber)//
  p.push()
  p.translate(p.width/2, p.height/2)
  p.blendMode(p.OVERLAY)
  p.fill(0,0,63.25)
  p.stroke(0,0,127.5)
  p.strokeWeight(100)
  p.ellipse(0,0,1650,1375)
  p.pop()
  
  p.push()
  p.translate(p.width/2, p.height/2)
  p.fill(255, 200, 200)
  p.stroke(255, 210, 210)
  p.strokeWeight(20)
  p.rectMode(p.CENTER)
  p.rect(0, 0, 1200, 1000, 100)
  p.fill(255, 225, 225)
  p.stroke(255, 210, 210)
  p.rect(0, 0, 1050, 875, 87.5)
  p.pop()
  
  p.push()
  p.translate(p.width/2, p.height/2)
  p.rotate(p.PI / -8)
  p.fill(175)
  p.noStroke()
  p.rectMode(p.CENTER)
  p.rect(0, 0, 520, 95)
  p.pop()

  p.push()
  p.translate(p.width/2, p.height/2)
  p.rotate(p.PI / -8)
  p.fill(175)
  p.stroke(175)
  p.strokeWeight(20)
  p.ellipse(0, 50, 500, 400)
  p.pop()
    
  p.push()
  p.translate(p.width/2,p.height/2)
  p.rotate(p.PI/-8)
  p.fill(125)
  p.stroke(125)
  p.strokeWeight(20)
  p.ellipse(0, -50, 500, 400)
  p.pop()
  
  p.push()
  p.translate(p.width/2, p.height/2)
  p.rotate(p.PI / -8)
  p.fill(255, 225, 225)
  p.stroke(255, 255, 225)
  p.strokeWeight(20)
  p.arc(0, -50, 500, 400, p.PI/15, p.PI-p.PI/15)
  p.pop()
  
  p.push()
  p.translate(p.width/2, p.height/2)
  p.rotate(p.PI/-8)
  p.fill(255, 225, 225)
  p.stroke(125)
  p.strokeWeight(20)
  p.arc(0, 50, 500, 400, p.PI+p.PI/15, 2*p.PI-p.PI/15)
  p.pop()
  
  p.push()
  p.translate(p.width/2, p.height/2)
  p.rotate(p.PI / -8)
  p.noFill()
  p.stroke(150)
  p.strokeWeight(20)
  p.ellipse(0, -50, 500, 400)
  p.pop()  
  
  p.text("Ponsant's ring", p.mouseX, p.mouseY)
}
});