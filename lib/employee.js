// Write code to define the Employee constructor and export it

function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName() = function getName() {
        return this.name;
    };
    this.getID() = function getID() {
        return this.id;
    };
    this.getEmail() = function getEmail() {
        return this.email;
    };
    this.role() = function role() {
        return Employee;
    };
};

module.exports = Employee;