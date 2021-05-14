const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require();
const Engineer = require();
const Intern = require();


function startApp() {
    createHTML();
    addWorker();
}

function addWorker() {
    inquirer.prompt([{
        message: "Enter worker's name.",
        name: "name"
    },
{
    type: "list",
    message: "Select worker's role.",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
    ],
    name: "role"
},
])
}