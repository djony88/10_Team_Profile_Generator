const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/manger");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

const worker = [];


function initTeamApp() {
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
    message: "Input worker's id.",
    name: "id"
},
{
    message: "Input worker's email address.",
    name: "email"
}])

.then(function({name, position, id, email}){
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
    message: "Would you like to add more workers?",
    choices: [
        "yes",
        "no"
    ],
    name: "additionalWorker"
}])

.then(function({positionInfo, additionalWorker}){
    let newWorker;
    if(position === "Engineer") {
        newWorker = new Engineer(name, positionInfo, id, email);
    } else if (position === "Intern") {
        newWorker = new Intern(name, positionInfo, id, email);
    } else {
        newWorker = new Manager(name, positionInfo, id, email);
    }
    worker.push(newWorker);
    addHTML(newWorker)
    .then(function() {
        if (additionalWorker === "yes") {
            addWorker();
        } else {
            finishHTML();
        }
    });
});

});
}

function createHTML() {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class = "navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team App</span>
        </nav>
        <div class = "container"> 
            <div class="row">`;
    fs.writeFile("./output/TeamApp.html", HTML, function(err) {
        if (err) {
            console.log(err);
        }
    });

    console.log("start");

}

function addHTML(worker) {
    return new Promise(function(resolve, reject) {
        const name = worker.getName();
        const position = worker.getPosition();
        const id = worker.getID();
        const email = worker.getEmail();
        let data = "";
        if (position === "Engineer") {
            const GitHub = worker.getGitHub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">Engineer<br /><br />${name}</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">GitHub: ${GitHub}</li>
            </ul>
            </div>
        </div>`
        } else if (position === "Intern") {
            const school = worker.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">Intern<br /><br />${name}</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = worker.officeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">Manager<br /><br />${name}</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Phone Number: ${officeNumber}</li>
            </ul>
            </div>
        </div>`
        }

        console.log("Adding worker.");
        fs.appendFile("./output/TeamApp.html", data, function(err){
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHTML() {
    const HTML = `</div>
    </div> 

    </body>
    </html>`

fs.appendFile("./output/TeamApp.html", HTML, function(err) {
    if(err) {
        console.log(err);
    };
});

console.log("end");

}

initTeamApp;
