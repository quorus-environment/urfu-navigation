import { Side } from "../../../shared/model/geometry"

export type TGraph = {
  points: [number, number]
  direction: Side
  isFilled?: boolean
  destination: GraphDestination
  height?: number
  neighbors?: TGraph[]
}

export enum GraphDestination {
  CORRIDOR = "corridor",
  AUDITORIUM = "auditorium",
  TURN_OVER = "turnover",
  LADDER = "ladder",
}
