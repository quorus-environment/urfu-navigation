import React, { createContext, PropsWithChildren, useState } from "react"
import { TGraph } from "../../../../entities/graph/model/interface"
import { TGraphContext } from "../model/interface"

export const GraphContext = createContext<TGraphContext>({
  graph: [] as TGraph[],
  setGraphRegistry: () => void 0,
})

/**
 * Контекст со всеми графами в аудитории
 * @returns graphRegistry - массив всех графов
 * @returns registerGraph - колбек-регистратор графа в контексте
 * */
export const GraphProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [graphRegistry, setGraphRegistry] = useState<TGraph[]>([])

  return (
    <GraphContext.Provider
      value={{
        graph: graphRegistry,
        setGraphRegistry,
      }}
    >
      {children}
    </GraphContext.Provider>
  )
}
