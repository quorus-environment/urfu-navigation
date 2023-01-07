import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { findPathOnFloor } from "./findPathOnFloor"
import { findPathsInSection } from "./findPathsInSection"
import {
  createLinkedListPathToDestination,
  unwrapLinkedList,
} from "./LinkedListProcessing"

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
    resultPath.push(...pathToLadder)
    const ladderOnCurrentFloor = resultPath[resultPath.length - 1]

    const ladderOnCurrentFloorGraph = graphRegistry.find(
      (gr) => gr.id === ladderOnCurrentFloor,
    )
    const huy = ladderOnCurrentFloorGraph?.neighbors
    const pizda: TGraph[] = []
    if (huy) {
      for (const id of huy) {
        const currentGraph = graphRegistry.find((gr) => gr.id === id)
        if (currentGraph) pizda.push(currentGraph)
      }
    }

    const ladderOnNextFloor = pizda.find(
      (gr) => gr.destination === GraphDestination.LADDER,
    )
    if (ladderOnNextFloor)
      resultPath.push(
        ...findPaths(ladderOnNextFloor.id, endGraphId, graphRegistry),
      )

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
