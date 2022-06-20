//Manager: name, employee ID, email address, office number
//Engineer: name, ID, email, GitHub username
//Intern: name, ID, email, school
const inquirer = require('inquirer');



const questions = [
    {
        type: 'rawlist',
        message: 'What is the employee\'s title?',
        name:'title',
        choices: ['Manager', 'Engineer', "Intern"]
    },
    {
        type: 'input',
        message: 'What is the employee\'s name?',
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Enter the employee\'s name before continuing.')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the employee\'s ID?',
        name: 'id',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Enter the employee\'s name before continuing.')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the employee\'s email?',
        name: 'email',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Enter the employee\'s name before continuing.')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'What school does this intern attend?',
        name: 'school'
    },
    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'addAnother'
    },
]

function addEmployee() {
    inquirer.prompt(questions)
    .then(data => {
        let {title, name, id, email, officeNumber, gitHub, school, addAnother} = data;

        if (addAnother) {
            addEmployee();
        } else {
            console.log('Your team has been successfully created!')
        }
    })
}
