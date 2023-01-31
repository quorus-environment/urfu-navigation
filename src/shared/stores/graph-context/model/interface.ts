import { TGraph } from "../../../../entities/graph/model/interface"

export type TGraphStore = {
  graph: TGraph[]
  coloredGraph: string[]
  setGraphRegistry: (graph: TGraph[]) => void
  setColoredGraph: (ids: string[]) => void
}
