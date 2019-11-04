var data

function preload(){
  data = loadTable('data/military-spending.csv', 'csv', 'header')
}

function setup(){
  createCanvas(800, 600)

  print('csv data converted to a p5 "Table" object:', data)
}
