var type
var content

function preload(){
  type = loadTable('data/totals_by_type_transposed.csv', 'csv', 'header')
  content = loadTable('data/totals - by content.csv', 'csv', 'header')
}

function setup(){
  createCanvas(3200, 1000)
  background(255)

  // pick one of the three data files to work with and call it 'table'
  var table = content


  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 500
  var y = 120
  var rowHeight = 60
  var colWidth = 75

  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


  x = 500
  y = 120
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  x = 500
  for (var r=0; r<table.getRowCount(); r++){
    y = 120
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      circle(x, y, value, value)
      // text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

}