import { Side } from "../../../shared/model/geometry"

export type TGraph = {
  id: string
  points: [number, number, number, number]
  direction: Side
  height: number
  section: string
  floor: number
  destination: GraphDestination
  isFilled?: boolean
  neighbors?: string[]
  linkedSection?: string
}

export enum GraphDestination {
  CORRIDOR = "corridor",
  AUDITORIUM = "auditorium",
  TURN_OVER = "turnover",
  LADDER = "ladder",
  SECTION = "section-corridor",
}
