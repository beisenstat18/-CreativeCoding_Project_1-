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
var version=1;

function setup() {
	createCanvas(600,400);
}

function draw() {
	if (version==1){
		 background('#69B3A3');
	}
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


		if (thirdpositionY<0){
		//	while (number<30){
		 r=map(x,0,600,100,255);
		 b=map(y,0,600,255,0);
		 background(r,0,b);
		 x++;
			for (var i =10; i<width; i+=10){
	 		for(var h=10; h<=height-10; h+=20){
	 			translate(i,h);

	 			noStroke();
	 			fill(b,0,r);
	 			shape_1();
	 			
		
			}
		
		}
		}
if (x>600){
					background('#FFDD45');
					fill('#81DDF6');
					translate(300,300);
					ellipse(0,0,400,400);
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
	if (version>2){
		version=1;
	}
}
