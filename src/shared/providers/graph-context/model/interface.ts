import { TGraph } from "../../../../entities/graph/model/interface"

export type TGraphContext = {
  graph: TGraph[]
  setGraphRegistry: (graph: TGraph[]) => void
}
