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
  textAlign(LEFT)
  textStyle(BOLD)
  text('UNITED STATES NUCLEAR TESTING', 50, 70)

  textSize(12)
  text('FROM 1960-2007', 50, 90)

  text ('NUCLEAR TESTING', 50, 180)

  text ('MILITARY SPENDING', 50, 500)

  var x = 200
  var y = 200
  // var rowHeight = 85


  for (var i=0; i<data.years.length; i++){
    var info = data.years[i] // grab the next year's data
    var ht = 225
      var colWidth = 16


    data.countries.forEach(function(country) {

    noStroke()

    if (info.details[country].lab > 0) {
        fill (0, 0, 255)
      } else if (info.details[country].underground > 0) {
        fill (255, 0, 0)
      } else if (info.details[country].atmosphere > 0) {
        fill (0)
      } 

      rectMode (CORNER)
      rect(x, y, info.details[country].lab, ht)
      rect(x, y, info.details[country].atmosphere, ht)
      rect(x, y, info.details[country].underground, ht)
    })

    x += colWidth // shift rightward to next col
  }


  for (var i=0; i<money.years.length; i++){
    var info = money.years[i] // grab the next year's data
    var ht = 250
    x = 200
    y = 500
    var colWidth = 100

    money.countries.forEach(function(country) {

    noStroke()

    fill (0)
    stroke(255)
    strokeWeight(0.5)

      rectMode (CORNER)
      if (country == "USA") {
      rect(x, y, info.details[country].percent, ht)
      print (money.years.length)
      }
    })

    x += colWidth // shift rightward to next col
    print (x)
  }




}
