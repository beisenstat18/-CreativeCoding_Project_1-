var x= 0;
var y=0;
var r= 255;
var b=215;
var g=0;
var size=10;
var positionX= 300;
var positionY=400;
var layer=1;

function setup() {
	createCanvas(600,400);

}

function draw() {
	
	r=map(x,0,600,255,255);
	b=map(x,0,600,96,255);
	background(r,b,0);
	size++;
	positionY--;
	noStroke();
	fill('#FEE2F1');
	shape_1();
	//y++;
	//x++;
	//shape_2();
	//if (positionY==0){
	//nofill();
		//shape_2();
	
}

function shape_1 (){
	ellipse(positionX, positionY, size, size);

function shape_2(){
	arc(x,y, 40, 40, PI+QUARTER_PI, PIE);

}	
	
}