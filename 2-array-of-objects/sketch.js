
//create an empty array called balls

let balls = [];
let colors = [];

function setup() {
  createCanvas(1000, 1000);
  colors = [color("red"),color("blue")]

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(mouseX, mouseY, 60);
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,red,green,blue){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(random(0,255),random(0,255),random(0,255));
		    rect(this.x,this.y,100,100);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+.5;
		this.y = this.y+.5;
	}


}
