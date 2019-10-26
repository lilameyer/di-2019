
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

  hourColor = color(0)
  minuteColor = color(0)
  secondColor = color(0)

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var clr = 0

  if (now.am){
     background ('white')
     clr = 0
 } else {
    background ('black')
    clr = 255
}

 // background('white')

  noStroke()

  var hourA = now.hour * (255/12)
  var minA = now.min * (255/60)
  var secA = now.sec * (255/60)


  fill(clr, hourA)
  circle(width/2, 225, 150)
  // fill(0)
 //  if (hourA > 255/2) {
 //     fill (255)
 // }
  // text(hour() - 12, width/2 - 2, 235)

  fill(clr, minA)
  circle(width/2 - 100, 375, 150)
  // fill(0)
 //  if (minA > 255/2) {
 //     fill (255)
 // }
  // text(minute(), width/2 - 115, 385)

  fill(clr, secA)
  circle(width/2 + 100, 375, 150)
  // fill(0)
 //  if (secA > 255/2) {
 //     fill (255)
 // }
  // text(second(), width/2 + 90, 385)


}
