const assert = require('assert');

describe('Basic Mocha Test', () => {
  it('Should deal with objects', () => {
    var obj = { name: 'Jon', gender: 'male' };
    var objB = { name: 'Jon', gender: 'male' };

    obj.should.deep.equal(objB);
  });
});