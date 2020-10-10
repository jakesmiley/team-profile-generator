const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//make sure Github account is set
test("Confirm github account is set", () => {
    const employee = new Engineer('Jankies', '8', 'test@testing.com', 'realGitHub');

    expect(employee.github).toBe(employee.github);
});

//make sure role is Engineer
test("Confirm role is Engineer", () => {
    const employee = new Engineer('Jankies', '8', 'test@testing.com', 'realGitHub');

    expect(employee.getRole()).toBe("Engineer");
});

