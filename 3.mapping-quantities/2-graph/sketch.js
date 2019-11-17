var data
var money

function preload(){
  data = loadJSON('data/all-activity-mine.json')
  money = loadJSON('data/military-spending-2.json')
}

function setup(){
  createCanvas(1440, 800)
  background('#FFF2E9')

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(CENTER)
  textStyle(BOLD)

  text('NUCLEAR TESTING', 400, 120)
  textSize(12)
  text('AVERAGE # OF TESTS (1960-2007)', 400, 140)

  textSize(18)
  text('MILITARY SPENDING', 1000, 120)
  textSize(12)
  text('% OF TOTAL GDP (IN BILLIONS)', 1000, 140)

  push()
  translate (175, 225)

  for (i=0; i<10; i++) {
    stroke(200)
    line (0, i*50, 500, i*50)
    for (y=0; y<=900; y+=100) {
      text(y, -25, i*50)
    }
  }

  pop()


  push()
  translate (775, 225)

  for (i=0; i<10; i++) {
    stroke(200)
    line (0, i*50, 500, i*50)
    for (y=0; y<=900; y+=100) {
      text(y, -25, i*50)
    }
  }
  
  pop()

  var x = 225
  var y = 720
  var colWidth = 60

    // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=0; c<data.countries.length; c++){
    var country = data.countries[c]
    text(country, x, y)
    x += colWidth
  }

// for (i=1; i<=8; i++) {
//   rect (x, info.details[country].lab, x*i, 400)
// }


   for (var c=0; c<data.countries.length; c++){
    var country = data.countries[c]
    text(country, x+125, y)
    x += colWidth
  }




}
