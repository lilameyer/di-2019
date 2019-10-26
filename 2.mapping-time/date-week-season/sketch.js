
function setup() {
  // set the width & height of the sketch
  createCanvas(1400, 700)
  background('black')
  angleMode(DEGREES)
  rectMode(CENTER)
  ellipseMode(CENTER)
}


	function draw() {

	var inc = 0
	var now = clock()
	var size = 2 * now.progress.season
	var x = width/2
	var y = height/2
	var deg = now.progress.season * 360



	background('black')
	noFill()

	stroke(255/now.month, 200, 255)
	push()
	translate(x, y)
	scale (2)
	rotate(deg)

	if (now.season == 1) {
		inc = 20
	} else if (now.season == 2) {
		inc = 10
	} else if (now.season == 3) {
		inc = 100/15
	} else if (now.season == 4) {
		inc = 5
	}


	strokeWeight(now.progress.week * 2)

	for (i=(100/inc/2)*-1; i<=(100/inc/2); i++) {
		line(i*inc, -50, i*inc, 50)
		line (-50, i*inc, 50, i*inc)
	}

		rect(0, 0, 100, 100)
		noStroke()

		fill(255/now.month, 200, 255)
		rect(-50 + inc/2, -50 + inc/2, inc, inc)

	pop()


	push()

	strokeWeight(now.progress.week * 2)

	translate(x, y)
	scale (2)
	circle(0, 0, 150)
	pop()

 }