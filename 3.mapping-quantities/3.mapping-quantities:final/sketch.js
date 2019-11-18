 
  // FOR COLOR
  // 1 = underground
  // 2 = atmospheric 
  // 3 = lab

  // COUNTRIES
  // 1 = USA
  // 2 = RUS
  // 3 = GBR
  // 4 = FRA
  // 5 = CHN
  // 6 = IND
  // 7 = PAK
  // 8 = NK

var spendingTable

var allTableUSA
var allTableRUS
var allTableGBR

function preload(){
  spendingTable = loadTable('data/military-spending-percent-GDP.csv', 'csv', 'header')

  allTableUSA = loadTable('data/all-activity-USA.csv', 'csv', 'header')
  allTableRUS = loadTable('data/all-activity-RUS.csv', 'csv', 'header')
  allTableGBR = loadTable('data/all-activity-GBR.csv', 'csv', 'header')
  allTableFRA = loadTable('data/all-activity-FRA.csv', 'csv', 'header')
  allTableCHN = loadTable('data/all-activity-CHN.csv', 'csv', 'header')
  allTableIND = loadTable('data/all-activity-IND.csv', 'csv', 'header')
  allTablePAK = loadTable('data/all-activity-PAK.csv', 'csv', 'header')
  allTableNK = loadTable('data/all-activity-NK.csv', 'csv', 'header')

}



function setup(){

  createCanvas(1440, 6250)
  background('#FFF2E9')


  // USA

  var spending = spendingTable

  var allUSA = allTableUSA

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  text('UNITED STATES', 50, 70)

  textSize(12)
  text('FROM 1960-2007', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// USA NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allUSA.getRowCount(); r++) {
    for (var c=1; c<allUSA.getColumnCount(); c++) {

      var stretch = width / 951

      // 951 is total sum of tests + 1px in between each entry

      value = allUSA.getNum(r, 3) * stretch
      noStroke()
      
      if (allUSA.getNum(r, 1) == 1) {

        if (r>=0) {

          var uColor = allUSA.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
            // print ('hey bitch')
          } 

          rect(x, 200, value, 200)


        }
      }

    }

    x += (value + 1)
}


// USA MILITARY SPENDING

    x = 50
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 275.8

        value = spending.getNum(r, 1) * stretch
        var alpha = 2 / spending.getNum(r, 1)

          if (spending.getNum(r, 1) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 1) >=5 && spending.getNum(r, 1) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 1) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }


// save('my-sketch.svg')














push()
translate(0, 750)



 var allRUS = allTableRUS

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('RUSSIA', 50, 70)

  textSize(12)
  text('FROM 1960-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// RUS NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allRUS.getRowCount(); r++) {
    for (var c=1; c<allRUS.getColumnCount(); c++) {

      var stretch = width / 965

      value = allRUS.getNum(r, 3) * stretch
      noStroke()
      

        if (r>=0) {

          var uColor = allRUS.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)


        }

    }

    x += (value + 1)
}


// RUS MILITARY SPENDING

    x = 1100
    value = 0

    for (var r=33; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 275.8

        value = spending.getNum(r, 2) * stretch
        var alpha = 2 / spending.getNum(r, 2)

          if (spending.getNum(r, 2) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 2) >=5 && spending.getNum(r, 2) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 2) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()

















push()
translate(0, 1500)



 var allGBR = allTableGBR

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('UNITED KINGDOM', 50, 70)

  textSize(12)
  text('FROM 1960-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// GBR NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allGBR.getRowCount(); r++) {
    for (var c=1; c<allGBR.getColumnCount(); c++) {

      var stretch = width / 41

      value = allGBR.getNum(r, 3) * stretch
      noStroke()
      

        if (r>=0) {

          var uColor = allGBR.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)


        }

    }

    x += (value + 1)
}


// GBR MILITARY SPENDING

    x = 50
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 200

        value = spending.getNum(r, 3) * stretch

          if (spending.getNum(r, 3) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 3) >=5 && spending.getNum(r, 3) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 3) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()




























push()
translate(0, 2250)



 var allFRA = allTableFRA

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('FRANCE', 50, 70)

  textSize(12)
  text('FROM 1960-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// FRA NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allFRA.getRowCount(); r++) {
    for (var c=1; c<allFRA.getColumnCount(); c++) {

      var stretch = width / 250

      value = allFRA.getNum(r, 3) * stretch
      noStroke()
      


          var uColor = allFRA.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)



    }

    x += (value + 1)
}


// FRA MILITARY SPENDING

    x = 50
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 185

        value = spending.getNum(r, 4) * stretch

          if (spending.getNum(r, 4) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 4) >=5 && spending.getNum(r, 4) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 4) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()
















