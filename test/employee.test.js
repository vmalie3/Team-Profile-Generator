
const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an object that has these keys: name, id, email', () => {
        const createEmployee = new Employee('sam', '123', 'sam123@gmail.com');
        expect(createEmployee.name).toEqual('sam');
        expect(createEmployee.id).toEqual('123');
        expect(createEmployee.email).toEqual('sam123@gmail.com');
    })
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const newEmp = new Employee('erin', '234', 'erin234@gmail.com');
            expect(newEmp.getName()).toEqual('erin');
        })
    })
    describe('getId', () => {
        it('should return the ID of the employee', () => {
            const newEmp = new Employee('erin', '234', 'erin234@gmail.com');
            expect(newEmp.getId()).toEqual('234');
        })
    })
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const newEmp = new Employee('erin', '234', 'erin234@gmail.com');
            expect(newEmp.getEmail()).toEqual('erin234@gmail.com');
        })
    })
})

