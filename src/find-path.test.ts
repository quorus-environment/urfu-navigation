import "jest"
import { TGraph } from "./entities/graph/model/interface"
import { findPaths } from "./find-path"
import { getGraphsFromAuditoriums } from "./entities/auditorium/lib/get-graphs-from-auditoriums"
import {
  auditoriumsConfig,
  neighborsGraph,
  sectionsGraph,
} from "./pages/universities/config"

const graph = [
  ...neighborsGraph,
  ...getGraphsFromAuditoriums(auditoriumsConfig),
  ...sectionsGraph,
]

test("FindPathInSectionWithoutCoridor", () => {
  expect(findPaths("РИ-101", "РИ-105", graph)).toStrictEqual([
    "РИ-101",
    "РИ-105",
  ])
})

test("FindPathInSectionWithOneCoridor", () => {
  expect(findPaths("РИ-101", "РИ-106", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "РИ-106",
  ])
})

test("FindPathInSectionWithManyCoridors", () => {
  expect(findPaths("РИ-101", "РИ-108", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "cor_2",
    "cor_3",
    "РИ-108",
  ])
})

test("FindPathInSectionToTurnOver", () => {
  expect(findPaths("РИ-101", "turnover1_0", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "cor_2",
    "cor_3",
    "turnover1_0",
  ])
})

test("FindPathToOtherSection", () => {
  expect(findPaths("РИ-101", "РИ-109", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "cor_2",
    "cor_3",
    "turnover1_0",
    "turnover2_0",
    "РИ-109",
  ])
})

test("FindPathToOtherSection2", () => {
  expect(findPaths("РИ-103", "РИ-115", graph)).toStrictEqual([
    "РИ-103",
    "cor_3",
    "turnover1_0",
    "turnover3_0",
    "РИ-115",
  ])
})

test("FindPathThroughSection", () => {
  expect(findPaths("РИ-103", "РИ-130", graph)).toStrictEqual([
    "РИ-103",
    "cor_3",
    "turnover1_0",
    "turnover2_0",
    "cor_4",
    "cor_5",
    "turnover2_1",
    "turnover4_0",
    "РИ-130",
  ])
})

export type section = {
  sectionName: string
  graph: TGraph[]
}
