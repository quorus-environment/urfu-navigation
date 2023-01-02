// Поиск в ширину от графа с ID startGraphId до графа с ID endGraphId
import { TGraph } from "../../entities/graph/model/interface"
import { LinkedList } from "../model/linked-list"

//Надо сделать перегрузку метода, но нельзя делать перегрузку итератора
export function* createLinkedListPathToDestination(
  startGraphId: string,
  endGraphDestination: string,
  graphRegistry: TGraph[],
): Generator<LinkedList<string> | undefined> {
  const queue: TGraph[] = []
  const visited = new Set() // Сет для посещенных графов
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraphArr = graphRegistry.filter(
    (gr) => gr.destination === endGraphDestination,
  )
  if (!startGraph) {
    return undefined
  }
  queue.push(startGraph)
  visited.add(startGraph)
  const tracks = new Map<string, LinkedList<string>>() // Словарь, связывающий айдишник со связанным списком
  const initLL = new LinkedList<string>(startGraphId) // Создаем голову связанного списка
  tracks.set(startGraph.id, initLL)
  let graph: TGraph | undefined = startGraph
  while (
    queue.length !== 0 &&
    endGraphArr.findIndex((gr) => gr.id === graph?.id) === -1
  ) {
    graph = queue.shift()
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
  for (const gr of endGraphArr) {
    if (tracks.has(gr.id || "")) {
      yield tracks.get(gr.id || "")
    }
  }
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
