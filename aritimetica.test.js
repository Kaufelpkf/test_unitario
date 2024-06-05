const {soma,sub,mult,div} = require('./aritimetica')

describe("Teste das operacoes de soma e subtracao do array [1,1,1,1,1]", ()=>{
    test("O valor da soma",()=>{
        expect(soma([1,1,1,1,1]))
        .toBe(5)

    })

    test("O valor da subtracao",()=>{
        expect(sub([1,1,1,1,1]))
        .toBe(-5)

    })
})