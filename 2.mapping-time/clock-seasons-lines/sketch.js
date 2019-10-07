
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
  background('white')

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var ssn = now.season
  print ('season: ' + now.season)


  strokeWeight(4)

  if (now.season == 1) {
     stroke(now.progress.season*255, 0, 0)
  } else if (now.season == 2) {
    stroke(now.progress.season*255, now.progress.season*255, 0)
} else if (now.season == 3) {
      stroke(0, now.progress.season*255, 0)
   } else {
      stroke(0, 0, now.progress.season*255)
  }


 //  if (now.month<13 && now.day<32) {
 //     line (now.progress.year*width, 0, now.progress.year*width, height)
 // }



  line (now.progress.year * width, 0, now.progress.year  * width, height)

 //  for (i=0; i<365; i++) {
 //    line(width/365 + i, 0, width/365 + i, height)
 // }



}
