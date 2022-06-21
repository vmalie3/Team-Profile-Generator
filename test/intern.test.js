const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should create an object that has these keys: name, id, email, officeNumber', () => {
        const createIntern = new Intern('jess', '123', 'jess123@gmail.com', 'UNCC');
        expect(createIntern.name).toEqual('jess');
        expect(createIntern.id).toEqual('123');
        expect(createIntern.email).toEqual('jess123@gmail.com');
        expect(createIntern.school).toEqual('UNCC');
    })
    describe('getOfficeNumber', () => {
        it('should return the intern\'s school', () => {
            const newIntern = new Intern('ray', '234', 'ray234@gmail.com','NCSU');
            expect(newIntern.getSchool()).toEqual('NCSU');
        })
    })
    describe('getTitle', () => {
        it('should return the employee\'s title of Intern', () => {
            const newIntern = new Intern('ray', '234', 'ray234@gmail.com','NCSU');
            expect(newIntern.getTitle()).toEqual('Intern');
        })
    })
})