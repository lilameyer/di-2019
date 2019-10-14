
function setup() {
  createCanvas(1000, 600)
  background('white')


      for (var h=2; h<34; h++) {
         stroke(220, 220, 220)
         noFill()
         strokeWeight(0.5)
         circle(width/2, height/2, h*15, h*15)
      }


}



function draw() {

  var now = clock()
  var ssn = now.season

  print ('season: ' + now.season)

  var top = -PI/2
  var inc = PI/6
  var alpha = 4


     for (var x=1; x<13; x++) {
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

        var i = now.day
        var mo = now.month
        arc(width/2, height/2, i*15, i*15, top + (inc*(mo-1)), top + (inc*mo)); // arc (x, y, width, height, start, stop)

     }

   if (now.day == 31 && now.month == 12) {
     background('white')

       for (var h=2; h<34; h++) {
          stroke(150, 150, 150)
          noFill()
          strokeWeight(0.5)
          circle(width/2, height/2, h*15, h*15)
       }

   }

}
