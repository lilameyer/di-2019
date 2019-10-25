
function setup() {
  createCanvas(1000, 600)
  background('white')

  noStroke()

  push()
  translate(375, 100)
  scale(0.7)

  for (var h=2; h<34; h++) {
     stroke(220, 220, 220)
     noFill()
     strokeWeight(0.5)
     circle(width/2, height/2, h*15, h*15)
  }
  pop()




  push()
  translate(75, 200)
  scale(0.4)

  for (var h=2; h<62; h++) {
     stroke(220, 220, 220)
     noFill()
     strokeWeight(0.75)
     circle(width/2, height/2, h*15, h*15)
  }
  pop()

}



function draw() {

  var now = clock()
  var ssn = now.season

  print ('season: ' + now.season)

  var top = -PI/2
  var inc = PI/6
  var alpha = 4

  noStroke()

  push()
  translate(375, 100)
  scale(0.7)


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
          noStroke()
          circle(width/2, height/2, h*15, h*15)
       }

   }

   pop()




  push()
  translate(75, 200)
  scale(0.4)

   top = -PI/2.5
   inc = PI/12
   alpha = now.progress.min * 4

   for (var x=0; x<=23; x++) {
      if (now.hours == 0) {
         fill(114, 200, 241, alpha)
      } else if (now.hours == 1) {
        fill (120, 200, 220, alpha)
      } else if (now.hours == 2) {
         fill(131, 208, 212, alpha)
      } else if (now.hours == 3) {
        fill (130, 200, 185, alpha)
      } else if (now.hours == 4) {
         fill (128, 203, 171, alpha)
      } else  if (now.hours == 5){
         fill (133, 202, 150, alpha)
      } else  if (now.hours == 6) {
         fill (138, 202, 137, alpha)
      } else  if (now.hours == 7) {
        fill (140, 200, 120, alpha)
      } else if (now.hours == 8) {
         fill (139, 200, 102, alpha)
      } else if (now.hours == 9) {
        fill (200, 220, 110, alpha)
      } else if (now.hours == 10) {
         fill (251, 241, 118, alpha)
      } else if (now.hours == 11) {
         fill(250, 225, 115, alpha)
      } else if (now.hours == 12) {
         fill (255, 214, 112, alpha)
      } else if (now.hours == 13) {
         fill(255, 195, 118, alpha) 
      } else if (now.hours == 14) {
         fill (252, 187, 121, alpha)
      } else if (now.hours == 15) {
        fill (250, 160, 118, alpha)
      } else if (now.hours == 16) {
         fill (245, 140, 113, alpha)
       } else if (now.hours == 17) {
        fill(243, 120, 100, alpha) 
      } else if (now.hours == 18) {
         fill (241, 94, 83, alpha)
       } else if (now.hours == 19) {
        fill(240, 110, 130, alpha)
      } else if (now.hours == 20) {
         fill (235, 120, 175, alpha)
      } else if (now.hours == 21) {
        fill(175, 120, 180, alpha)
      } else if (now.hours == 22) {
         fill (129, 127, 189, alpha)
      } else if (now.hours == 23) {
        fill(101, 250, 189, alpha)
      } else {
        fill (80, 280, 190, alpha)
      }

      var i = now.min
      var mo = now.hours
      arc(width/2, height/2, i*15, i*15, top + (inc*(mo-1)), top + (inc*mo)); // arc (x, y, width, height, start, stop)

   }

   if (now.hours >= 23 && now.min >= 59) {
     background('white')

       for (var h=2; h<34; h++) {
          stroke(150, 150, 150)
          noFill()
          strokeWeight(0.75)
          circle(width/2, height/2, h*15, h*15)
       }

   }

   pop()

}
