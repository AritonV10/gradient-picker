var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var body = document.getElementById("bodyId");
var direction = document.getElementById("direction");
var directions = ["left", "right", "bottom right", "bottom", "top"];
var radialShape =["eclipse", "circle"];
var directionDisplay = document.getElementById("directionDisplay");

var radialChange = document.getElementById("changeRadial");
var linearChange = document.getElementById("changeLinear");

var cssDisplay = document.querySelector("h2");
var shapeDisplay = document.getElementById("shapeDisplay");

var moveUP = document.getElementById("up");
var moveDOWN = document.getElementById("down");
var moveLEFT = document.getElementById("left");
var moveRIGHT = document.getElementById("right");
var posUpDown = 50;
var posLeftRight = 50;

var radial = false;
var linear = true;
var number;




color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
direction.addEventListener("click", changeDirection);
moveUP.addEventListener("click", Up);
moveDOWN.addEventListener("click", Down);
moveLEFT.addEventListener("click", Left);
moveRIGHT.addEventListener("click", Right);
radialChange.addEventListener("click", changeRadial);
linearChange.addEventListener("click", changeLinear);



function Right(){

	body.style.background = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
	posLeftRight++;
}

function Left(){

	body.style.background = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
	posLeftRight--;
}

function Up(){

	body.style.background = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
	posUpDown++;
}

function Down(){

	body.style.background = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
	posUpDown--;
}

function changeRadial(){

	radial = true;
	linear = false;
	direction.innerHTML= "Change shape"
	direction.value = "circle";
	shapeDisplay.textContent = "Radial";
	moveUP.disabled = false;
	moveDOWN.disabled = false;
	moveRIGHT.disabled = false;
	moveLEFT.disabled = false;
}

function changeLinear(){

	linear = true;
	radial = false;
	direction.innerHTML = "Change direction";
	direction.value = "bottom";
	shapeDisplay.textContent = "Linear";
	moveUP.disabled = true;
	moveDOWN.disabled = true;
	moveRIGHT.disabled = true;
	moveLEFT.disabled = true;

}


function changeDirection(){

		if(linear === true){
			number = directions[Math.floor(Math.random() * directions.length)];
			
			if(directions.length === number){
				number = directions[Math.floor(Math.random() * directions.length)];
			}
			direction.value = number;
			body.style.background = changeColor();

			directionDisplay.textContent = direction.value;
	
			}

		if(radial === true){
			number = radialShape[Math.floor(Math.random() * radialShape.length)];
			
			if(radialShape.length === number){
				number = radialShape[Math.floor(Math.random() * radialShape.length)];
			}
			direction.value = number;
			body.style.background = changeColor();

			directionDisplay.textContent = direction.value;

		}
}

function changeColor(){

	if(linear === true){
		body.style.background = "linear-gradient(to " + direction.value + ", " + color1.value + ", " + color2.value +")";
		cssDisplay.textContent = "linear-gradient(to " + direction.value + ", " + color1.value + ", " + color2.value +")";
	}
		
	if(radial === true){

		body.style.background = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
		cssDisplay.textContent = "radial-gradient(closest-corner at " + posLeftRight +"% " + posUpDown +"%, " + color1.value + ", " + color2.value +")";
	}

}

