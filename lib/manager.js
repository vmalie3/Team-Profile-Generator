// require the employee file to extend class

const Employee = require('./employee');

// extended employee class to include manager 

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getTitle() {
        return 'Manager';
    }
}

// exporting the manager class

module.exports = Manager;