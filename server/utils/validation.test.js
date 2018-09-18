const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-String values', () => {
        var result = isRealString(76);
        expect(result).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var result = isRealString('   ');
        expect(result).toBe(false);
    });
    it('should allow Sting with non-spaces characters', () => {
        var result = isRealString('Ne ha');
        expect(result).toBe(true);
    });
});