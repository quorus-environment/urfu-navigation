import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

export const auditoriumsConfig: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-105"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-106", "cor_2"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_2", "РИ-107", "cor_3"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-104",
    height: 200,
    width: 150,
    coords: { x: 800, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_3", "РИ-108", "turnover1_0"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-101"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-102", "cor_2"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_2", "РИ-103", "cor_3"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_3", "РИ-104", "turnover1_0"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec1",
  },
  {
    name: "РИ-109",
    height: 100,
    width: 150,
    coords: { x: 950, y: 550 },
    entry: Side.RIGHT,
    neighbors: ["turnover2_0", "РИ-110", "cor_4"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-110",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 550 },
    entry: Side.LEFT,
    neighbors: ["turnover2_0", "РИ-109", "cor_4"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-111",
    height: 100,
    width: 150,
    coords: { x: 950, y: 650 },
    entry: Side.RIGHT,
    neighbors: ["cor_4", "РИ-112", "cor_5"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-112",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 650 },
    entry: Side.LEFT,
    neighbors: ["cor_4", "РИ-111", "cor_5"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-113",
    height: 100,
    width: 150,
    coords: { x: 950, y: 750 },
    entry: Side.RIGHT,
    neighbors: ["cor_5", "РИ-113"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-114",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 750 },
    entry: Side.LEFT,
    neighbors: ["cor_5", "РИ-113"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec2",
  },
  {
    name: "РИ-115",
    height: 100,
    width: 150,
    coords: { x: 950, y: 300 },
    entry: Side.RIGHT,
    neighbors: ["turnover3_0", "РИ-116", "cor_6"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec3",
  },
  {
    name: "РИ-116",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 300 },
    entry: Side.LEFT,
    neighbors: ["turnover3_0", "РИ-115", "cor_6"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec3",
  },
  {
    name: "РИ-117",
    height: 100,
    width: 150,
    coords: { x: 950, y: 200 },
    entry: Side.RIGHT,
    neighbors: ["cor_6", "РИ-118"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec3",
  },
  {
    name: "РИ-118",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 200 },
    entry: Side.LEFT,
    neighbors: ["cor_6", "РИ-117"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec3",
  },

  {
    name: "РИ-131",
    height: 100,
    width: 150,
    coords: { x: 950, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["turnover4_0", "РИ-130"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec4",
  },
  {
    name: "РИ-130",
    height: 100,
    width: 150,
    coords: { x: 1150, y: 1000 },
    entry: Side.LEFT,
    neighbors: ["turnover4_0", "РИ-131"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "sec4",
  },
]

export const neighborsGraph: TGraph[] = [
  {
    id: "turnover1_0",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-108", "cor_3", "РИ-104"],
    direction: Side.RIGHT,
    points: [875, 475, 1125, 475],
    section: "sec1",
    isFilled: true,
    floor: 1,
    linkedSection: ["sec2", "sec3"],
  },

  {
    id: "turnover2_0",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-109", "РИ-110", "cor_4"],
    direction: Side.RIGHT,
    points: [1125, 600, 1125, 475],
    section: "sec2",
    floor: 1,
    linkedSection: ["sec1", "sec3"],
  },
  {
    id: "turnover2_1",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-113", "РИ-114", "cor_5"],
    direction: Side.RIGHT,
    points: [1125, 800, 1125, 925],
    section: "sec2",
    floor: 1,
    linkedSection: ["sec4"],
  },

  {
    id: "turnover3_0",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-115", "РИ-116", "cor_6"],
    direction: Side.RIGHT,
    points: [1125, 350, 1125, 475],
    section: "sec3",
    floor: 1,
    linkedSection: ["sec1", "sec2"],
  },

  {
    id: "turnover4_0",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-130", "РИ-131"],
    direction: Side.RIGHT,
    points: [1125, 1050, 1125, 925],
    section: "sec4",
    floor: 1,
    linkedSection: ["sec2"],
  },
  {
    id: "cor_1",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-102", "РИ-101", "РИ-105", "РИ-106", "cor_2"],
    direction: Side.RIGHT,
    points: [425, 475, 575, 475],
    section: "sec1",
    floor: 1,
  },
  {
    id: "cor_2",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-103", "РИ-102", "РИ-107", "РИ-106", "cor_1", "cor_3"],
    direction: Side.RIGHT,
    points: [575, 475, 725, 475],
    section: "sec1",
    floor: 1,
  },
  {
    id: "cor_3",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-108", "РИ-103", "РИ-107", "РИ-104", "cor_2", "turnover1_0"],
    direction: Side.RIGHT,
    points: [725, 475, 875, 475],
    section: "sec1",
    floor: 1,
  },
  {
    id: "cor_4",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-110", "РИ-109", "РИ-111", "РИ-112", "turnover2_0", "cor_5"],
    direction: Side.RIGHT,
    points: [1125, 600, 1125, 700],
    section: "sec2",
    floor: 1,
  },
  {
    id: "cor_5",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-113", "РИ-114", "РИ-111", "РИ-112", "cor_4", "turnover2_1"],
    direction: Side.RIGHT,
    points: [1125, 700, 1125, 800],
    section: "sec2",
    floor: 1,
  },
  {
    id: "cor_6",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-115", "РИ-116", "РИ-117", "РИ-118", "turnover3_0"],
    direction: Side.RIGHT,
    points: [1125, 350, 1125, 250],
    section: "sec3",
    floor: 1,
  },
]

// Массив графов секций
export const sectionsGraph: TGraph[] = [
  {
    id: "sec1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec2", "sec3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec1",
    floor: 1,
  },
  {
    id: "sec2",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec1", "sec3", "sec4"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec2",
    floor: 1,
  },
  {
    id: "sec3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec1", "sec2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec3",
    floor: 1,
  },
  {
    id: "sec4",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec4",
    floor: 1,
  },
]
