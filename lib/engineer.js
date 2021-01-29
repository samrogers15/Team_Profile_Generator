// Write code to define the Engineer class that extends the Employee class and exports it

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        if (typeof gitHub !=="string" || !gitHub.trim().length) {
            throw new Error("Expected parameter 'gitHub' to be a string")
        }

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