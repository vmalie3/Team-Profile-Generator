// pulling the employee class from its file

const Employee = require('./employee');

// extending the employee class by adding intern

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getTitle() {
        return 'Intern';
    }
}

// exports the intern class to other files

module.exports = Intern;