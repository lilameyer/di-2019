
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

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')
  noStroke()


  fill('rgba(255,0,0, 0.5)')
  circle(x, height/2, now.sec*5)

  fill('rgba(255,255,0, 0.5)')
  circle(x, height/2, now.min*5)

  fill('rgba(0,0,255, 0.5)')
  circle(x, height/2, now.hour*5)
 //
 //  for (let i=0; i>59; i+50) {
 //
 // }

  // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  // fill(100, 50, 50)
  //
  // // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)




}
