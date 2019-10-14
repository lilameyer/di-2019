
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
  background('black')

}


function draw() {

  var now = clock()
  var week = round(now.progress.year * 52)
  var row = round(week/4)
  // print('row: ' + row)
  var inc = 100
  // print (week)

  stroke('white')
  strokeWeight(10)
  // background('black')


  // noStroke()
  // fill(row*100)


    // for (var i=1; i<=13; i++) {
        // angleMode(DEGREES)
        // rotate(week * 6)

        if (now.season == 1) {
          push()
          translate(200, 75)
          // scale(1/row)
          // rotate(week*100)
          poly1(10, 10, 40, 20, 40, 30)
          pop()
        } else if (now.season == 2) {
          push()
          translate(500, 75)
          // rotate(week*100)
          // scale(1/row)
          poly2(13, 22, 20, 32, 38, 30)
          pop()
        } else if (now.season == 3) {
          push()
          print('row: ' + row)
          // rotate(week*100)
          translate (200, 200)
          // scale(1/row)
          poly3(12, 18, 37, 24, 49)
          pop()
        } else if (now.season == 4) {
          push()
          // rotate(week*100)
          translate(500, 200)
          // scale(1/row)
          poly4(54, 19, 50, 13, 28, 31)
          pop()
        }
    // }





  if (now.day>=31 && now.month>=12) {
    background('black')
    // reset()
  }


}







function poly1(a, b, c, d, e, f) {
  beginShape()
  a = vertex(a, a*3);
  b = vertex(b, b*5);
  c = vertex(c, c*2);
  d = vertex(d*2.5, d);
  e = vertex(e*1.75, e);
  f = vertex(f, f*1.2);
  endShape(CLOSE)
}


function poly2(a, b, c, d, e, f) {
  beginShape()
  a = vertex(a, a*1.5);
  b = vertex(b, b*2);
  c = vertex(c*2, c);
  d = vertex(d*1.8, d);
  e = vertex(e*1.9, e);
  f = vertex(f, f*1.4);
  endShape(CLOSE)
}


function poly3 (a, b, c, d, e) {
  beginShape()
  a = vertex(a*6, a);
  b = vertex(b*2, b);
  c = vertex(c, c*1.3);
  d = vertex(d*1.2, d);
  e = vertex(e*1.2, e);
  endShape(CLOSE)
}


function poly4(a, b, c, d, e, f) {
  beginShape()
  a = vertex(a, a);
  b = vertex(b, b*1.75);
  c = vertex(c, c*1.2);
  d = vertex(d, d*3);
  e = vertex(e, e*2);
  f = vertex(f, f*1.75);
  endShape(CLOSE)
}




// function polygon(x, y, radius, npoints) {
//   let angle = TWO_PI / npoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius;
//     let sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }
