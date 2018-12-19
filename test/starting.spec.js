const assert = require('assert');
const should = require('chai').should();

describe('Basic Mocha Test', () => {
  it('Should deal with objects', () => {
    var obj = { name: 'Jon', gender: 'male' };
    var objB = { name: 'Jon', gender: 'male' };

    obj.should.deep.equal(objB);
  });

  it('Should allow testing nulls', function() {
    var iAmNull = null;
    should.not.exist(iAmNull);
    // iAmNull.should.not.exist;
  });
});