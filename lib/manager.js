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
};

module.exports = Manager;