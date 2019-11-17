var atmosTable
var underTable
var labTable

var percentTable
var spendingTable

function preload(){
  atmosTable = loadTable('data/atmospheric.csv', 'csv', 'header')
  underTable = loadTable('data/underground.csv', 'csv', 'header')
  labTable = loadTable('data/lab.csv', 'csv', 'header')

  percentTable = loadTable('data/military-spending-percent-GDP.csv', 'csv', 'header')
  spendingTable = loadTable('data/military-spending-billions.csv', 'csv', 'header')
}

function setup(){
  createCanvas(1440, 1800)
  background('#FFF2E9')

  // pick one of the three data files to work with and call it 'table'
  var atmosphere = atmosTable
  var underground = underTable
  var lab = labTable

  var percent = percentTable
  var spending = spendingTable

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  text('NUCLEAR TESTING VS. MILITARY SPENDING', 75, 70)
  strokeWeight(3)
  line(75, 80, 485, 80)

  rectMode(CORNER)
  noStroke()

  fill('rgba(0,0,0, 1)')
  textSize(12)
  text('UNDERGROUND', 925, 72)
  text('ATMOSPHERIC', 1075, 72)
  text('LAB', 1225, 72)

  circle(900, 67, 15, 15)


  fill('rgba(0,0,0, 0.5)')
  circle(1050, 67, 15, 15)

  fill('rgba(0,0,0, 0.25)')
  circle(1200, 67, 15, 15)




  textSize(16)
  fill(0)
  noStroke()

  var x = 120
  var y = 200
  var rowHeight = 200
  var colWidth = 21



  // draw country name labels on the left edge of the atmosphere
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<atmosphere.getColumnCount(); c++){
    text(atmosphere.columns[c], x-colWidth, y)
    y += rowHeight

    }




  // print out the total for each country, one column at a time
  x = 175
  for (var r=0; r<atmosphere.getRowCount(); r++){
    y = 195
    for (var c=1; c<atmosphere.getColumnCount(); c++){
      var value = atmosphere.getNum(r, c)
      // text(value, x, y)

      textStyle(NORMAL)
      textAlign(LEFT)
      textSize(9)
      fill(0)
      text('TOTAL TESTING BY YEAR', 70, y+25)


      if (atmosphere.columns[c] == "USA") {
      print('hey bitches')
          fill ('#000338')
        } else if (atmosphere.columns[c] == "RUS") {
          fill ('#650000')
        } else if (atmosphere.columns[c] == "CHN") {
          fill ('#54000F')
        } else if (atmosphere.columns[c] == "PAK") {
          fill ('#651B00')
        } else if (atmosphere.columns[c] == "IND") {
          fill ('#B33D20')
        } else if (atmosphere.columns[c] == "GBR") {
          fill ('#194962')
        } else if (atmosphere.columns[c] == "FRA") {
          fill ('#450744')
        } else if (atmosphere.columns[c] == "NK") {
          fill (0)
        }
        
      circle(x, y, value)
      y += rowHeight
    }
    x += colWidth
  }




    x = 175
    for (var r=0; r<underground.getRowCount(); r++){
      y = 195
      for (var c=1; c<underground.getColumnCount(); c++){
        var value = underground.getNum(r, c)
        // text(value, x, y)

          if (underground.columns[c] == "USA") {
            fill ('#2A3B7D')
          } else if (underground.columns[c] == "RUS") {
            fill ('#B11519')
          } else if (underground.columns[c] == "CHN") {
            fill ('#820D2C')
          } else if (underground.columns[c] == "PAK") {
            fill ('#9F1819')
          } else if (underground.columns[c] == "IND") {
            fill ('#B33D20')
          } else if (underground.columns[c] == "GBR") {
            fill ('#2B6687')
          } else if (underground.columns[c] == "FRA") {
            fill ('#672567')
          } else if (underground.columns[c] == "NK") {
            fill (0)
          }

        circle(x, y, value)
        y += rowHeight
      }
      x += colWidth
    }





    x = 175
    for (var r=0; r<lab.getRowCount(); r++){
      y = 195
      for (var c=1; c<lab.getColumnCount(); c++){
        var value = lab.getNum(r, c)

          if (lab.columns[c] == "USA") {
            fill (0, 0, 255)
          } else if (lab.columns[c] == "RUS") {
            fill (255, 0, 0)
          } else if (lab.columns[c] == "CHN") {
            fill (171, 0, 59)
          } else if (lab.columns[c] == "GBR") {
            fill (41, 178, 255)
          } else if (lab.columns[c] == "FRA") {
            fill (182, 0, 204)
          } 

        circle(x, y, value)
        y += rowHeight
      }
      x += colWidth
    }



    x = 175
    for (var r=0; r<percent.getRowCount(); r++){
      y = 265
      for (var c=1; c<percent.getColumnCount(); c++){
        var value = percent.getNum(r, c)

      fill(0)

        textStyle(NORMAL)
        textSize(9)
        text('MILITARY SPENDING AS % OF TOTAL GDP', 70, y+25)


        if (percent.columns[c] == "USA") {
          fill ('#000338')
        } else if (percent.columns[c] == "RUS") {
          fill ('#650000')
        } else if (percent.columns[c] == "CHN") {
          fill ('#54000F')
        } else if (percent.columns[c] == "PAK") {
          fill ('#651B00')
        } else if (percent.columns[c] == "IND") {
          fill ('#B33D20')
        } else if (percent.columns[c] == "GBR") {
          fill ('#194962')
        } else if (percent.columns[c] == "FRA") {
          fill ('#450744')
        } else if (percent.columns[c] == "NK") {
          fill (0)
        }

        rectMode(CENTER)
        rect(x, y, value, value)
        y += rowHeight
      }
      x += colWidth
    }



}