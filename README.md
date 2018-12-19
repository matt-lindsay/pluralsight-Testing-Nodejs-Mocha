# pluralsight-Testing-Nodejs-Mocha

### Introduction

- Deep dive into Mocha
- Assertion and mocking frameworks
- Testing a real application

### Tesing your JavaScript

- Mocha
- Chai for asserts
- Sinon for mocking
- Then pull it all together
- Not everything is easy
- Istanbul for code coverage

Unit testing, not focusing on integration or functional testing.

Node changes fast, three month release cycle. How will we deal with that, as the course will date quickly?

#### Types of testing

- Unit test
- Integration test
- Functional test

Unit testing - Find the smallest available piece, then just test that. We'll mock everything else.

Integration testing - A function has to work in isolation, and within the wider context of the application. Interactions with other functions have to be tested. Outside resources need to be mocked.

Functional testing - start on the outside, end on the outside. Black box testing.

#### Node Versions

- Make use of nvm.

### Testing with Mocha

- Mocha is a test runner.
- `./node_modules/.bin/mocha` to execute tests in the test directory.
- `./node_modules/.bin/mocha "./test/**/*.spec.js"` to execute Mocha on the test directory and below.
- Add the above line to package.json's test script.
- `BDD` Behaviour Driven Development testing.
- Default timeout for a Mocha test is 2000 miliseconds.
- Mocha does not work well with ES6 arrow functions as you can't access the `this` keyword.
- Use `describe.only`and `it.only` to isolate tests.
- Use `describe.skip`and `it.skip` to ignore tests, incase they are broken. Better than commenting them out as when checking in the tests will have gone.
- `this.skip()` to ignore something environmental e.g. 
  ```
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
  ```
  - Mocha is a test runner


#### BDD Style Assertions

- Assert is clunky
- Chai is better for assertions
- Two options
  - expect
  - should
- Verifying Objects
- BDD is descriptive
- now going tp try using `expect`
- `expect(something).to.be`
- `expect(something).to.equal`
- Should is clear and natural language.
- something.should.be ..equal ..have
- `auth.shoube.be.true`
- chaijs.com/api/bdd
- 