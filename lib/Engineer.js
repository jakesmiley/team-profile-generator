const Employee = require('./Employee');

//extend off employee
class Engineer extends Employee {
    //construct engineer
    constructor(name, id, email, github) {
        super(name, id, email);
        super.role = 'Engineer';

        this.github = github;
    };

    //github method
    getGithub() {
        return this.github;
    };
}

module.exports = Engineer;