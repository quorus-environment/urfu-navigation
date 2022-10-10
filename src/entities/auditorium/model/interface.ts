// Настройки аудитории
import { Side } from "../../../shared/model/geometry"

export type TAuditorium = {
  name: string
  height: number
  width: number
  coords: {
    x: number
    y: number
  }
  entry: Side
}
