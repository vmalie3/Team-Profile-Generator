//Manager: name, employee ID, email address, office number
//Engineer: name, ID, email, GitHub username
//Intern: name, ID, email, school

const initialQuestions = [
    {
        type: 'confirm',
        message: 'Would you like to begin building your team?',
        name: 'beginTeam',
    },
]

const questionsForAll = [
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
]

const managerQs = {
    type: 'input',
    message: 'What is the manager\'s office number?',
    name: 'officeNumber'
}

const employeeTitleQ = {
    type: 'rawlist',
    message: 'What is the employee\'s title?',
    name:'employeeTitle'
}

const engineerQs = {
    type: 'input',
    message: 'What is the engineer\'s GitHub username?',
    name: 'gitHub'
}

const internQs = {
    type: 'input',
    message: 'What school does this intern attend?',
    name: 'school'
}