const { Manager } = require("../lib/Manager");

const manager = new Manager();

test("check getRole function", () => {
  expect(manager.getRole()).toBe("Manager");
});
