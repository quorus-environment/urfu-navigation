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
  expect(findPaths("РИ-101", "turnover1to2", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "cor_2",
    "cor_3",
    "turnover1to2",
  ])
})

test("FindPathToOtherSection", () => {
  expect(findPaths("РИ-101", "РИ-109", graph)).toStrictEqual([
    "РИ-101",
    "cor_1",
    "cor_2",
    "cor_3",
    "turnover1to2",
    "turnover2to1",
    "РИ-109",
  ])
})

export type section = {
  sectionName: string
  graph: TGraph[]
}
