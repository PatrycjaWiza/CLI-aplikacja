const fs = require("fs").promises;

// const path = require("path");
// const contactsPath = path.resolve(__dirname, "./db/contacts");

function listContacts() {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const parsedContacts = JSON.parse(data);
      console.table(parsedContacts);
    })
    .catch((error) => console.error(error.message));
}

function getContactById(contactId) {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const parsedContacts = JSON.parse(data);
      console.table(parsedContacts.filter(({ id }) => id === contactId));
    })
    .catch((error) => console.error(error.message));
}

function removeContact(contactId) {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const parsedContacts = JSON.parse(data);
      const newFile = parsedContacts.filter(({ id }) => id !== contactId);
      console.table(newFile);

      fs.writeFile("./db/contacts.json", JSON.stringify(newFile))
        .then(() => {
          console.log("Contact removed successfully!");
        })
        .catch((error) => console.error(error.message));
    })
    .catch((error) => console.error(error.message));
}

function addContact(name, email, phone) {
  fs.readFile("./db/contacts.json")
    .then((data) => {
      const parsedContacts = JSON.parse(data);
      const idGenerator = Date.now().toString(36);
      parsedContacts.push({
        id: idGenerator,
        name: name,
        email: email,
        phone: phone,
      });
      console.table(parsedContacts);

      fs.writeFile("./db/contacts.json", JSON.stringify(parsedContacts))
        .then(() => console.log("Added contact successfully!"))
        .catch((error) => console.error(error.message));
    })
    .catch((error) => console.error(error.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
