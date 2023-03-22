import { Side } from "../../../shared/model/geometry"
import { TAuditorium } from "../../auditorium/model/interface"

export type TGraph = {
  id: string
  name?: string
  points: [number, number, number, number]
  direction: Side
  linkedAuditoriums?: TAuditorium["linkedAuditoriums"]
  height: number
  section: SectionName
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
  FOOD_CORT = "food",
  OTHER = "other",
}

export enum SectionName {
  LEFT_WING1 = "leftWing1",
  RIGHT_WING1 = "rightWing1",
  MAIN_SECTION1 = "mainSection1",
  LEFT_WING2 = "leftWing2",
  RIGHT_WING2 = "rightWing2",
  MAIN_SECTION2 = "mainSection2",
  LEFT_WING3 = "leftWing3",
  RIGHT_WING3 = "rightWing3",
  MAIN_SECTION3 = "mainSection3",
  LEFT_WING4 = "leftWing4",
  RIGHT_WING4 = "rightWing4",
  MAIN_SECTION4 = "mainSection4",
}
