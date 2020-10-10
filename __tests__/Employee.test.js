const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

//test to make sure employee is created as an object, as we all know that's what employees are
test("creates an Employee object", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(typeof(employee)).toBe('object');
});

