 
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

function preload(){
  spendingTable = loadTable('data/military-spending-percent-GDP.csv', 'csv', 'header')

  allTableUSA = loadTable('data/all-activity-USA.csv', 'csv', 'header')
  allTableRUS = loadTable('data/all-activity-RUS.csv', 'csv', 'header')
}



function setup(){

  createCanvas(1440, 880, SVG)
  background('#FFF2E9')


  // USA

  var spending = spendingTable

  var allUSA = allTableUSA

  // set up typography
  textFont("Space Mono")
  textSize(18)
  textAlign(LEFT)
  textStyle(BOLD)
  text('UNITED STATES NUCLEAR TESTING', 50, 70)

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


save('my-sketch.svg')

















// // set up typography
//   textFont("Space Mono")
//   textSize(18)
//   textAlign(LEFT)
//   textStyle(BOLD)
//   text('RUSSIA NUCLEAR TESTING', 50, 800)

//   textSize(12)
//   text('FROM 1960-1999', 50, 820)
//   text ('NUCLEAR TESTING', 50, 910)
//   text ('MILITARY SPENDING', 50, 1175)

//   var rowHeight = 200
//   var spacing = 0
//   var width = 1350

//   rectMode(CORNER)


// // RUS NUCLEAR TESTING

//   var allRUS = allTableRUS

//   var x = 50
//   var value = 0

//   for (var r=0; r<allRUS.getRowCount(); r++) {
//     for (var c=1; c<allRUS.getColumnCount(); c++) {

//       var stretch = width / 782

//       value = allRUS.getNum(r, 3) * stretch
//       noStroke()
      

//         if (r>=0) {

//           var uColor = allRUS.getNum(r, 2)

//           if (uColor == 1) {
//             fill(255, 0, 0)
//           } else if (uColor == 2) {
//             fill (0, 0, 255)
//           } else if (uColor == 3) {
//             fill(0)
//           } 
//           rect(x, 935, value, 200)
//           print (value)

//         }

//     }

//     x += (value + 1)
// }


// // RUS MILITARY SPENDING

//     x = 50
//     value = 0

//     for (var r=0; r<spending.getRowCount(); r++) {
//         var y = 1200
//         var stretch = width / 275.8

//         value = spending.getNum(r, 2) * stretch

//         noStroke()
//         fill (0)
//         rect(x, y, value, 200)

//         x += (value + 1)
//     }


}
