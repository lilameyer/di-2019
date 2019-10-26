
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  var x = width/2

  background('white')
  noStroke()

  
  fill('rgba(255,0,0, 0.5)')
  circle(x, height/2, now.sec*5)

  fill('rgba(255,255,0, 0.5)')
  circle(x, height/2, now.min*5)

  fill('rgba(0,0,255, 0.5)')
  circle(x, height/2, now.hour*5)

  // fill(0)
  // rect(0, height, width, height*(now.progress.hour) * -1)

  // print('height: ' + height - (height*(now.progress.hour/12)))


}
