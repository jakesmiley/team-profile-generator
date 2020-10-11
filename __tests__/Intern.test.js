const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

//confirm school is set
test("Set school for Intern", () => {
    const employee = new Intern('Joshua', '21', 'test@testing.com', 'UofU');

    expect(employee.getSchool()).toBe("UofU");
});

//confirm Intern role
test("confirm that getRole() returns Intern", () => {
    const employee = new Intern('Joshua', '21', 'test@testing.com', 'UofU');

    expect(employee.getRole()).toBe("Intern");
});
