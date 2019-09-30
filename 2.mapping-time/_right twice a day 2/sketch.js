
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

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

 //  if (hourA > 12) {
 //     background('black')
 // }


  noStroke()

  // hourColor.setAlpha(abs(1 - hour()))
  // minuteColor.setAlpha(abs(1 - minute()))
  // secondColor.setAlpha(abs(1 - second()))

  var hourA = hour() * (255/24)

  if (hourA > 12) {
     hourA = hourA - 12
 }

 textSize(24) // make it big

  var minA = minute() * (255/60)
  var secA = second() * (255/60)

  fill(0, hourA)
  circle(width/2, 225, 150)
  fill(0)
  if (hourA > 255/2) {
     fill (255)
 }
  text(hour() - 12, width/2 - 2, 235)

  fill(0, minA)
  circle(width/2 - 100, 375, 150)
  fill(0)
  if (minA > 255/2) {
     fill (255)
 }
  text(minute(), width/2 - 115, 385)

  fill(0, secA)
  circle(width/2 + 100, 375, 150)
  fill(0)
  if (secA > 255/2) {
     fill (255)
 }
  text(second(), width/2 + 90, 385)

  print ('hour: ', hourA)
  print ('min: ', minA)
  print ('sec: ', secA)



  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textLeading(20)
  textSize(30) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)
  // text('hour: ' + hourColor, 30, 150)
  // text('min: ' + minuteColor, 30, 200)
  // text('sec: ' + secondColor, 30, 250)

}
