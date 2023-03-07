const { Engineer } = require("../lib/Engineer");

const engineer = new Engineer();

test("check getRole function", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
