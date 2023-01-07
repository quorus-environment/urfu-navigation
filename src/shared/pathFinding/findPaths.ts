import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { findPathOnFloor } from "./findPathOnFloor"
import { findPathsInSection } from "./findPathsInSection"
import {
  createLinkedListPath,
  createLinkedListPathToDestination,
  unwrapLinkedList,
} from "./LinkedListProcessing"
import { auditoriumsConfig } from "../../pages/universities/config-irit-rtf"

// Поиск пути от startGraphId до endGraphId
export function findPaths(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): string[] {
  // Создаем входной и искомый графы
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraph = graphRegistry.find((gr) => gr.id === endGraphId)
  let resultPath: string[] = []
  // Будет поиск по этажам
  if (startGraph?.floor !== endGraph?.floor) {
    const pathToLadderLL = createLinkedListPathToDestination(
      startGraphId,
      GraphDestination.LADDER,
      graphRegistry,
    )
    const pathToLadder = unwrapLinkedList(pathToLadderLL)
    let nextLadder: TGraph | undefined
    resultPath.push(...pathToLadder)
    const ladderIdOnCurrentFloor = resultPath[resultPath.length - 1]
    for (const graph of graphRegistry) {
      const linkedAuditoriums = graph.linkedAuditoriums
      if (linkedAuditoriums) {
        for (const linkedAuditorium of linkedAuditoriums) {
          if (
            linkedAuditorium.id === ladderIdOnCurrentFloor &&
            endGraph &&
            linkedAuditorium.floor === endGraph.floor
          ) {
            nextLadder = graphRegistry.find(
              (gr) => gr.id === linkedAuditorium.id,
            )
          }
        }
      }
    }
    if (nextLadder?.id) {
      resultPath.push(...findPaths(nextLadder?.id, endGraphId, graphRegistry))
    }
    return resultPath
  }
  // Поиск по секциям
  if (
    startGraph?.section !== endGraph?.section &&
    startGraph?.section &&
    endGraph?.section
  ) {
    resultPath = findPathOnFloor(
      startGraph,
      endGraph,
      startGraphId,
      endGraphId,
      graphRegistry,
    )
    return resultPath
  }
  // Поиск пути в случае, если графы находятся в одной секции
  resultPath = findPathsInSection(startGraphId, endGraphId, graphRegistry)
  return resultPath
}
