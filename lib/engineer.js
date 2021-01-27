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

    buildHTML() {
        return `
        <div class = "employee-card card">
            <h1>Name: ${this.name}</h1>
            <h2>Role: ${this.getRole}</h2>
            <h2>Id: ${this.id}</h2>
            <h3>Email: ${this.email}</h3>
            ${
                (this.gitHub && `<h3>GitHub: ${this.gitHub}</h3>`) ||
                (this.officeNumber && `<h3>Office Number: ${this.officeNumber}`) ||
                (this.school && `<h3>School: ${this.school}`)
            }
        </div>
        `;
    }
};

module.exports = Engineer;