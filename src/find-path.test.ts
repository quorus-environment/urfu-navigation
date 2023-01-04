import "jest"
import { GraphDestination, TGraph } from "./entities/graph/model/interface"
import { findPaths2 } from "./test"
import { getGraphsFromAuditoriums } from "./entities/auditorium/lib/get-graphs-from-auditoriums"
import {
  auditoriumsConfig,
  neighborsGraph,
  configSectionsGraph,
} from "./pages/universities/config-irit-rtf"
import { findPaths } from "./shared/pathFinding/findPaths"

const graph = [
  ...neighborsGraph,
  ...getGraphsFromAuditoriums(auditoriumsConfig),
  ...configSectionsGraph,
]

test("FindPathInSectionWithoutCoridor", () => {
  expect(findPaths("РИ-107", "РИ-104", graph)).toStrictEqual([
    "РИ-107",
    "РИ-104",
  ])
})

test("FindPathInSectionWithOneCoridor", () => {
  expect(findPaths("РИ-107", "РИ-106", graph)).toStrictEqual([
    "РИ-107",
    "Коридор РИ-107",
    "РИ-106",
  ])
})

test("FindPathInSectionWithManyCoridors", () => {
  expect(findPaths("РИ-107", "РИ-120", graph)).toStrictEqual([
    "РИ-107",
    "Коридор РИ-107",
    "Коридор РИ-109",
    "Коридор РИ-111",
    "Коридор РИ-108",
    "Коридор РИ-113",
    "Коридор РИ-115",
    "Коридор РИ-112",
    "Коридор РИ-117",
    "Коридор РИ-114",
    "Коридор РИ-119",
    "Коридор РИ-116",
    "Коридор РИ-118",
    "Коридор РИ-121",
    "РИ-120",
  ])
})

test("FindPathInSectionToTurnOver", () => {
  expect(findPaths("РИ-101", "turnoverLeftToMain", graph)).toStrictEqual([
    "РИ-101",
    "Коридор РИ-101",
    "Коридор Лестница",
    "Коридор РИ-103",
    "Коридор РИ-102",
    "Коридор РИ-105",
    "Коридор РИ-107",
    "Коридор РИ-109",
    "Коридор РИ-111",
    "Коридор РИ-108",
    "Коридор РИ-113",
    "Коридор РИ-115",
    "Коридор РИ-112",
    "Коридор РИ-117",
    "Коридор РИ-114",
    "Коридор РИ-119",
    "Коридор РИ-116",
    "Коридор РИ-118",
    "Коридор РИ-121",
    "Коридор РИ-120",
    "Коридор РИ-123",
    "Коридор РИ-122",
    "Коридор РИ-125",
    "turnoverLeftToMain",
  ])
})

test("FindPathToOtherSection", () => {
  expect(findPaths("РИ-125", "РИ-127а", graph)).toStrictEqual([
    "РИ-125",
    "Коридор РИ-125",
    "turnoverLeftToMain",
    "turnoverMainToLeft",
    "Коридор РИ-127",
    "Коридор РИ-127а",
    "РИ-127а",
  ])
})

test("FindPathToOtherSection2", () => {
  expect(findPaths("Вход", "РИ-140", graph)).toStrictEqual([
    "Вход",
    "Коридор вход наверх",
    "Коридор гардероб направо",
    "Коридор Лестница Справа",
    "turnoverMainToRight",
    "turnoverRightToMain",
    "Коридор РИ-137",
    "Коридор РИ-140",
    "РИ-140",
  ])
})

test("FindPathThroughSection", () => {
  expect(findPaths("РИ-125", "РИ-140", graph)).toStrictEqual([
    "РИ-125",
    "Коридор РИ-125",
    "turnoverLeftToMain",
    "turnoverMainToLeft",
    "Коридор РадиоТочка",
    "Коридор РИ-124а",
    "Коридор С/у",
    "Коридор Буфет",
    "Коридор Лестница Слева",
    "Коридор гардероб налево",
    "Коридор гардероб направо",
    "Коридор Лестница Справа",
    "turnoverMainToRight",
    "turnoverRightToMain",
    "Коридор РИ-137",
    "Коридор РИ-140",
    "РИ-140",
  ])
})

test("test", () => {
  expect(findPaths2("РИ-103", GraphDestination.LADDER, graph)).toStrictEqual([
    "РИ-103",
    "Коридор Лестница",
    "Лестница",
  ])
})

test("FindPathToGraphOnDifferentFloor", () => {
  expect(findPaths("РИ-103", "РИ-203", graph)).toStrictEqual([
    "РИ-103",
    "Коридор Лестница",
    "Лестница",
    "Лестница 2 этаж",
    "Коридор Лестница 2 этаж",
    "РИ-203",
  ])
})

// test("test", () => {
//   expect(findPaths2("РИ-111", GraphDestination.LADDER, graph)).toStrictEqual([
//     "РИ-111",
//     "Коридор РИ-109",
//     "Коридор РИ-107",
//     "Коридор РИ-105",
//     "Коридор РИ-102",
//     "Коридор РИ-103",
//     "Коридор Лестница",
//     "Лестница",
//   ])
// })

// test("FindPathThroughSectionWithTwoTurnoversInSection", () => {
//   expect(findPaths("РИ-130", "РИ-101", graph)).toStrictEqual([
//     "РИ-130",
//     "turnover4_0",
//     "turnover2_1",
//     "cor_5",
//     "cor_4",
//     "turnover2_0",
//     "turnover1_0",
//     "cor_3",
//     "cor_2",
//     "cor_1",
//     "РИ-101",
//   ])
// })

export type section = {
  sectionName: string
  graph: TGraph[]
}
