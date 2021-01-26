// Write code to define the Engineer class that extends Employee class and export it

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub = () => {
        return this.gitHub;
    }
    
    getRole = () => {
        return 'Engineer';
    }
};

module.exports = Engineer;