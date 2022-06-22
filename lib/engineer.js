// pulling the employee class from it's file

const Employee = require('./employee');

// extending the employee class to include engineer and some new functions within it

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getTitle() {
        return 'Engineer';
    }
}

// exporting the engineer class

module.exports = Engineer;