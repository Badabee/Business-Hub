// let table = document.querySelector("#data");
// let tableau = document.querySelector("tr");
// let button = document.querySelector("#final");
// let input = document.querySelector("input")


// table.addEventListener("submit", runEvent);

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
//   let text = document.createElement("td");
//   text.appendChild(document.createTextNode(input.value));
// 	tableau.appendChild(text);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// input.addEventListener("keypress", function(event) {
//     if(inputLength() > 0 && event.which === 13) {
//     createListElement();
//     }   
//   })

// let tableau = document.getElementsByClassName("box");
// let itemList = document.querySelector("tr");

// tableau.addEventListener("su", addItem);

// //Add Item
// function addItem(e){

//     e.preventDefault();

//     let newItem = document.getElementById("bev").value;
//     let tray = document.createElement("tr");

//     tray.appendChild(document.createTextNode(newItem));

//     itemList.appendChild(tray);
// }

function createCompany(name, category, location, contact) {
  return `
    <tr>
      <td>${name}</td>
      <td>${category}</td>
      <td>${location}</td>
      <td>${contact}</td>
    </tr>
  `;
}

function appendCompany(company) {
  const companiesTable = document.getElementById("data");
  companiesTable.children[1].innerHTML += company;
}

const addCompanyForm = document.forms["add-company"];

addCompanyForm.addEventListener("submit", e=> {
  e.preventDefault();

  const {name, category, location, contact} = addCompanyForm.elements;

  if(name.value && category.value && location.value && contact.value) {
    const company = createCompany(name.value, category.value, location.value, contact.value);
    appendCompany(company);
    addCompanyForm.reset();
  }
})
