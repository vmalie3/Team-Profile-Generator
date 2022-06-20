
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer))
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const create = require('./pageCreate/createPage');

const teamArr = [];
const engineerArr = [];
const internArr = [];

const questions = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
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
        message: 'What is the manager\'s ID?',
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
        message: 'What is the manager\'s email?',
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
    type: 'loop',
    name: 'addEmployee',
    message: 'Do you want to add another employee to the team?',
    questions: [
        {
            type: 'rawlist',
            message: 'What is the employee\'s title?',
            name:'title',
            choices: ['Engineer', "Intern"]
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
            message: 'What is the engineer\'s GitHub username?',
            name: 'gitHub',
            when: (addEmployee) => addEmployee.title === 'Engineer'
        },
        {
            type: 'input',
            message: 'What school does this intern attend?',
            name: 'school',
            when: (addEmployee) => addEmployee.title === 'Intern'
        },
    ]}
]


function addEmployee() {
    inquirer.prompt(questions)
    .then(data => {

        let {name, id, email, officeNumber, addEmployee} = data;

        const manager = new Manager (name, id, email, officeNumber);
        teamArr.push(manager);
        const managerOb = manager;
        const employees = addEmployee;
        let newEmployee;

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].title === 'Engineer') {
                let {name, id, email, gitHub} = employees[i];
                newEmployee = new Engineer (name, id, email, gitHub);
                teamArr.push(newEmployee);
                engineerArr.push(newEmployee);
            } else if (employees[i].title === 'Intern') {
                let {name, id, email, school} = employees[i];
                newEmployee = new Intern (name, id, email, school);
                teamArr.push(newEmployee);
                internArr.push(newEmployee);
            }
        }
        
        create.createPage(teamArr);
        
        // console.log(teamArr);
        // console.log('-------');
        // console.log(teamArr.Engineer);
    })
}

addEmployee();