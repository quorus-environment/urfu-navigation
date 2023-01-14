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

    // лучше по ссылочкам поискать чем для каждого вложенную логику делать,
    // ищем лестницу на текущем этаже и итоговом по всему графу
    const ladderOnCurrentFloor = graphRegistry.find(
      (gr) => gr.id === resultPath[resultPath.length - 1],
    )
    // если не нашлась лестница на текущем этаже значит какая то херня испоганила айдишник
    if (!ladderOnCurrentFloor) {
      return []
    }
    // некст лестница
    const nextLadderId = ladderOnCurrentFloor?.linkedAuditoriums?.find(
      (ladder) => ladder.floor === endGraph?.floor,
    )?.id
    if (!nextLadderId) {
      // тут надо искать новую лестницу если нет соответствующей текущей
      return []
    }
    const nextLadder = graphRegistry.find((gr) => gr.id === nextLadderId)

    if (nextLadder?.id) {
      resultPath.push(...findPaths(nextLadder.id, endGraphId, graphRegistry))
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
