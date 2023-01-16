import { Side } from "../../../shared/model/geometry"
import { TAuditorium } from "../../auditorium/model/interface"

export type TGraph = {
  id: string
  name?: string
  points: [number, number, number, number]
  direction: Side
  linkedAuditoriums?: TAuditorium["linkedAuditoriums"]
  height: number
  section: string
  floor: number
  destination: GraphDestination
  isFilled?: boolean
  neighbors?: string[]
  linkedSection?: string[]
}

export enum GraphDestination {
  CORRIDOR = "corridor",
  AUDITORIUM = "auditorium",
  TURN_OVER = "turnover",
  LADDER = "ladder",
  SECTION = "section-corridor",
  TOILET_WOMAN = "toilet_woman",
  TOILET_MAN = "toilet_man",
  FOODCORT = "food",
  OTHER = "other",
}
