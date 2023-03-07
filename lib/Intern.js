const { Employee } = require("./Employee");

//subClass(Intern)
class Intern extends Employee {
  //properties
  school;

  //constructor
  constructor(name, id, email, school) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  //methods
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = { Intern };
