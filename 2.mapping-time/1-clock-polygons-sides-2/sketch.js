
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
  var rHour = now.hour * (120/12)
  var rMin = now.min * (120/60)
  var rSec = now.sec * (120/60)

  background(0,0,255)



  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  // background('white')

   fill (255, 220, 0)

   push();
   translate(width * 0.2, height * 0.5);
   rotate (now.progress.hour)
   polygon(0, 0, rHour, now.hour);
   pop();

   push();
   translate(width * 0.5, height * 0.5);
   rotate (now.progress.min)
   polygon(0, 0, rMin, now.min);
   pop();

   push();
   translate(width * 0.8, height * 0.5);
   rotate (now.progress.sec)
   polygon(0, 0, rSec, now.sec);
   pop();
 }

 function polygon(x, y, radius, npoints) {
   let angle = TWO_PI / npoints;
   beginShape();
   for (let a = 0; a < TWO_PI; a += angle) {
     let sx = x + cos(a) * radius;
     let sy = y + sin(a) * radius;
     vertex(sx, sy);
   }
   endShape(CLOSE);

}
