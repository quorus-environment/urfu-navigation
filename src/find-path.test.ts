import "jest"
import { TGraph } from "./entities/graph/model/interface"
test("huy", () => {
  expect(
    (function () {
      return 1 + 1
    })(),
  ).toBe(2)
})
export type section = {
  sectionName: string
  graph: TGraph[]
}
