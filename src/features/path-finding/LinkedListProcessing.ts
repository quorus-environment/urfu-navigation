// Поиск в ширину от графа с ID startGraphId до графа с ID endGraphId
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { LinkedList } from "../../shared/model/linked-list"
import { findPaths } from "./findPaths"

export function findPathToDestination(
  startGraph: TGraph,
  destination: GraphDestination,
  graphRegistry: TGraph[],
  condition: (graph: TGraph) => boolean = () => true,
) {
  const endGraphArr = graphRegistry.filter(
    (gr) => gr.destination === destination && condition?.(gr),
  )
  const paths = endGraphArr.map((gr) => ({
    floor: gr.floor,
    path: findPaths(startGraph.id, gr.id, graphRegistry),
  }))
  return paths
    .sort(
      (
        pathA: { path: string[]; floor: number },
        pathB: { path: string[]; floor: number },
      ) =>
        pathA.path.length - pathB.path.length / pathA.floor - startGraph.floor,
    )
    .map((path) => path.path)[0]
}

export function* createLinkedListPath(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): Generator<LinkedList<string> | undefined> {
  const queue: TGraph[] = []
  const visited = new Set() // Сет для посещенных графов
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraph = graphRegistry.find((gr) => gr.id === endGraphId)
  if (!startGraph) {
    return undefined
  }
  queue.push(startGraph)
  visited.add(startGraph)
  const tracks = new Map<string, LinkedList<string>>() // Словарь, связывающий айдишник со связанным списком
  const initLL = new LinkedList<string>(startGraphId) // Создаем голову связанного списка
  tracks.set(startGraph.id, initLL)
  while (queue.length !== 0) {
    const graph = queue.shift()
    // Добавляем всех соседей graph в очередь
    for (let i = 0; i < (graph?.neighbors?.length || 0); i++) {
      const neighborId = graph?.neighbors?.[i]
      const neighbor = graphRegistry.find((gr) => gr.id === neighborId)
      if (!neighbor || visited.has(neighbor.id)) continue
      queue.push(neighbor)
      visited.add(neighbor.id)
      if (graph) {
        const currentLL = new LinkedList<string>(
          neighbor.id,
          tracks.get(graph.id),
        )
        tracks.set(neighbor.id, currentLL)
      }
    }
  }
  // Если мы посетили конечный граф, то выводим генератор в виде связанного списка айдишников
  if (tracks.has(endGraph?.id || "")) {
    yield tracks.get(endGraph?.id || "")
  }
}

// Разворачиваем связанный лист в массив айдишников
export function unwrapLinkedList(
  linkedListPath: Generator<LinkedList<string> | undefined>,
): string[] {
  const iterationResult = linkedListPath.next()
  let currentPathPoint = iterationResult.value
  const path: string[] = []
  while (currentPathPoint) {
    path.push(currentPathPoint.value)
    currentPathPoint = currentPathPoint.head
  }
  return path.reverse()
}
