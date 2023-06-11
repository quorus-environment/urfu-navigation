import { TAuditoriumReborn } from "../../../../entities/auditorium/model/interface"

export type TChosenStore = {
  startId: string | null
  setStartId: (v: string | null) => void
  endId: string | null
  setEndId: (v: string | null) => void
  startName: string | null
  setStartName: (v: string | null) => void
  endName: string | null
  setEndName: (v: string | null) => void
  floor: number
  setFloor: (v: number) => void
  startAud?: any
  setStartAud: (v: any) => void
  endAud?: any
  setEndAud: (v: any) => void
}
