var input = document.getElementById("input");
var button = document.getElementById("addbutton");
var list = document.querySelector("li");
var parent_list = document.querySelector("ul");


function createElement(){

	var newElement = document.createElement("li");
	var newText = document.createTextNode(input.value);
	newElement.appendChild(newText);
	list.appendChild(newElement);
	parent_list.appendChild(list);
}

function inputLength(input){
	if(input.value.length > 0){
		return true;
	}
	
	return false;
}


button.addEventListener("click", function(){
	
	if(inputLength(input)){
		createElement();
	} else {
		input.style.background="red";
	}
		
})

input.addEventListener("keypress", function(event){
	if(inputLength(input) && event.which === 13){
		createElement();
		input.style.value="";
	}
})