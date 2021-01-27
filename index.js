const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const inquire = require('inquirer');
const path = require('path');
const generateHTML = require('./src/generateHTML');

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