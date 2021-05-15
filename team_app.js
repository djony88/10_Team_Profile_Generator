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
        message: "Input worker's name.",
        name: "name"
    },
{
    type: "list",
    message: "Select worker's position.",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
    ],
    name: "position"
},
{
    message: "Input worker's ID.",
    name: "ID"
},
{
    message: "Input worker's email address.",
    name: "email"
}])

.then(function({name, position, ID, email}){
    let positionInfo = "";
    if (positionInfo === "Engineer") {
        positionInfo = "GitHub name";
    } else if(positionInfo = "Intern") {
        positionInfo = "finished school";
    } else {
        positionInfo = "Office Phone#";
    }
    

inquirer.prompt([{
    message: `Input worker's ${positionInfo}`,
    name: "positionInfo"
},
{
    type: "list",
    message: "Would you like to add more worker's?",
    choices: [
        "yes",
        "no"
    ],
    name: "moreWorkers"
}])

.then(function({positionInfo, moreWorkers}){
    let newWorker;
    if(position === "Engineer") {
        newWorker = new Engineer(name, positionInfo, ID, email);
    } else if (position === "Intern") {
        newWorker = new Intern(name, positionInfo, ID, email);
    } else {
        newWorker = new Manager(name, positionInfo, ID, email);
    }
    
})

})
}