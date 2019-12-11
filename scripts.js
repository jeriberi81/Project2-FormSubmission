// Taking in <form> submissions, adding them to a ‘fake database’ - just an Array in our case, and we are allowing our uses to interact with this data to map or filter out what they need.

/**
 * Create an empty array
 * add fields from the form
 * create function to add registrants
 */
const form = document.querySelector("form");

const fName = document.querySelector("fName");
const lName = document.querySelector("lName");
const street = document.querySelector("street");
const city = document.querySelector("city");
const state = document.querySelector("state");
const zip = document.querySelector("zip");
const email = document.querySelector("email");
const phone = document.querySelector("phone");
const age = document.querySelector("age");

const clients = [];

function addClient(fName, lName, street, city, state, zip, email, phone, age)
{
  clients.push({fName, lName, street, city, state, zip, email, phone, age
});

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  addClient(fName.value, lName.value, street.value,city.value, state.value, zip.value,
    email.value, phone.value, age.value);
  });

function namesList(clients)
{
  return clients.map(client => `<li>$(client.fName, client.lName)</li>`).join(" ");
}

document.querySelector("nameList").addEventListener("click", () => {
document.querySelector("ul").innerHTML = namesList(clients);
});

