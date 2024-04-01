const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("sum(1) should equal 1", function () {
    expect(sum(1)).toEqual(1);
});

test("sum() should equal 0", function () {
    expect(sum()).toBe(0);
});