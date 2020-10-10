const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

//test to make sure employee is created as an object, as we all know that's what employees are
test("creates an Employee object", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(typeof(employee)).toBe('object');
});

//test to make sure getName() returns name
test("confirm getName returns a name", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(employee.getName()).toBe(employee.name);
});

//test to make sure getId() returns an id
test("confirm getId returns an id", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(employee.getId()).toBe(employee.id);
});

//test to make sure getEmail() is returning email address
test("confirm getEmail returns email address", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(employee.getEmail()).toBe(employee.email);
});

//test to make sure getRole() is returning the role
test("confirm getRole returns a role", () => {
    const employee = new Employee('Jason', '7', 'test@testing.com');

    expect(employee.getRole()).toBe(employee.role);
});
