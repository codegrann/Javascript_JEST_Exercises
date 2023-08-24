// const helloWorld = require('./helloWorld');
// import helloWorld from "./helloWorld";

describe("Hello World", function () {
  import helloWorld from "./helloWorld";
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});
