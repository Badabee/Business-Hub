let table = document.querySelector("#data");
let tableau = document.querySelector("tr");
let button = document.querySelector("#final");
let input = document.querySelector("input")

function inputLength() {
	return input.value.length;
}

function createListElement() {
  let text = document.createElement("td");
  text.appendChild(document.createTextNode(input.value));
	tableau.appendChild(text);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

input.addEventListener("keypress", function(event) {
    if(inputLength() > 0 && event.which === 13) {
    createListElement();
    }   
  })