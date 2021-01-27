const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const inquire = require('inquirer');
const path = require('path');
const inquirer = require('inquirer');

// build out original question for which team member you want to build, then .prompt of chosen team member's questions

// need an initiator function

const teamMembers = [];

function startApp() {
    beginBuildingTeam();
    buildTeamPage();
};


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
                buildTeamPage();
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
        // call renderNewEmployee (newEmployee);
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
        // call renderNewEmployee (newEmployee);
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
        // call renderNewEmployee (newEmployee);
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
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    
    <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">Team Org Chart</span>    
    </nav>

    <div class="container">
        <div class="row manager">
            <div class = "card" style="width: 25rem;"></div>
        </div>
        <div class="row engineer">
            <div class = "card" style="width: 25rem;"></div>
        </div>
        <div class="row intern">
            <div class = "card" style="width: 25rem;"></div>
        </div>
    </div>

    <script src= "../index.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    `;
    
    fs.writeFile('./dist/team-page.html', html, 'utf-8', (err) => {
        if (error) {
        console.log('There is an error in the writeFile :', err);
        }
    });
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
                <div class = "card" style="width: 25rem;">
                    <div class = "card-body">
                        <h2>Name: ${this.name}</h2>
                        <h3>Role: ${this.role}</h3>
                        <p>Id: ${this.id}</p>
                        <p>Email: ${this.email}</p>
                        <p>Office Number: ${this.officeNumber}</p>
                    </div>
                </div>
            `
        } else if (role === 'Engineer') {
            const gitHub = newEmployee.getGitHub();
            card = `
                <div class = "card" style="width: 25rem;">
                    <div class = "card-body">
                        <h2>Name: ${this.name}</h2>
                        <h3>Role: ${this.role}</h3>
                        <p>Id: ${this.id}</p>
                        <p>Email: ${this.email}</p>
                        <p>Office Number: ${this.gitHub}</p>
                    </div>
                </div>
            `
        } else {
            const school = newEmployee.getSchool();
            card = `
                <div class = "card" style="width: 25rem;">
                    <div class = "card-body">
                        <h2>Name: ${this.name}</h2>
                        <h3>Role: ${this.role}</h3>
                        <p>Id: ${this.id}</p>
                        <p>Email: ${this.email}</p>
                        <p>Office Number: ${this.school}</p>
                    </div>
                </div>
            `
        }
        // establish global consts (name, id, email, role)
        // create a card let card = ''
        // create if statements so that if role = manager, then make the card the manager card with all of the information on itand add the const speciic to manager
        // else if role is engeineer, same thing,, with const that includes parameter specific to engineer
        // then append the file
        // then if error reject(error) return (resolve);
    }
};

// then end html function that add sin the final html tags


// initiate the start(App) function