const { Employee } = require("./Employee");

//subClass(Engineer)
class Engineer extends Employee {
  //properties
  github;

  //constructor
  constructor(name, id, email, github) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  //methods
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = { Engineer };
