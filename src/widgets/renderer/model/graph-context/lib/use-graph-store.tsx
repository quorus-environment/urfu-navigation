import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { TGraph } from "../../../../../entities/graph/model/interface"
import { TGraphStore } from "../model/interface"

/** Скорее всего дохера использовать будем, так что добавлю такую штуку*/
export const useGraphStore = create<TGraphStore>()(
  immer((set) => ({
    graph: [],
    coloredGraph: [],
    setGraphRegistry: (graph: TGraph[]) => set({ graph }),
    setColoredGraph: (coloredGraph: string[]) => set({ coloredGraph }),
  })),
)
