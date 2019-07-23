import {checkIsTeens, convertToHundredAsText, covertTwoDigitsToNonTeensAsText, convertToText } from './functions.js';


describe('Two digit tests', ()=>{
    it('Should convert two digit number to text teen equiv', () => {
        expect(checkIsTeens(13)).toEqual("Thirteen")
     });
     
     it('Should turn a non-teen two digit number to tens eviv', () => {
         expect(covertTwoDigitsToNonTeensAsText(67)).toEqual('Sixty Seven')
     });
     
})


describe('Three digit tests', ()=>{
    it('Should take a 3 digit number and return text hundred equiv', () => {
        expect(convertToHundredAsText(543)).toEqual('Five Hundred')
    });    
})
  

it('Should convert a number to text', () => {
    expect(convertToText(924)).toEqual("Nine Hundred Twenty Four")
    expect(convertToText(156)).toEqual("One Hundred Fifty Six")
    expect(convertToText(23)).toEqual("Twenty Three")
})



