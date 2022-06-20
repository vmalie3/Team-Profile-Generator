const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an object that has a key name', () => {
        const createEmployee = new Employee('sam','123','sam123@gmail.com');
        expect(createEmployee.name).toEqual('sam');
    })
})