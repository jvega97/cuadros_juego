//let bg = 0
let pum = []
let y2 =100
let y =100
const stars = []
const starsLength = 400
function setup() {
	createCanvas(windowWidth, windowHeight);
	//for(i=0; i<starsLength; i++){
	//	stars.push(craeteStars())
	//}
}

function draw() {
	background('black')
	//drawStars()

	
	fill('red')
	
	if (keyIsDown(UP_ARROW))
		y2--
	if (keyIsDown(DOWN_ARROW))
		y2++
	if (keyIsDown(87))
		y-- 
	if (keyIsDown(83))
		y++
	rect(200, y, 80, 100)
	rect(800, y2, 80, 100)
	for (let i=0; i<pum.length;i++) {
		fill(pum[i].c)
		rect(pum[i].x++, y, pum[i].t, 20)
		pum[i].move()
		
	}
}
/*
function craeteStars(){
	
	let x = floor(random(1, width))
	let y = floor(random(1, height))
	const r = floor(2,5)
	const c = color(255,255,255)
	
	return{
		x,
		y,
		r,
		c,
		
	}
}
}

function drawStars(){
	stars.forEach((s)=>{
		fill(s.c)
		noStroke()
		ellipse(s.x, s.y, s.r, s.r)
	})
}*/


function keyPressed(){
		if (keyCode  == UP_ARROW) {
		//bg = bg == 255 ? 0 : 255
		y--
	}else if (keyCode == DOWN_ARROW) {
		y++
	
	}
}
	



