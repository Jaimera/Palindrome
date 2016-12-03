var chai = require('chai');
var expect = chai.expect;
var palindrome = require('../app/palindrome');

describe('palindrome', function() {
  it('verifyWord() should return false if the param is empty', function() {
    expect(palindrome.verifyWord('')).to.equal(false);
  });
});

describe('palindrome', function() {
  it('verifyWord() should return false if the param is jaime', function() {
    expect(palindrome.verifyWord('jaime')).to.equal(false);
  });
});

describe('palindrome', function() {
  it('verifyWord() should return true if the param is ABA', function() {
    expect(palindrome.verifyWord('ABA')).to.equal(true);
  });
});

describe('palindrome', function() {
  it('verifyWord() should return false if the param is MACACO', function() {
    expect(palindrome.verifyWord('MACACO')).to.equal(false);
  });
});

describe('palindrome', function() {
  it('verifyWord() should return false if the param is A MAN A PLAN A CANAL PANAMA', function() {
    expect(palindrome.verifyWord('A MAN A PLAN A CANAL PANAMA')).to.equal(true);
  });
});