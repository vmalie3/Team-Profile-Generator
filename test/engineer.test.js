const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should create an object that has these keys: name, id, email, github', () => {
        const createEngineer = new Engineer('gavin', '123', 'gavin123@gmail.com', 'gavin4');
        expect(createEngineer.name).toEqual('gavin');
        expect(createEngineer.id).toEqual('123');
        expect(createEngineer.email).toEqual('gavin123@gmail.com');
        expect(createEngineer.gitHub).toEqual('gavin4');
    })
    describe('getGitHub', () => {
        it('should return the engineer\'s git hub username', () => {
            const newEngineer = new Engineer('olivia', '234', 'olivia234@gmail.com','olivia5');
            expect(newEngineer.getGitHub()).toEqual('olivia5');
        })
    })
    describe('getTitle', () => {
        it('should return the employee\'s title of engineer', () => {
            const newEngineer = new Engineer('olivia', '234', 'olivia234@gmail.com','olivia5');
            expect(newEngineer.getTitle()).toEqual('Engineer');
        })
    })
})