// imported module with functions
const logger = require("./contacts");
// yargs package for easier console logging functions
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      logger.listContacts("Contacts list function");
      break;

    case "get":
      logger.getContactById(id);
      break;

    case "add":
      logger.addContact(name, email, phone);
      break;

    case "remove":
      logger.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
