// Настройки аудитории
import { Side } from "../../../shared/model/geometry"
import { TGraph } from "../../graph/model/interface"

export type TAuditorium = {
  name: string
  height: number
  width: number
  floor: number
  section: number
  coords: {
    x: number
    y: number
  }
  entry: Side
  neighbors: string[]
}
