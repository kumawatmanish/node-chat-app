const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage' ,() => {
    it('shoult create Message Object', () =>{
        var from = 'Man';
        var text = 'Some message';

        var message = generateMessage(from, text);

        expect(typeof(message.createdAt)).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});