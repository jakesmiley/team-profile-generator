const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

//confirm role is set to manager
test ("Confirm getRole() returns Manager", () => {
    const employee = new Manager('Jessica', '666', 'test@testing.com', 'F150');
    expect(employee.getRole()).toBe("Manager");
});

//confirm office number is set
test ("Confirm getOfficeNumber() returns office number", () => {
    const employee = new Manager('Jessica', '666', 'test@testing.com', 'F150');
    expect(employee.getOfficeNumber()).toBe('F150');
});