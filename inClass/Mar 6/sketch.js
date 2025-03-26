let btn;
let bg = 0;
let inpt;
let txt = ""

function setup() {
  createCanvas(400, 400);
  inpt = createInput("type here");
  inpt.input(updateText0);
  inpt.position(140,150)
  btn = createButton("click me!")
  btn.mouseClicked(toggleBackground)
  btn.position(140,180)
  btn.style("font-family", "Comic Sans MS");
  btn.style("font-size", "24px")
}

function draw() {
  background(bg);
  fill(255)
  text(txt,100,100)
}

function updateText0(){
  txt = this.value()
}

function updateText(val){
  txt = val;
}

function toggleBackground(){
  if(bg == 0){
    bg = "#ff0000"
  }else{
    bg = 0
  }
}