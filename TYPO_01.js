let grotesk;
let _alphabet1 = [];
let _alphabet2 = [];
let _alphabet3 = [];
let _alphabet4 = [];
let speed = 4;
let num = 0;
let fontSize = 500;
const offsetX = 20;
const offsetY = 36;

function preload() {
  grotesk = loadFont('Grotesk_Bold.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(grotesk);
  background(0);

  // 生成 "R"
  let alphabetArray1 = grotesk.textToPoints('R', 0 - offsetX, height - offsetY, fontSize, { sampleFactor: 0.05 * 5 });
  for (let i = 0; i < alphabetArray1.length; i++) {
    _alphabet1[i] = new Alphabet(alphabetArray1[i].x, alphabetArray1[i].y);
  }

  // 生成 "O"
  let alphabetArray2 = grotesk.textToPoints('O', 0 - offsetX, height - offsetY, fontSize, { sampleFactor: 0.07143 * 5 });
  for (let i = 0; i < alphabetArray2.length; i++) {
    _alphabet2[i] = new Alphabet(alphabetArray2[i].x, alphabetArray2[i].y);
  }

  // 生成 "U"
  let alphabetArray3 = grotesk.textToPoints('U', 0 - offsetX, height - offsetY, fontSize, { sampleFactor: 0.0868 * 5 });
  for (let i = 0; i < alphabetArray3.length; i++) {
    _alphabet3[i] = new Alphabet(alphabetArray3[i].x, alphabetArray3[i].y);
  }

  // 重新回到 "R"
  let alphabetArray4 = grotesk.textToPoints('R', 0 - offsetX, height - offsetY, fontSize, { sampleFactor: 0.05 * 5 });
  for (let i = 0; i < alphabetArray4.length; i++) {
    _alphabet4[i] = new Alphabet(alphabetArray4[i].x, alphabetArray4[i].y);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < _alphabet1.length; i++) {
    _alphabet1[i].show();
  }

  switch (num) {
    case 1:
      morph(_alphabet1, _alphabet2); // R -> O
      break;
    case 2:
      morph(_alphabet1, _alphabet3); // O -> U
      break;
    case 3:
      morph(_alphabet1, _alphabet4); // U -> R
      break;
  }
}

function morph(startArray, targetArray) {
  for (let i = 0; i < targetArray.length; i++) {
    if (_alphabet1[i]) {
      if (_alphabet1[i].x < targetArray[i].x) _alphabet1[i].x += speed;
      if (_alphabet1[i].x > targetArray[i].x) _alphabet1[i].x -= speed;
      if (_alphabet1[i].y < targetArray[i].y) _alphabet1[i].y += speed;
      if (_alphabet1[i].y > targetArray[i].y) _alphabet1[i].y -= speed;
    }
  }
}

class Alphabet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255);
    noStroke();
    rect(this.x, this.y, 10, 10);
  }
}

function mousePressed() {
  num++;
  if (num > 3) {
    num = 1;
  }
  print(num);
}