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
};

module.exports = Intern;