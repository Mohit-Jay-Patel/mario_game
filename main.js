var video="";
var nose_x='';
var nose_y="";
var model="";
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	Game_over = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
    
	video= createCapture(VIDEO);
	video.size(600,300);
	video.parent("webcam");

	model=ml5.poseNet(video,modelloaded);
	model.on("pose", gotPoses);
}
function modelloaded(){
	console.log("Model has been loaded");
}
function gotPoses(results){
  if(results.length > 0){
	console.log(results);
	nose_x=results[0].pose.nose.x;
	nose_y=results[0].pose.nose.y;
	console.log("Nose X = "+nose_x+"Nose Y = "+nose_y);
  }
}

function draw() {
	game()
}






