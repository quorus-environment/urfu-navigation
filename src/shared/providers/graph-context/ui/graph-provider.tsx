import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from "react"
import { TGraph } from "../../../../entities/graph/model/interface"
import { TGraphContext } from "../model/interface"

export const GraphContext = createContext<TGraphContext>({
  graph: [],
  registerGraph: () => void 0,
})

/**
 * Контекст со всеми графами в аудитории
 * @returns graphRegistry - массив всех графов
 * @returns registerGraph - колбек-регистратор графа в контексте
 * */
export const GraphProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [graphRegistry, setGraphRegistry] = useState<TGraph[]>([])
  const registerGraph = useCallback((graph: TGraph) => {
    setGraphRegistry([...graphRegistry, graph])
  }, [])

  return (
    <GraphContext.Provider
      value={{
        graph: graphRegistry,
        registerGraph,
      }}
    >
      {children}
    </GraphContext.Provider>
  )
}
