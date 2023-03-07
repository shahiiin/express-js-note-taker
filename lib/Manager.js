const { Employee } = require("./Employee");

//subClass(Manager)
class Manager extends Employee {
  //properties
  officeNumber;
  email;

  //constructor
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  //methods
  getRole() {
    return "Manager";
  }
}
module.exports = { Manager };
