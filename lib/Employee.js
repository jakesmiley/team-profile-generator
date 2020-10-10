class Employee {

    //construct properties of employee
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = "Employee"
    }

    //name method
    getName() {
        return this.name;
    };

    //id method
    getId() {
        return this.id;
    };

    //email method
    getEmail() {
        return this.email;
    };

    //role method
    getRole() {
        return this.role;
    };
}

module.exports = Employee;