// Write code to define the Manager constructor and export it



function Manager (name, id, email) {
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

module.exports = Manager;