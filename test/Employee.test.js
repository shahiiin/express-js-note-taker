const { Employee } = require("../lib/Employee");

const employee = new Employee();

test("check getRole function", () => {
  expect(employee.getRole()).toBe("Employee");
});
