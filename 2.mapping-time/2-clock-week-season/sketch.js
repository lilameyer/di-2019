
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
  // background('black')
  frameRate(1)
}


function draw() {

  var now = clock()
  var week = round(now.progress.year * 52)
  var row = round(week/4) /2

  strokeCap(SQUARE);
  angleMode(DEGREES)


  stroke('white')
  strokeWeight(1)
  background('black')


  for (i=1; i<7; i++) {
    push()
    var dist = 5
    let r1 = random(0, 10)
    let r2 = random(10, 20)
    translate (100, 50)
    rotate(45)
    line(i*dist, r1, i*dist, r1+r2)
    pop()
  }


  for (i=1; i<10; i++) {
    push()
    var dist = 2
    let r1 = random(0, 10)
    let r2 = random(35, 45)
    translate (200, 50)
    rotate(87)
    line(i*dist, r1, i*dist, r1+r2)
    pop()
  }

  for (i=1; i<10; i++) {
    push()
    var dist = 2
    let r1 = random(0, 10)
    let r2 = random(10, 40)
    translate (250, 50)
    rotate(115)
    line(i*dist, r1, i*dist, r1+r2)
    pop()
  }


  for (i=1; i<10; i++) {
    push()
    var dist = 3
    let r1 = random(0, 10)
    let r2 = random(30, 40)
    translate (300, 50)
    rotate(230)
    line(i*dist, r1, i*dist, r1+r2)
    pop()
  }



  if (now.day>=31 && now.month>=12) {
    background('black')
    // reset()
  }


}



//
//
//
//
// function poly1(a, b, c, d, e, f) {
//   beginShape()
//   a = vertex(a, a*3);
//   b = vertex(b, b*5);
//   c = vertex(c, c*2);
//   d = vertex(d*2.5, d);
//   e = vertex(e*1.75, e);
//   f = vertex(f, f*1.2);
//   endShape(CLOSE)
// }
//
//
// function poly2(a, b, c, d, e, f) {
//   beginShape()
//   a = vertex(a, a*1.5);
//   b = vertex(b, b*2);
//   c = vertex(c*2, c);
//   d = vertex(d*1.8, d);
//   e = vertex(e*1.9, e);
//   f = vertex(f, f*1.4);
//   endShape(CLOSE)
// }
//
//
// function poly3 (a, b, c, d, e) {
//   beginShape()
//   a = vertex(a*6, a);
//   b = vertex(b*2, b);
//   c = vertex(c, c*1.3);
//   d = vertex(d*1.2, d);
//   e = vertex(e*1.2, e);
//   endShape(CLOSE)
// }
//
//
// function poly4(a, b, c, d, e, f) {
//   beginShape()
//   a = vertex(a, a);
//   b = vertex(b, b*1.75);
//   c = vertex(c, c*1.2);
//   d = vertex(d, d*3);
//   e = vertex(e, e*2);
//   f = vertex(f, f*1.75);
//   endShape(CLOSE)
// }
//
//
