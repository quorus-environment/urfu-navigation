// Настройки аудитории
import { Side } from "../../../shared/model/geometry"
import { GraphDestination } from "../../graph/model/interface"

export type TAuditorium = {
  id?: string
  name: string
  height: number
  width: number
  floor: number
  section: string
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
}
