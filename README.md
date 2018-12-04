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