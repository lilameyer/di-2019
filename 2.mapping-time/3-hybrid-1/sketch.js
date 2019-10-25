
function setup() {
  // set the width & height of the sketch
  createCanvas(1440, 740)
  background('pink')
}

function draw() {


  var now = clock()
  var d = now.day
  var mo = now.month
  var size = now.moon * 40
  var x2 = width/2
  var incX = 40
  var incY = 50

  fill('yellow')
  noStroke()

  translate (70, 35)


	  
  // fill('rgba(255,0,0, 0.5)')
  // circle(x, height/2, now.sec*5)

  // fill('rgba(255,255,0, 0.5)')
  // circle(x, height/2, now.min*5)

  // fill('rgba(0,0,255, 0.5)')
  // circle(x, height/2, now.hour*5)


 for (x=0; x<=31; x++) {
    for (y=0; y<=12; y++) {
        fill('rgba(255,0,0, 0.5)')
        circle(d*incX, mo*incY, now.progress.sec*size)
        fill('rgba(255,255,0, 0.5)')
        circle(d*incX, mo*incY, now.progress.min*size)
        fill('rgba(0,0,255, 0.5)')
        circle(d*incX, mo*incY, now.progress.hour*size)

        if (now.hour>=12 && now.min > 59) {
              background('pink')
           circle(d*incX, mo*incY, size, size)
        }
  	  }
    }

  if (now.day>=31 && now.month>=12) {
    background('pink')
  }


}
