// Write code to define the Intern class that extends the Employee class and exports it

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (typeof school !=="string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a string")
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool = () => {
        return this.school;
    }
    
    getRole = () => {
        return 'Intern';
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

module.exports = Intern;