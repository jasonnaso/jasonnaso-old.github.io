

var adminOptions = document.getElementsByClassName("adminOptions");
var adminForms = document.getElementsByClassName("adminForms");

function selectForm(){

	currentOption = Number(this.dataset.value); //Saves the value of the form that triggered the function
												//into a variable

	for(var i = 0; i < adminForms.length; i++){ //Hides all forms
		adminForms[i].classList.add("hidden");
	}

	adminForms[currentOption].classList.toggle("hidden"); //Shows the form that was pressed by toggling hidden class to on
}

for(var i = 0; i < adminOptions.length; i++){  //gives all buttons eventlisteners for the function
	adminOptions[i].addEventListener("click", selectForm);
};

//j here for news page button//










