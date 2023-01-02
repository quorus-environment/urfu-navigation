import { TGraph } from "../../entities/graph/model/interface"
import { findPathOnFloor } from "./findPathOnFloor"
import { findPathsInSection } from "./findPathsInSection"

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
    return []
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
  console.log(resultPath)
  return resultPath
}
