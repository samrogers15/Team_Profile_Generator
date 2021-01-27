// Write code to define the Employee class and export it

class Employee {
    constructor(name, id, email) {
        
        if (typeof name !=="string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a string")
        }
        
        if (typeof id !=="number" || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a number")
        }

        if (typeof email !=="string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a string")
        }
        
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName = () => {
        return this.name;
    }

    getId = () => {
        return this.id;
    }

    getEmail = () => {
        return this.email;
    }

    getRole = () => {
        return 'Employee';
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

module.exports = Employee;