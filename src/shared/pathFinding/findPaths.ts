import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { findPathOnFloor } from "./findPathOnFloor"
import { findPathsInSection } from "./findPathsInSection"
import {
  createLinkedListPathToDestination,
  unwrapLinkedList,
} from "./LinkedListProcessing"
import { getGraphLength } from "../../entities/graph/lib/get-graph-length"

function getPathLength(graphRegistry: TGraph[], resultPath: string[]) {
  return resultPath.reduce(
    (a, b) => a + getGraphLength(graphRegistry.find((gr) => gr.id === b)),
    0,
  )
}

function getSecondPath(
  startGraph: TGraph | undefined,
  endGraphId: string,
  graphRegistry: TGraph[],
) {
  const secondResultPath: string[] = []
  // Ищем путь к лестнице, ближайшей к конечной аудитории
  const pathToSecondLadderInEndFloorLL = createLinkedListPathToDestination(
    endGraphId,
    GraphDestination.LADDER,
    graphRegistry,
  )
  const pathToSecondLadderInEndFloor = unwrapLinkedList(
    pathToSecondLadderInEndFloorLL,
  )
  if (pathToSecondLadderInEndFloor.length) {
    const ladderOnEndFloorId =
      pathToSecondLadderInEndFloor[pathToSecondLadderInEndFloor.length - 1]
    const ladderOnEndFloor = graphRegistry.find(
      (gr) => gr.id === ladderOnEndFloorId,
    )
    const ladderOnStartFloor = ladderOnEndFloor?.linkedAuditoriums?.find(
      (aud) => aud.floor === startGraph?.floor,
    )?.id

    const pathToSecondLadder = findPaths(
      startGraph?.id || "",
      ladderOnStartFloor || "",
      graphRegistry,
    )
    if (pathToSecondLadder) {
      secondResultPath.push(...pathToSecondLadder)
    }
  }
  return secondResultPath
}

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
    const firstResultPath: string[] = []

    // Ищем путь к первой от начальной аудитории лестницы
    const pathToFirstLadderLL = createLinkedListPathToDestination(
      startGraphId,
      GraphDestination.LADDER,
      graphRegistry,
    )
    const pathToFirstLadder = unwrapLinkedList(pathToFirstLadderLL)
    firstResultPath.push(...pathToFirstLadder)

    const results: { firstResultPath: string[]; secondResultPath: string[] } = {
      firstResultPath: [],
      secondResultPath: [],
    }
    let index = 0

    const secondResultPath = getSecondPath(
      startGraph,
      endGraphId,
      graphRegistry,
    )

    for (const resultPath of [firstResultPath, secondResultPath]) {
      if (index === 1 && secondResultPath.length === 0) {
        break
      }
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
        // тут возвращаем пустой массив потому что лестница не подходит
        return []
      }
      const nextLadder = graphRegistry.find((gr) => gr.id === nextLadderId)

      if (nextLadder?.id) {
        resultPath.push(...findPaths(nextLadder.id, endGraphId, graphRegistry))
      }
      results[index === 0 ? "firstResultPath" : "secondResultPath"] = resultPath
      index++
    }
    return getPathLength(graphRegistry, results.firstResultPath) >
      getPathLength(graphRegistry, results.secondResultPath) &&
      results.secondResultPath.length !== 0
      ? results.secondResultPath
      : results.firstResultPath
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
