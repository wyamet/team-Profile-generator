const Employee = require("./Employee");

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return super.getRole('Manager');
    }
}

module.exports = Manager;