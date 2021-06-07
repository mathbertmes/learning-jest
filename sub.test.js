const { TestWatcher } = require("@jest/core");
const sub = require("./sub");

test("subtraindo 2 - 1 = 1", () => {
  expect(sub(2, 1)).toBe(1);
});
