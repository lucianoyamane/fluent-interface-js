var chai = require('chai'); 
var expect = chai.expect;

const { build } = require('../../src/app/lorem.ipsum.index');

describe("main test", function(){

    it('test lorem', function() {

        let result = build().lorem.text();

        expect('lorem').to.eql(result)
          
      })

      it('test lorem ipsum', function() {

        let result = build().lorem.ipsum.text();

        expect('lorem ipsum').to.eql(result)
          
      })

      it('test lorem ipsum dolor', function() {

        let result = build().lorem.ipsum.dolor.text();

        expect('lorem ipsum dolor').to.eql(result)
          
      })
});