const { expect } = require("chai");
const { add, sub, mul, div } = require("../calculator");


function check(testName, actualFn, expected) {
  const actual = actualFn();
  try {
    expect(actual).to.equal(expected);
    console.log(` PASS: ${testName} | expected ${expected}, got ${actual}`);
  } catch (err) {
    console.log(`FAIL: ${testName} | expected ${expected}, got ${actual}`);
    throw err; // mocha showing the fail in summary
  }
}

describe("Calculator Test Cases", () => {

  it("add(5,2) expected 7 - PASS", () => {
    check("add(5,2)", () => add(5, 2), 7);
  });

  it("add(5,2) expected 8 - FAIL", () => {
    check("add(5,2)", () => add(5, 2), 8);
  });

  it("sub(5,2) expected 3 - PASS", () => {
    check("sub(5,2)", () => sub(5, 2), 3);
  });

  it("sub(5,2) expected 5 - FAIL", () => {
    check("sub(5,2)", () => sub(5, 2), 5);
  });

  it("mul(5,2) expected 10 - PASS", () => {
    check("mul(5,2)", () => mul(5, 2), 10);
  });

  it("mul(5,2) expected 12 - FAIL", () => {
    check("mul(5,2)", () => mul(5, 2), 12);
  });

  it("div(10,2) expected 5 - PASS", () => {
    check("div(10,2)", () => div(10, 2), 5);
  });

  it("div(10,2) expected 2 - FAIL", () => {
    check("div(10,2)", () => div(10, 2), 2);
  });

});
