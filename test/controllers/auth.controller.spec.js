const assert = require('assert');
const authController = require('../../controllers/authController');
const expect = require('chai').expect;

describe('AuthController', () => {
  beforeEach(function settingUpRoles() {
    console.log('running before each');
    authController.setRoles(['user']);
  });
  // beforeEach('this function is erroring intentionally.', function erroringFunction() {
  //   throw({ error: 'error' });
  // });
  describe('isAuthorized', () => {
    it('Should return false if not authorized', function () {
      var isAuth = authController.isAuthorized('admin');
      assert.equal(false, isAuth);
      expect(isAuth).to.be.true;
    });
    it('Should return true if authorized', function () {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });
    it('Should not allow a get if not authorised');
    it('Should allow a get if authorised');

    describe('isAuthorizedAsync', function () {
      it('Should return false if not authorized', function (done) {
        if (true) { // something environmental.
          this.skip();
        } else {
          authController.isAuthorizedAsync('admin',
          function (isAuth) {
            assert.equal(false, isAuth);
            done();
          });
        }
      });
    });
  });
});