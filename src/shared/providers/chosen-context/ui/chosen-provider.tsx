import React, { createContext, PropsWithChildren, useState } from "react"
import { TChosenContext } from "../model/interface"

export const ChosenContext = createContext<TChosenContext>({
  startId: null,
  setStartId: () => void 0,
  startName: null,
  setStartName: () => void 0,
  endId: null,
  setEndId: () => void 0,
  endName: null,
  setEndName: () => void 0,
  floor: 1,
  setFloor: () => void 0,
})

export const ChosenProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chosenId, setChosenId] = useState<string | null>("Вход")
  const [chosenName, setChosenName] = useState<string | null>("Вход")
  const [chosenSecondId, setChosenSecondId] = useState<string | null>(null)
  const [chosenSecondName, setChosenSecondName] = useState<string | null>(null)
  const [floor, setFloor] = useState<number>(1)

  return (
    <ChosenContext.Provider
      value={{
        startId: chosenId,
        setStartId: setChosenId,
        endId: chosenSecondId,
        setEndId: setChosenSecondId,
        startName: chosenName,
        setStartName: setChosenName,
        endName: chosenSecondName,
        setEndName: setChosenSecondName,
        floor,
        setFloor,
      }}
    >
      {children}
    </ChosenContext.Provider>
  )
}
