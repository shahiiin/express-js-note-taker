const inquirer = require("inquirer");
const fs = require("fs");
//import classes
const { Manager } = require("./../lib/Manager");
const { Intern } = require("./../lib/Intern");
const { Engineer } = require("./../lib/Engineer");

const addToJson = (data) => {
  //check if file exist
  if (!fs.existsSync("data.json")) {
    //create new file if not exist
    fs.closeSync(fs.openSync("data.json", "w"));
  }

  // read file
  const file = fs.readFileSync("data.json");
  console.info("file is ", file.toString());
  //check if file is empty
  if (file.length == 0) {
    //add data to json file
    fs.writeFileSync("data.json", JSON.stringify([data]));
  } else {
    //append data to jso file
    let json = JSON.parse(file.toString());
    //add json element to json object
    json.push(data);
    fs.writeFileSync("data.json", JSON.stringify(json));
  }
};

const managerInformation = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "name: ",
      },
      {
        name: "id",
        message: "id: ",
      },
      {
        name: "email",
        message: "email: ",
      },
      {
        name: "officeNumber",
        message: "officeNumber: ",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      manager.role = manager.getRole();
      addToJson(manager);
      chooseRole();
    });
};
managerInformation();

const interInformation = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "intern name: ",
      },
      {
        name: "id",
        message: "intern id: ",
      },
      {
        name: "email",
        message: "intern email: ",
      },
      {
        name: "school",
        message: "intern school: ",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      intern.role = intern.getRole();
      addToJson(intern);
      chooseRole();
    });
};

const engineerInformation = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "engineer name: ",
      },
      {
        name: "id",
        message: "engineer id: ",
      },
      {
        name: "email",
        message: "engineer email: ",
      },
      {
        name: "github",
        message: "engineer github: ",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineer.role = engineer.getRole();
      addToJson(engineer);
      chooseRole();
    });
};

const chooseRole = () => {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "chooseOption",
        message: "what do you want to do?",
        choices: ["add intern", "add engineer", "finish building my team"],
      },
    ])
    .then((answers) => {
      console.info("Answer:", answers);
      if (answers.chooseOption == "add intern") {
        interInformation();
      } else if (answers.chooseOption == "add engineer") {
        engineerInformation();
      } else {
        return false;
      }
    });
};
