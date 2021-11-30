var chai = require('chai'); 
var expect = chai.expect;

const { newText, inParentheses } = require('../../src/app/');

describe("main test", function(){

    it('test lorem', function() {

        let result = newText().lorem.text();

        expect('lorem').to.eql(result)
          
      })

      it('test lorem ipsum', function() {

        let result = newText().lorem.ipsum.text();

        expect('lorem ipsum').to.eql(result)
          
      })

      it('test lorem ipsum dolor', function() {

        let result = newText().lorem.ipsum.dolor.text();

        expect('lorem ipsum dolor').to.eql(result)
          
      })

      it('test lorem ipsum dolor sit', function() {

        let result = newText().lorem.ipsum.dolor.sit.text();

        expect('lorem ipsum dolor sit').to.eql(result)
          
      })

      it('test lorem ipsum dolor sit amet', function() {

        let result = newText().lorem.ipsum.dolor.sit.amet.text();

        expect('lorem ipsum dolor sit amet').to.eql(result)
          
      })

      it('test inParentheses', function() {

        let result = inParentheses(newText().lorem.ipsum.dolor.sit.amet).text();

        expect('(lorem ipsum dolor sit amet)').to.eql(result)
          
      })
});