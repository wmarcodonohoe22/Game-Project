//create a variable to hold one ball
let b;
let a;
let c;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green");
  a = new Ball(200,20,"green");
  c = new ball(30, 30,"blue")
}


function draw(){
	background("blue");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    a.drawBall();
    a.moveBall();
    c.moveball();
}



//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,50,50);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
