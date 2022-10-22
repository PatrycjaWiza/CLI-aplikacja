// imported module with functions
const logger = require("./contacts");

// yargs package for easier console logging functions
// const argv = require("yargs").argv;

// alternative for yargs
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

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
