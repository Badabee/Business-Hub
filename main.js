/*let table = document.querySelector("#data");
let tableau = document.querySelector("tr");
let button = document.querySelector("#final");
let input = document.querySelector("input")


table.addEventListener("submit", runEvent);

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
*/

let tableau = document.getElementById("data");
let itemList = document.querySelector("tr");

tableau.addEventListener("submit", addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById("bev").value;
    let tray = document.createElement("tr");

    tray.appendChild(document.createTextNode(newItem));

    itemList.appendChild(tray);
}
