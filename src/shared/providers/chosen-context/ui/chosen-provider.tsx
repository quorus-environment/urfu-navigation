import React, { createContext, PropsWithChildren, useState } from "react"
import { TChosenContext } from "../model/interface"

export const ChosenContext = createContext<TChosenContext>({
  startId: "РИ-103",
  setStartId: () => void 0,
  endId: null,
  setEndId: () => void 0,
})

export const ChosenProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chosenId, setChosenId] = useState<string | null>("РИ-103")
  const [chosenSecondId, setChosenSecondId] = useState<string | null>(null)

  return (
    <ChosenContext.Provider
      value={{
        startId: chosenId,
        setStartId: setChosenId,
        endId: chosenSecondId,
        setEndId: setChosenSecondId,
      }}
    >
      {children}
    </ChosenContext.Provider>
  )
}
