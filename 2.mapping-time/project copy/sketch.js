
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}



function PointAt (cx, cy, angle, dist) {

   var theta = angle/360 * TWO_PI
   return {x:cx+cos(theta) * dist,
           y:cy+sin(theta) * dist}


}



function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  

  // set up typography & drawing-color
  textFont("Bio Sans") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(0)

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  text(now.text.time, 400, 100)

}
