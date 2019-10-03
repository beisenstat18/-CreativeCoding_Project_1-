var x= 0;
var r= 255;
var b=215;
var g=0;
var size=10;
var positionX= 300
var positionY=400

function setup() {
	createCanvas(600,400);

}

function draw() {
	x++;
	positionY--;
	size++;
	r=map(x,0,600,255,255);
	b=map(x,0,600,96,215);
	background(r,b,0);
	
	ellipse(positionX, positionY, size, size);
	
	
}