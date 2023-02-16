const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/pageTemplate");
const employees = [];
const Manager = require("./library/manager");
const render = require("./src/pageTemplate");

// Function to initialize app
function init() {
  inquirer
    .prompt([
      {
        message: "Please enter manager name",
        type: "input",
        name: "manager_name",
      },
      {
        message: "Please enter manager id",
        type: "input",
        name: "manager_id",
      },
      {
        message: "Please enter managers office number",
        type: "input",
        name: "manager_office_number",
      },
      {
        message: "Please enter managers email address",
        type: "input",
        name: "manager_email",
      },
    ])
    .then(function (response) {
      console.log(response);
      const managerInstance = new Manager(
        response.manager_name,
        response.manager_id,
        response.manager_email,
        response.manager_office_number
      );
      console.log(managerInstance);
      employees.push(managerInstance);
      menu();
    });
}

function menu() {
  inquirer
    .prompt([
      {
        message: "would you like to add more emploees?",
        type: "list",
        name: "choice",
        choices: ["engineer", "intern", "im done"],
      },
    ])
    .then(function (response) {
      console.log(response);
      if (response.choice == "engineer") {
        addEngineer();
      } else if (response.choice == "intern") {
        addIntern();
      }
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        message: "Please enter engineer name",
        type: "input",
        name: "engineer_name",
      },
      {
        message: "Please enter engineer id",
        type: "input",
        name: "engineer_id",
      },
      {
        message: "Please enter engineers github",
        type: "input",
        name: "engineer_github",
      },
      {
        message: "Please enter engineers email address",
        type: "input",
        name: "engineer_email",
      },
    ])
    .then(function (response) {
      const engineerInstance = new Engineer(
        response.engineer_name,
        response.engineer_id,
        response.engineer_email,
        response.engineer_github
      );
      console.log(engineerInstance);
      employees.push(engineerInstance);
      console.log(employees);
      menu();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        message: "Please enter Intern name",
        type: "input",
        name: "intern_name",
      },
      {
        message: "Please enter Intern id",
        type: "input",
        name: "intern_id",
      },
      {
        message: "Please enter intern school",
        type: "input",
        name: "intern_school",
      },
      {
        message: "Please enter interns email address",
        type: "input",
        name: "intern_email",
      },
    ])
    .then(function (response) {
      const internInstance = new Intern(
        response.intern_name,
        response.intern_id,
        response.intern_email,
        response.intern_school
      );
      console.log(internInstance);
      employees.push(internInstance);
      console.log(employees);
      menu();
    });
}
const team = [];
const writeFile = () => {
  fs.writeFile("outputPath", JSON.stringify(team), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Profile created successfully");
    }
  });
};
// writeHTML();
// initialize app
init();
