const Employee = require('./Employee');

class Manager extends Employee {
    //construct the properties of Manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        super.role = 'Manager';

        this.officeNumber = officeNumber;
    };

    //office number method
    getOfficeNumber() {
        return this.officeNumber;
    };
}

module.exports = Manager;
