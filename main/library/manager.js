const Employee = require("../library/employee");
// Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
