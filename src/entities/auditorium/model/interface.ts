// Настройки аудитории
import { Side } from "../../../shared/model/geometry"

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
  entryOffset?: number
}
