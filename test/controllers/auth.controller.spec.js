const assert = require('assert');
const authController = require('../../controllers/authController');


describe('AuthController', () => {
  beforeEach(function settingUpRoles() {
    console.log('running before each');
    authController.setRoles(['user']);
  });
  beforeEach('this function is erroring intentionally.', function erroringFunction() {
    throw({ error: 'error' });
  });
  describe('isAuthorized', () => {
    it('Should return false if not authorized', function() {
      assert.equal(false, authController.isAuthorized('admin'));
    });
    it('Should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });

    describe('isAuthorizedAsync', function() {
      it('Should return false if not authorized', function(done) {
        authController.isAuthorizedAsync('admin',
          function(isAuth) {
            assert.equal(false, isAuth);
            done();
          });
      });
    });
  });
});