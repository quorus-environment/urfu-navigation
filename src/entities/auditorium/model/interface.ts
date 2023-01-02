// Настройки аудитории
import { Side } from "../../../shared/model/geometry"
import { GraphDestination } from "../../graph/model/interface"

export type TAuditorium = {
  name: string
  height: number
  width: number
  floor: number
  section: string
  coords: {
    x: number
    y: number
  }
  entry: Side
  neighbors: string[]
  destination: GraphDestination
  entryOffset?: number
}
