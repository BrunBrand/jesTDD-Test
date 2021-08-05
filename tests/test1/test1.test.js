const test1 = require('./test1');

describe('first test', ()=>{
    it('should return expected sum',()=>{
        expect(test1.SumN(10,20)).toBe(30);

    })

    it('SumCB returns', ()=>{
        const callback = jest.fn();
        callback.mockReturnValue(1);

        expect(test1.SumCB(10,callback)).toBe(11);
    })
})