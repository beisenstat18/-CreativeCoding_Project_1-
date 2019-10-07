var x= 0;
var y=0;
var r= 255;
var b=215;
var a=20;
var positionX=300;
var positionY=400;
var secondpositionX=300;
var secondpositionY=300;
var thirdpositionY=400;
var rainbow;
var version=1;

function setup() {
	createCanvas(600,400);
	rainbow=[color('#c0392b'), color('#e67e22'), color('#f1c40f'), color('#2ecc71'), color('#3498db'), color('#8e44ad')];
}

function draw() {
	if (version==1){
	r=map(x,0,600,100,255);
	b=map(y,0,600,255,0);
	background(r,0,b);
	x++;


	positionY--;
	translate(positionX,positionY);
	noStroke();
	fill('#FF018E');
	shape_1();

	secondpositionY--;
	translate(secondpositionX,secondpositionY);
	noStroke();
	fill('#81DDF6');
	shape_1();

	thirdpositionY--;
	translate(-550,thirdpositionY);
	noStroke();
	fill('#78FF87');
	shape_1();
	}	
}

function shape_1(){

		for (var i=0;i<5;i++){
		ellipse(0,-60,120,120);
		rotate(radians(73));
	}
		fill('#FFDD45')
		ellipse (0,0,40,40);
}
function mousePressed(){
	version++;
	if (version>6){
		version=1;
	}
}
