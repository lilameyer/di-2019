
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
  background('white')

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var ssn = now.season
  // print ('season: ' + now.season)


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

  line (now.progress.year * width, 0, now.progress.year  * width, height)



   // colorMode(RGB);
   // background(255);
   // noStroke()
   //
   // let spring = color(now.progress.season, 0, 0)
   // let summer = color(now.progress.season*255, now.progress.season*255, 0)
   // let fall = color (0, now.progress.season*255, 0)
   // let winter = color (0, 0, now.progress.season*255)
   //
   // let inter1 = lerpColor(spring, summer, 0.5)
   // let inter2 = lerpColor(summer, fall, 0.5)
   // let inter3 = lerpColor(fall, winter, 0.5)
   // let inter4 = lerpColor(winter, spring, 0.5)
   //
   // var x = width/8
   //
   // fill(spring)
   // rect(0, 0, x, height)
   // fill(inter1)
   // rect(x, 0, x, height)
   // fill(summer)
   // rect(x*2, 0, x, height)
   // fill(inter2)
   // rect(x*3, 0, x, height)
   // fill(fall)
   // rect(x*4, 0, x, height)
   // fill (inter3)
   // rect(x*5, 0, x, height)
   // fill (winter)
   // rect(x*6, 0, x, height)
   // fill (inter4)
   // rect (x*7, 0, x, height)

   // for (var i = 0; i < width; i+=now.second) {
   //   rect (i*20, 10, 10, 10)
   // }

   // var x = now.progress.sec * 10
   //
   // for (var i = 0; i < width; i+=30) {
   //   fill(0)
   //   rect(x + i, 30, 10, 10)
   // }
   //

   // for (var i = 0; i < height - 20; i+=20) {
   //   rect (i, j, 10, 10)
   //   for (var j = 0; j < width + 20; j+=20) {
   //     rect (i, j, 10, 10)
   //   }
   // }

}