push()
translate(0, 3000)



 var allCHN = allTableCHN

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('CHINA', 50, 70)

  textSize(12)
  text('FROM 1964-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// CHN NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allCHN.getRowCount(); r++) {
    for (var c=1; c<allCHN.getColumnCount(); c++) {

      var stretch = width / 60

      value = allCHN.getNum(r, 3) * stretch
      noStroke()
      


          var uColor = allCHN.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)



    }

    x += (value + 1)
}


// CHN MILITARY SPENDING

    x = 875
    value = 0

    for (var r=30; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 90

        value = spending.getNum(r, 5) * stretch

          if (spending.getNum(r, 5) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 5) >=5 && spending.getNum(r, 5) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 5) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()


























push()
translate(0, 3750)



 var allIND = allTableIND

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('INDIA', 50, 70)

  textSize(12)
  text('FROM 1964-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// IND NUCLEAR TESTING


  var x = 465
  var value = 0

  for (var r=0; r<allIND.getRowCount(); r++) {
    for (var c=1; c<allIND.getColumnCount(); c++) {

      var stretch = width / 6

      value = allIND.getNum(r, 3) * stretch
      noStroke()
      


          var uColor = allIND.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)



    }

    x += (value + 1)
}


// IND MILITARY SPENDING

    x = 50
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 155

        value = spending.getNum(r, 6) * stretch

          if (spending.getNum(r, 6) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 6) >=5 && spending.getNum(r, 6) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 6) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()



























push()
translate(0, 4500)



 var allPAK = allTablePAK

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('PAKISTAN', 50, 70)

  textSize(12)
  text('FROM 1964-2006', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// PAK NUCLEAR TESTING


  var x = 1180
  var value = 0

  for (var r=0; r<allPAK.getRowCount(); r++) {
    for (var c=1; c<allPAK.getColumnCount(); c++) {

      var stretch = width / 100

      value = allPAK.getNum(r, 3) * stretch
      noStroke()
      


          var uColor = allPAK.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)



    }

    x += (value + 1)
}


// PAK MILITARY SPENDING

    x = 50
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 275

        value = spending.getNum(r, 7) * stretch

          if (spending.getNum(r, 7) < 5) {
            fill('rgba(0,0,0, 0.25)')
          } else if (spending.getNum(r, 7) >=5 && spending.getNum(r, 7) < 8) {
            fill('rgba(0,0,0, 0.66)')
          } else if (spending.getNum(r, 7) >= 8) {
            fill('rgba(0,0,0, 1)')
          } 

          // fill ('rgba(0, 0, 0, alpha)')

          // print (alpha)

        noStroke()
        // fill (0)
        rect(x, y, value, 200)


        x += (value + 1)
    }

pop()

































push()
translate(0, 5250)



 var allNK = allTableNK

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  fill(0)
  text('NORTH KOREA', 50, 70)

  textSize(12)
  text('FROM 2006-2017', 50, 90)
  text ('NUCLEAR TESTING', 50, 180)
  text ('MILITARY SPENDING', 50, 435)

  var rowHeight = 200
  var spacing = 0
  var width = 1350

  rectMode(CORNER)


// PAK NUCLEAR TESTING


  var x = 50
  var value = 0

  for (var r=0; r<allNK.getRowCount(); r++) {
    for (var c=1; c<allNK.getColumnCount(); c++) {

      var stretch = width / 6.15

      value = allNK.getNum(r, 3) * stretch
      noStroke()
      


          var uColor = allNK.getNum(r, 2)

          if (uColor == 1) {
            fill('#1ACFFF')
          } else if (uColor == 2) {
            fill ('#FF441F')
          } else if (uColor == 3) {
            fill('#FFFF00')
          } 

          rect(x, 200, value, 200)



    }

    x += (value + 1)
}


// PAK MILITARY SPENDING

    x = 1150
    value = 0

    for (var r=0; r<spending.getRowCount(); r++) {
        var y = 455
        var stretch = width / 165

        // value = 22

          // if (spending.getNum(r, 8) < 5) {
          //   fill('rgba(0,0,0, 0.25)')
          // } else if (spending.getNum(r, 8) >=5 && spending.getNum(r, 8) < 8) {
          //   fill('rgba(0,0,0, 0.66)')
          // } else if (spending.getNum(r, 8) >= 8) {
          //   fill('rgba(0,0,0, 1)')
          // } 

          fill(0)

          // fill ('rgba(0, 0, 0, alpha)')

          print (value)

        noStroke()
        // fill (0)
        rect(x, y, 22 * stretch, 200)


        x += (value + 1)
    }

pop()



// save('my-sketch.svg')




}
