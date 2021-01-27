const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const inquire = require('inquirer');
const path = require('path');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');

// build out original question for which team member you want to build, then .prompt of chosen team member's questions

// need an initiator function

function beginBuildingTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'additionalPerson',
            message: "Would you like to add an additional Employee? If yes, select employee type. If no, select 'Exit'",
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
    ])
}

const additionalPersonQuestion =[
    {
        type: 'list',
        name: 'additionalPerson',
        message: "Would you like to add an additional Employee? If yes, select employee type. If no, select 'Exit'",
        choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    },
]

const managerQuestions = [
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
]

const engineerQuestions = [
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
]

const internQuestions = [
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
]

async function startApp() {
    const answers = await inquirer.prompt(managerQuestions);
    const managerHTML = new Manager.buildHTML(answers)
}


// I think I need some type of export so that I can write the file to HTML when taking in all of the information from the prompted questions