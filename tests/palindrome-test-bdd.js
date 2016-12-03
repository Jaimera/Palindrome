var palindrome = require('../app/palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('Feature: see if a word is palindrome', function() {
  context('Scenario: error', function() {
    describe('When the user asks if avocado is a palindrome', function() {

      it('Then the user gets false', function() {
        expect(palindrome.verifyWord('avocado')).to.be.eql(false);
      });

    });
  });
});