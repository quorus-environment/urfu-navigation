import "jest"
test("huy", () => {
  expect(
    (function () {
      return 1 + 1
    })(),
  ).toBe(2)
})
