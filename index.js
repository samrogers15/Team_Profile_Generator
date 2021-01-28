const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

function startApp() {
    buildTeamPage();
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
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script defer src= "../index.js"></script>
    </head>
    <body>
    
    <nav class="navbar navbar-dark bg-primary" style="padding:10px">
        <h1 class="navbar-text text-white mx-auto">Team Org Chart</h1>
    </nav>

    <div class="container mx-auto" style="margin: 10px">
        <div class="row">
    `;
    
    fs.writeFile('./dist/team-page.html', html, 'utf-8', function(error) {
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
            <div class="card mx-auto" style="margin: 5px;">
                <div class = "card-border-info mb-3" style="width:18rem">
                    <div class="card-header bg-primary mb-3 text-white">Name: ${name}
                        <div>Role: ${role}  <i class="fas fa-mug-hot"></i></div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
            `;
        } else if (role === 'Engineer') {
            const gitHub = newEmployee.getGitHub();
            card = `                    
            <div class="card mx-auto" style="margin: 5px;">
                <div class = "card-border-info mb-3" style="width:18rem">
                    <div class="card-header bg-primary mb-3 text-white">Name: ${name}
                        <div>Role: ${role}  <i class="fas fa-glasses"></i></div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">GitHub Account: ${gitHub}</li>
                    </ul>
                </div>
            </div>
            `;
        } else {
            const school = newEmployee.getSchool();
            card = `
            <div class="card mx-auto" style="margin: 5px;">
                <div class = "card-border-info mb-3" style="width:18rem">
                    <div class="card-header bg-primary mb-3 text-white">Name: ${name}
                        <div>Role: ${role}  <i class="fas fa-user-graduate"></i></div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
            `;
        }
        fs.appendFile('./dist/team-page.html', card, function(error) {
            if (error) {
                return reject(error);
            };
            return resolve();
        });
    })  
};

function endHTML() {
    const htmlEnd = `
    </div>
    </div>
    </body>
    </html>
    `;
    fs.appendFile('./dist/team-page.html', htmlEnd, function(error) {
        if (error) {
            console.log('There is an error in the endHTML function', error);
        }
    })
};

startApp();



// establish global consts (name, id, email, role)
// create a card let card = ''
// create if statements so that if role = manager, then make the card the manager card with all of the information on itand add the const speciic to manager
// else if role is engeineer, same thing,, with const that includes parameter specific to engineer
// then append the file
// then if error reject(error) return (resolve);


// then end html function that add sin the final html tags


// initiate the start(App) function