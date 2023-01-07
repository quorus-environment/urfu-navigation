// Поиск пути внутри одной секции
import { TGraph } from "../../entities/graph/model/interface"
import { createLinkedListPath, unwrapLinkedList } from "./LinkedListProcessing"

export function findPathsInSection(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): string[] {
  const pathLinkedList = createLinkedListPath(
    startGraphId,
    endGraphId,
    graphRegistry,
  )
  return unwrapLinkedList(pathLinkedList)
}
