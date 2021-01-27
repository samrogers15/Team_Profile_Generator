// Write code to define the Manager class that extends the Employee class and exports it

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (typeof officeNumber !=="number" || isNaN(officeNumber)) {
            throw new Error("Expected parameter 'officeNumber' to be a number")
        }
        
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => {
        return this.officeNumber;
    }

    getRole = () => {
        return "Manager";
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

module.exports = Manager;