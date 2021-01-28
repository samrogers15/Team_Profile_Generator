const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

// need an initiator function

function startApp() {
    beginBuildingTeam();
};

const teamMembers = [];

function beginBuildingTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'additionalPerson',
            message: "Would you like to add an Employee to the team? If yes, select employee type. If no, select 'Finished' to build your html file.",
            choices: ['Manager', 'Engineer', 'Intern', 'Finished: Please build the team!']
        },
    ]).then ((response) => {
        switch (response.additionalPerson) {
            case 'Manager':
                return addManager();
            case 'Engineer':
                return addEngineer();
            case 'Intern':
                return addIntern();
            case 'Finished: Please build the team!':
                endHTML();
                return;
            default:
                return beginBuildingTeam();
        };
    });
};

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the team manager\'s id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email address?',
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
    ]).then ((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);
        renderNewEmployees(manager);
        beginBuildingTeam();
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the engineer\'s id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer\'s gitHub username?',
        },
    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.gitHub);
        teamMembers.push(engineer);
        renderNewEmployees(engineer);
        beginBuildingTeam();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the intern\'s id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern go to?',
        },  
    ]).then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(intern);
        renderNewEmployees(intern);
        beginBuildingTeam();
    });
};

function buildTeamPage() {
    // boilerplate code for overall page, then fswrite file that uses error handler, then function for generating cards for manager, engineer, and intern
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script defer src= "../index.js"></script>
    </head>
    <body>
        
        <nav class="navbar navbar-dark bg-primary">
            <span class="navbar-brand mb-0 h1">Team Org Chart</span>    
        </nav>
    
        <div class="container">
            <div class="row">
                <div class = "card manager" style="width: 25rem;">
                    <iframe src="./manager.html"></iframe>
                </div>
            </div>
            <div class="row">
                <div class = "card engineer" style="width: 25rem;">
                    <iframe src="./engineer.html"></iframe>
                </div>
            </div>
            <div class="row">
                <div class = "card intern" style="width: 25rem;">
                    <iframe src="./intern.html"></iframe>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    
    fs.writeFile('./dist/team-page-copy.html', html, 'utf-8', function(error) {
        if (error) {
        console.log('There is an error in the writeFile :', error);
        }
    })
};

function renderNewEmployees(newEmployee) {
    return new Promise(function(resolve, reject) {
        const name = newEmployee.getName();
        const id = newEmployee.getId();
        const email = newEmployee.getEmail();
        const role = newEmployee.getRole();
        let card = '';
        if(role === 'Manager') {
            const officeNumber = newEmployee.getOfficeNumber();
            card = `
                <div class = "card-body">
                    <h2>Name: ${name}</h2>
                    <h3>Role: ${role}</h3>
                    <p>Id: ${id}</p>
                    <p>Email: ${email}</p>
                    <p>Office Number: ${officeNumber}</p>
                </div>
            `;
            fs.appendFile('./dist/manager.html', card, function(error) {
                if (error) {
                    return reject(error);
                };
                return resolve();
            });
        } else if (role === 'Engineer') {
            const gitHub = newEmployee.getGitHub();
            card = `                    
                <div class = "card-body">
                    <h2 class = "card-title">Name: ${name}</h2>
                    <h3 class = "card-subtitle">Role: ${role}</h3>
                    <p class = "card-text">Id: ${id}</p>
                    <p class = "card-text">Email: ${email}</p>
                    <p class = "card-text">Office Number: ${gitHub}</p>
                </div>
            `;
            fs.appendFile('./dist/engineer.html', card, function(error) {
                if (error) {
                    return reject(error);
                };
                return resolve();
            });
        } else {
            const school = newEmployee.getSchool();
            card = `
                <div class = "card-body">
                    <h2>Name: ${name}</h2>
                    <h3>Role: ${role}</h3>
                    <p>Id: ${id}</p>
                    <p>Email: ${email}</p>
                    <p>Office Number: ${school}</p>
                </div>
            `;
            fs.appendFile('./dist/intern.html', card, function(error) {
                if (error) {
                    return reject(error);
                };
                return resolve();
            });
        };
    });
};

function endHTML() {
    buildTeamPage();
};

startApp();