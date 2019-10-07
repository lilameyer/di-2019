
function setup() {
  createCanvas(1000, 600)
  background('white')
}



function draw() {

  var now = clock()
  var ssn = now.season

  print ('season: ' + now.season)

  var top = -PI/2
  var inc = PI/6
  var alpha = 5

  for (i=2; i<34; i++) {
     for (x=1; x<13; x++) {
        if (now.month == 1) {
           fill(114, 200, 241, now.progress.month * alpha)
        } else if (now.month == 2) {
           fill(131, 208, 212, now.progress.month * alpha)
        } else if (now.month == 3) {
           fill (128, 203, 171, now.progress.month * alpha)
        } else  if (now.month == 4){
           fill (138, 202, 137, now.progress.month * alpha)
        } else if (now.month == 5) {
           fill (139, 200, 102, now.progress.month * alpha)
        } else if (now.month == 6) {
           fill (251, 241, 118, now.progress.month * alpha)
        } else if (now.month == 7) {
           fill (255, 214, 112, now.progress.month * alpha)
        } else if (now.month == 8) {
           fill (252, 187, 121, now.progress.month * alpha)
        } else if (now.month == 9) {
           fill (245, 140, 113, now.progress.month * alpha)
        } else if (now.month == 10) {
           fill (241, 94, 83, now.progress.month * alpha)
        } else if (now.month == 11) {
           fill (235, 120, 175, now.progress.month * alpha)
        } else {
           fill (129, 127, 189, now.progress.month * alpha)
        }

        var mo = now.month
        stroke(255)
        arc(width/2, height/2, i*15, i*15, top + (inc*(mo-1)), top + (inc*mo)); // arc (x, y, width, height, )
     }
 }
   //
   // for (h=2; h<34; h++) {
   //    stroke(255, 255, 0)
   //    noFill()
   //    strokeWeight(1)
   //    circle(width/2, height/2, i*15, i*15)
   // }

}
