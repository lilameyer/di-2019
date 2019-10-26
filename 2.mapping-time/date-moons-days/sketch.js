
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
  background('green')
}

function draw() {


  var now = clock()
  var d = now.day
  var mo = now.month
  var size = now.moon * 15

  // fill(255, 0, 0, 5)
  fill('yellow')
  noStroke()

  translate (70, 35)

  for (x=0; x<=31; x++) {
    for (y=0; y<=12; y++) {
      circle(d*20, mo*25, size, size)
    }
  }

  if (now.day>=31 && now.month>=12) {
    background('green')
  }


}
