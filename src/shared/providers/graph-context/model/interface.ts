import { TGraph } from "../../../../entities/graph/model/interface"

export type TGraphContext = {
  graph: TGraph[]
  coloredGraph: string[]
  setGraphRegistry: (graph: TGraph[]) => void
  setColoredGraph: (ids: string[]) => void
}
