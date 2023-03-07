const { Intern } = require("../lib/Intern");

const intern = new Intern();

test("check getRole function", () => {
  expect(intern.getRole()).toBe("Intern");
});
