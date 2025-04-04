let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let points = { bn: null, bs: null, bne: null, bnw: null, bse: null, bsw: null };
let targets = { bn: null, bs: null, bne: null, bnw: null, bse: null, bsw: null };

let isSwitched = false; // 切换状态

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);

    if (windowWidth > windowHeight) {
    video.size(windowHeight/3*4, windowHeight);
  } else {
    video.size(windowWidth, windowWidth/4*3);
  }
  
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  let button = select('#toggleButton');
  button.mousePressed(oc);
}

function draw() {
  clear()
      if (windowWidth > windowHeight) {
    image(video, 0, 0, windowHeight/3*4, windowHeight);
  } else {
    image(video, 0, 0, windowWidth, windowWidth/4*3);
  }


  if (faces.length > 0) {
    let face = faces[0];

    // **更新目标点**
    updateTargetPositions(face);

    // **平滑过渡点的位置**
    updateKeypointPositions();

    // **绘制关键点**
    drawKeypoints();

    // **绘制面具**
    drawFaceMesh(face);
  }
}

// **更新目标点（修正后的 keypoint 对应关系）**
function updateTargetPositions(face) {
  if (isSwitched) {
    targets.bn = face.keypoints[10] || null;
    targets.bs = face.keypoints[152] || null;
    targets.bne = face.keypoints[284] || null;
    targets.bnw = face.keypoints[54] || null;
    targets.bse = face.keypoints[365] || null;
    targets.bsw = face.keypoints[136] || null;
  } else {
    targets.bn = face.keypoints[1] || null;
    targets.bs = face.keypoints[94] || null;
    targets.bne = face.keypoints[354] || null;
    targets.bnw = face.keypoints[125] || null;
    targets.bse = face.keypoints[370] || null;
    targets.bsw = face.keypoints[141] || null;
  }

  if (!points.bn) points.bn = targets.bn;
  if (!points.bs) points.bs = targets.bs;
  if (!points.bne) points.bne = targets.bne;
  if (!points.bnw) points.bnw = targets.bnw;
  if (!points.bse) points.bse = targets.bse;
  if (!points.bsw) points.bsw = targets.bsw;
}

// **平滑过渡六个点的位置**
function updateKeypointPositions() {
  if (targets.bn && points.bn) points.bn = moveToTarget(points.bn, targets.bn);
  if (targets.bs && points.bs) points.bs = moveToTarget(points.bs, targets.bs);
  if (targets.bne && points.bne) points.bne = moveToTarget(points.bne, targets.bne);
  if (targets.bnw && points.bnw) points.bnw = moveToTarget(points.bnw, targets.bnw);
  if (targets.bse && points.bse) points.bse = moveToTarget(points.bse, targets.bse);
  if (targets.bsw && points.bsw) points.bsw = moveToTarget(points.bsw, targets.bsw);
}

// **使用 lerp 让点平滑移动**
function moveToTarget(currentPoint, targetPoint) {
  return {
    x: lerp(currentPoint.x, targetPoint.x, 0.1),
    y: lerp(currentPoint.y, targetPoint.y, 0.1)
  };
}

// **绘制六个关键点**
function drawKeypoints() {
  fill(255, 127.5, 0);
  noStroke();
  noFill()
  if (points.bn) circle(points.bn.x, points.bn.y, 5);
  if (points.bs) circle(points.bs.x, points.bs.y, 5);
  if (points.bne) circle(points.bne.x, points.bne.y, 5);
  if (points.bnw) circle(points.bnw.x, points.bnw.y, 5);
  if (points.bse) circle(points.bse.x, points.bse.y, 5);
  if (points.bsw) circle(points.bsw.x, points.bsw.y, 5);
}

// **绘制面具**
function drawFaceMesh(face) {
  let zm = face.keypoints[105];
  let ym = face.keypoints[334];
  let zqg = face.keypoints[116];
  let yqg = face.keypoints[345];
  let yxb = face.keypoints[377];
  let zxb = face.keypoints[148];
  let zhj = face.keypoints[58];
  let yhj = face.keypoints[288];
  let zng = face.keypoints[162];
  let yng = face.keypoints[389];
  let ze = face.keypoints[67];
  let ye = face.keypoints[297];

  let triangles = [
    [0, [zm, points.bn, ym]],
    [1, [zm, points.bnw, zqg]],
    [1, [ym, points.bne, yqg]],
    [0, [zqg, points.bsw, zxb]],
    [0, [yqg, points.bse, yxb]],
    [1, [zxb, points.bs, yxb]],
    [1, [zxb, zqg, zhj]],
    [1, [yxb, yqg, yhj]],
    [0, [zhj, zqg, zng]],
    [0, [yhj, yqg, yng]],
    [0, [zng, zm, ze]],
    [0, [yng, ym, ye]],
    [2, [zng, zm, zqg]],
    [2, [yng, ym, yqg]],
    [2, [zm, ym, ye, ze]]
  ];

  const colors = [
    [200, 200, 255], // 浅蓝
    [90, 100, 255],  // 深蓝
    [255, 255, 255]  // 白色
  ];

  noStroke();
  for (let t of triangles) {
    fill(...colors[t[0]]);
    beginShape();
    for (let p of t[1]) {
      vertex(p.x, p.y);
    }
    endShape(CLOSE);
  }
}

// **处理人脸检测结果**
function gotFaces(results) {
  faces = results;
}

// **鼠标点击切换状态**
function oc() {
  isSwitched = !isSwitched;
}