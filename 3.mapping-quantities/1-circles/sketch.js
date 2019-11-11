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
  text('NUCLEAR TESTING VS. MILITARY SPENDING', width/2, 70)

  textSize(12)
  fill(0)
  noStroke()

  var x = 200
  var y = 135
  var rowHeight = 85
  var colWidth = 16

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=0; c<data.countries.length; c++){
    var country = data.countries[c]
    text(country, 80, y)
    y += rowHeight
  }

  // draw the year labels for columns & counts for each country per year
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    var info = data.years[i] // grab the next year's data
    y = 135

    data.countries.forEach(function(country) {

    if (info.details[country].lab > 0 || info.details[country].underground > 0 || info.details[country].atmosphere > 0) {
      stroke('#FFF2E9')
      strokeWeight(0.25)
    } else {
      noStroke()
    }

    if (country == "USA") {
        fill ('#000338')
      } else if (country == "RUS") {
        fill ('#650000')
      } else if (country == "CHN") {
        fill ('#54000F')
      } else if (country == "PAK") {
        fill ('#651B00')
      } else if (country == "IND") {
        fill ('#B33D20')
      } else if (country == "GBR") {
        fill ('#194962')
      } else if (country == "FRA") {
        fill ('#450744')
      } else if (country == "NK") {
        fill (0)
      }
      circle(x-1, y, info.details[country].lab)


      if (country == "USA") {
        fill ('#2A3B7D')
      } else if (country == "RUS") {
        fill ('#B11519')
      } else if (country == "CHN") {
        fill ('#820D2C')
      } else if (country == "PAK") {
        fill ('#9F1819')
      } else if (country == "IND") {
        fill ('#B33D20')
      } else if (country == "GBR") {
        fill ('#2B6687')
      } else if (country == "FRA") {
        fill ('#672567')
      } else if (country == "NK") {
        fill (0)
      }
      circle(x-1, y, info.details[country].underground)



      if (country == "USA") {
        fill (0, 0, 255)
      } else if (country == "RUS") {
        fill (255, 0, 0)
      } else if (country == "CHN") {
        fill (171, 0, 59)
      } else if (country == "PAK") {
        fill (206, 37, 37)
      } else if (country == "IND") {
        fill (249, 82, 43)
      } else if (country == "GBR") {
        fill (41, 178, 255)
      } else if (country == "FRA") {
        fill (182, 0, 204)
      } else if (country == "NK") {
        fill (0)
      }
      circle(x-1, y, info.details[country].atmosphere)


      y += rowHeight // shift downward to next row
    })

    x += colWidth // shift rightward to next col
  }





  for (var i=0; i<money.years.length; i++){
    var info = money.years[i] // grab the next year's data
    y = 150
    x = 440

    rowHeight = 85
    colWidth = 16

    money.countries.forEach(function(country) {

    if (country == "USA") {
        fill ('#000338')
      } else if (country == "RUS") {
        fill ('#650000')
      } else if (country == "CHN") {
        fill ('#54000F')
      } else if (country == "PAK") {
        fill ('#651B00')
      } else if (country == "IND") {
        fill ('#B33D20')
      } else if (country == "GBR") {
        fill ('#194962')
      } else if (country == "FRA") {
        fill ('#450744')
      } else if (country == "NK") {
        fill (0)
      }
      rect (x-1, y, info.details[country].percent * 2, info.details[country].percent * 2)
      print (info.details[country].percent)


      if (country == "USA") {
        fill ('#2A3B7D')
      } else if (country == "RUS") {
        fill ('#B11519')
      } else if (country == "CHN") {
        fill ('#820D2C')
      } else if (country == "PAK") {
        fill ('#9F1819')
      } else if (country == "IND") {
        fill ('#B33D20')
      } else if (country == "GBR") {
        fill ('#2B6687')
      } else if (country == "FRA") {
        fill ('#672567')
      } else if (country == "NK") {
        fill (0)
      }



      if (country == "USA") {
        fill (0, 0, 255)
      } else if (country == "RUS") {
        fill (255, 0, 0)
      } else if (country == "CHN") {
        fill (171, 0, 59)
      } else if (country == "PAK") {
        fill (206, 37, 37)
      } else if (country == "IND") {
        fill (249, 82, 43)
      } else if (country == "GBR") {
        fill (41, 178, 255)
      } else if (country == "FRA") {
        fill (182, 0, 204)
      } else if (country == "NK") {
        fill (0)
      }

      y += rowHeight // shift downward to next row
    })

    x += colWidth // shift rightward to next col
  }

}
