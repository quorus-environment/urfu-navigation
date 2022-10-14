import { TGraph } from "../../../../entities/graph/model/interface"

export type TGraphContext = {
  graph: TGraph[]
  registerGraph: (graph: TGraph) => void
}
