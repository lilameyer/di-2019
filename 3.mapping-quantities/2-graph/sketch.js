var spendingTable
var testingTable

function preload(){
  testingTable = loadTable('data/nuclear-testing-totals.csv', 'csv', 'header')
  spendingTable = loadTable('data/military-spending-averages.csv', 'csv', 'header')
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
  textAlign(LEFT)

  var spending = spendingTable
  var testing = testingTable

    var x = 100
  var y = 715
  var rowHeight = 200
  var colWidth = 60

  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<testing.getColumnCount(); c++){
    text(testing.columns[c], x+125, y)
    x += colWidth
  }



  var x = 700
  var y = 715
  var rowHeight = 200
  var colWidth = 60

  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<testing.getColumnCount(); c++){
    text(testing.columns[c], x+125, y)
    x += colWidth
  }

  push()
  translate (175, 225)

  for (i=0; i<10; i++) {
    stroke(200)
    // line (0, i*50, 500, i*50)
    for (y=900; y>=0; y-=100) {
      text(y, -25, i)
       i+=50
    }
  }

    var x = 20
    var y = 0
    var width = 40


  for (var r=0; r<testing.getRowCount(); r++) {
    for (var c=1; c<testing.getColumnCount(); c++) {

      value = testing.getNum(r, c) / 2
      noStroke()

      if (r == 0) {
        fill(255, 0, 0)
      } else if (r == 1) {
        fill (0, 255, 0)
      } else if (r == 2) {
        fill(0, 0, 255)
      }

      rect((c-1) * 60 + x, y, width, y+value)
    }

    y += (value + 1)
  }



  pop()


  push()
  translate (775, 225)

  for (i=0; i<10; i++) {
    stroke(200)
    // line (0, i*50, 500, i*50)
    for (y=900; y>=0; y-=100) {
      text(y, -25, i)
       i+=50
    }
  }


    var x = 20
    var y = 200
    var width = 40


  for (var r=0; r<spending.getRowCount(); r++) {
    for (var c=1; c<spending.getColumnCount(); c++) {

      value = spending.getNum(r, c) / 2
      noStroke()

      if (r == 0) {
        fill(0, 0, 255)
      } else if (r == 1) {
        fill (255, 255, 0)
      } 

      rect((c-1) * 60 + x, y+value, width, 100)
    }

    y += (value + 1)
  }

  
  pop()





}
