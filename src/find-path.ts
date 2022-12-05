import { Queue } from "queue-typescript"
import { TGraph } from "./entities/graph/model/interface"
import { LinkedList } from "./shared/model/linked-list"

// Поиск в ширину от графа startGraph до графа endGraph
function* createLinkedListPath(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): Generator<LinkedList<string> | undefined> {
  const queue = new Queue<TGraph>()
  const visited = new Set() // Сет для посещеных графов
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraph = graphRegistry.find((gr) => gr.id === endGraphId)
  console.log(startGraph, endGraph)
  if (!startGraph) {
    return undefined
  }
  queue.enqueue(startGraph)
  visited.add(startGraph)
  const tracks = new Map<string, LinkedList<string>>() // Словарь, связывающий айдишник со связанным списком
  const initLL = new LinkedList<string>(startGraphId) // Создаем голову связанного списка
  tracks.set(startGraph.id, initLL)
  while (queue.length != 0) {
    const graph = queue.dequeue()
    // Добавляем всех соседедей graph в очередь
    for (let i = 0; i < (graph.neighbors?.length || 0); i++) {
      const neighborId = graph.neighbors?.[i]
      const neighbor = graphRegistry.find((gr) => gr.id === neighborId)
      if (!neighbor || visited.has(neighbor.id)) continue
      queue.enqueue(neighbor)
      visited.add(neighbor.id)
      const currentLL = new LinkedList<string>(
        neighbor.id,
        tracks.get(graph.id),
      )
      tracks.set(neighbor.id, currentLL)
    }
  }
  // Есди мы посетили конечный граф, то выводим генератор в виде связанного списка айдишников
  if (tracks.has(endGraph?.id || "")) {
    yield tracks.get(endGraph?.id || "")
  }
}

// Разворачиваем связанный лист в массив айдишников
export function findPaths(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): string[] {
  const pathLinkedList = createLinkedListPath(
    startGraphId,
    endGraphId,
    graphRegistry,
  )
  const iterationResult = pathLinkedList.next()
  let currentPathPoint = iterationResult.value
  const path: string[] = []
  while (currentPathPoint) {
    path.push(currentPathPoint.value)
    currentPathPoint = currentPathPoint.head
  }
  return path.reverse()
}
