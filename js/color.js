var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("bodyId");
var direction = document.getElementById("direction");
var directions = ["left", "right", "center", "bottom", "top"];
var directionDisplay = document.getElementById("directionDisplay");
var cssDisplay = document.querySelector("h2");
var number;




color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
direction.addEventListener("click", changeDirection);


	

function changeDirection(){

	number = directions[Math.floor(Math.random() * directions.length)];
	if(direction.value === number){
		number = directions[Math.floor(Math.random() * directions.length)];
	} 

	direction.value = number;
	body.style.background = changeColor();

	directionDisplay.textContent = direction.value;
}

function changeColor(){

	body.style.background = "linear-gradient(to " + direction.value + ", " + color1.value + ", " + color2.value +")";

	cssDisplay.textContent = "linear-gradient(to " + direction.value + ", " + color1.value + ", " + color2.value +")";

}

