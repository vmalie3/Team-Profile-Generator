const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should create an object that has these keys: name, id, email, officeNumber', () => {
        const createManager = new Manager('ron', '123', 'ron123@gmail.com', '4321');
        expect(createManager.name).toEqual('ron');
        expect(createManager.id).toEqual('123');
        expect(createManager.email).toEqual('ron123@gmail.com');
        expect(createManager.officeNumber).toEqual('4321');
    })
    describe('getOfficeNumber', () => {
        it('should return the manager\'s office number', () => {
            const newManager = new Manager('lisa', '234', 'lisa234@gmail.com','5432');
            expect(newManager.getOfficeNumber()).toEqual('5432');
        })
    })
    describe('getTitle', () => {
        it('should return the employee\'s title of manager', () => {
            const newManager = new Manager('lisa', '234', 'lisa234@gmail.com','5432');
            expect(newManager.getTitle()).toEqual('Manager');
        })
    })
})