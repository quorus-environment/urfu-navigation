import { Queue } from "queue-typescript"
import { TGraph } from "./entities/graph/model/interface"
import { LinkedList } from "./shared/model/linked-list"

// Поиск в ширину от графа с ID startGraphId до графа с ID endGraphId
function* createLinkedListPath(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): Generator<LinkedList<string> | undefined> {
  const queue = new Queue<TGraph>()
  const visited = new Set() // Сет для посещеных графов
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraph = graphRegistry.find((gr) => gr.id === endGraphId)
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

// Поиск пути внутри одной секции
function findPathsInSection(
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

// Поиск пути от startGraphId до endGraphId
export function findPaths(
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): string[] {
  // Создаем входной и искомый графы
  const startGraph = graphRegistry.find((gr) => gr.id === startGraphId)
  const endGraph = graphRegistry.find((gr) => gr.id === endGraphId)
  const resultPath: string[] = []
  // Будет поиск по этажам
  if (startGraph?.floor !== endGraph?.floor) {
    return []
  }
  let sectionPathLL: Generator<LinkedList<string> | undefined, any, unknown>
  // Поиск по секциям
  if (
    startGraph?.section !== endGraph?.section &&
    startGraph?.section !== undefined &&
    endGraph?.section !== undefined
  ) {
    sectionPathLL = createLinkedListPath(
      startGraph?.section,
      endGraph?.section,
      graphRegistry,
    )
    // Список секций, через которые нужно пройти включая начальную и конечную
    const sectionPath = unwrapLinkedList(sectionPathLL)
    let lastTurnOverId = ""
    for (let i = 0; i < sectionPath.length - 1; i++) {
      const sectionId = sectionPath[i]
      const nextSectionId = sectionPath[i + 1]
      // Ищем turnover, который соединяем текущую секцию с следующей
      const turnoverToNextSection = graphRegistry.find(
        (gr) => gr.linkedSection === nextSectionId,
      )
      if (turnoverToNextSection?.id !== undefined) {
        const pathToTurnoverLL = createLinkedListPath(
          startGraphId,
          turnoverToNextSection?.id,
          graphRegistry,
        )
        // Ищем путь до этого turnover и добавляем в итоговый путь
        resultPath.push(...unwrapLinkedList(pathToTurnoverLL))
      }
      const turnoverInNewSection = graphRegistry.find(
        (gr) => gr.linkedSection === sectionId,
      )
      // Записываем последний turnover, который станет точкой старта
      if (turnoverInNewSection?.id !== undefined) {
        lastTurnOverId = turnoverInNewSection?.id
      }
    }
    // Записываем путь в последней секции
    resultPath.push(
      ...findPathsInSection(lastTurnOverId, endGraphId, graphRegistry),
    )
    return resultPath
  }
  // Поиск пути в случае, если графы находятся в одной секции
  resultPath.push(
    ...findPathsInSection(startGraphId, endGraphId, graphRegistry),
  )
  return resultPath
}

// Разворачиваем связанный лист в массив айдишников
function unwrapLinkedList(
  linkedListPath: Generator<LinkedList<string> | undefined, any, unknown>,
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
