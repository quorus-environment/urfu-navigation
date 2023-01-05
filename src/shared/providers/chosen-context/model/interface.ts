import React from "react"

export type TChosenContext = {
  startId: string | null
  setStartId: React.Dispatch<React.SetStateAction<string | null>>
  endId: string | null
  setEndId: React.Dispatch<React.SetStateAction<string | null>>
  floor: number
  setFloor: React.Dispatch<React.SetStateAction<number>>
}
