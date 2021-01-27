const inquirer = require('inquirer');

class App {
    start() {
        console.log('Thanks for using our app, please answer prompts below to get your auto generated Website');
        this.promptEmployee('Manager');
    }

    promptEmployee(type) {
        console.log('prompting for Employee type: ', type);
        inquirer.prompt([
            {
                type: 'list',
                name: 'ans',
                choices: ['Engineer', 'Intern', 'Exit'],         
                message: 'Do you want another one?',
            }
        ]).then(answers => {
            if(answers.ans === 'Exit') {
                return this.end();
            } else {
                this.promptEmployee(answers.ans);
            }
        })
    }

    end() {
        console.log('goodbye, your app will be stored in some folder');
    }
}

