// Taking in <form> submissions, adding them to a ‘fake database’ - just an Array in our case, and we are allowing our uses to interact with this data to map or filter out what they need.

/**
 * Create an empty array
 * add fields from the form
 * create function to add registrants
 */
const clients = [];

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
});

const form = document.querySelector("form");

// TODO{jeri.atkins}: Query these using CSS selector for id (#)
const fName = form.querySelector("fName");
const lName = form.querySelector("lName");
const street = form.querySelector("street");
const city = form.querySelector("city");
const state = form.querySelector("state");
const zip = form.querySelector("zip");
const email = form.querySelector("email");
const phone = form.querySelector("phone");
const sex = form.querySelector("sex");

console.log(lName.value);
/*function getFormDataFromIds(formEls) {
  return Array.from(formEls)

     // Remove elements that don't have ids
    .filter(client => client.id)
​
    // The id of the input will be the :key: and the value will be...the value.
    .map(({ id, value }) => ({
      [id]: value
    }))
​
    // Combine the separate objects into 1 'data object.'
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}*/

const client = {
  fName: document.getElementById("fName").value,
  lName: document.getElementById("lName").value,
  address: document.getElementById("street").value,
  city: document.getElementById("city").value,
  state: document.getElementById("state").value,
  zip: document.getElementById("zip").value,
  email: document.querySelector.getElementById("email").value,
  phone: document.getElementById("phone").value,
  sex: document.getElementById("sex").value
};
console.log(client.fName);
function addClients() {
  clients.push(client);
}

console.log(clients);

function namesList(clients) {
  return clients
    .map(client => `<li>$(client.fName, client.lName)</li>`)
    .join(" ");
}

const radios = document.querySelectorAll("input[name='drone']");

function getRadioValue(radios) {
  return Array.from(radios).filter(radio => radio.checked)[0].value;
}
// Upon form submission, get the value for the radio element.
console.log(getRadioValue(radios));
document.querySelector("nameList").addEventListener("click", () => {
  document.querySelector("ul").innerHTML = namesList(clients);
});
