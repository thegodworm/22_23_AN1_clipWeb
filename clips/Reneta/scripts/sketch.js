/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Downside_Emitter.mp3";
let sequencer;

let anim1 = new Animator ("./assets/anim1/_CHIFFRE_.png", 42);

function preload (){
	anim1 = new Animator("./assets/anim2/_CHIFFRE_.png", 42);
}

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		start: 1,
		stop : 42,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			anim2.update(event.amount);
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
	anim2.draw(100, 100, 200, 400)
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

