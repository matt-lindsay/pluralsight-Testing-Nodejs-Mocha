const assert = require('assert');
const authController = require('../../controllers/authController');

describe('AuthController', () => {
  describe('isAuthorized', () => {
    it('should return false if not authorized', () => {
      assert.equal(false, authController.isAuthorized(['user'], 'admin'));
    });
    it('should return true if authorized', () => {
      assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
    });

    describe('isAuthorizedAsync', () => {
      it('should return false if not authorized', (done) => {
        authController.isAuthorizedAsync(['user'], 'admin',
          (isAuth) => {
            assert.equal(false, isAuth);
            done();
          });
      });
    });
  });
});