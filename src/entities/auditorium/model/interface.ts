// Настройки аудитории
import { Side, TCoords } from "../../../shared/model/geometry"
import { GraphDestination, SectionName } from "../../graph/model/interface"

export type TAuditorium = {
  id?: string
  name: string
  height: number
  width: number
  floor: number
  section: SectionName
  /** Только для лестниц */
  linkedAuditoriums?: { id: string; floor: number }[]
  coords: {
    x: number
    y: number
  }
  entry: Side
  neighbors: string[]
  destination: GraphDestination
  entryOffset?: number
  graphHeight?: number
}

export type TAuditoriumReborn = {
  id?: string
  //[[{x: 0, y: 0},{x: 0, y:4}], [{x: 0, y: 4},{x: 4, y:4}], [{x: 4, y: 4},{x: 4, y:0}], [{x: 4, y: 0},{x: 0, y:4}]]
  vectors: [TCoords, TCoords][]
  startPoint: TCoords
  entryPoint?: TCoords
  section: string
}

export type TSectionReborn = {
  auds: TAuditoriumReborn[]
  id: string
  corridor: [TCoords, TCoords][]
  floor: number
}
