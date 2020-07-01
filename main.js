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
