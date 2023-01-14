import { TGraph } from "../model/interface"

export const getGraphLength = (graph: TGraph | undefined) => {
  if (!graph) {
    return 0
  }
  return Math.sqrt(
    (graph.points[1] - graph.points[0]) ** 2 +
      (graph.points[3] - graph.points[2]) ** 2,
  )
}
