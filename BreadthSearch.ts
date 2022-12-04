import { Queue } from "queue-typescript";
import { GraphDestination } from "./src/entities/graph/model/interface"
import { Side } from "./src/shared/model/geometry"
import { LinkedList } from "./src/shared/model/linked-list"


export type TGraph = {
  id: string
  points: [number, number]
  direction: Side
  destination: GraphDestination
  section: number
  floor: number
  isFilled?: boolean
  height?: number
  neighbors?: TGraph[]
}



const ri101: TGraph = {
  id: "РИ-101",
  points: [425, 450],
  direction: Side.BOTTOM,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const ri102: TGraph = {
  id: "РИ-102",
  points: [575, 450],
  direction: Side.BOTTOM,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const ri103: TGraph = {
  id: "РИ-103",
  points: [725, 450],
  direction: Side.BOTTOM,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const ri105: TGraph = {
  id: "РИ-105",
  points: [425, 500],
  direction: Side.TOP,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const ri106: TGraph = {
  id: "РИ-106",
  points: [575, 500],
  direction: Side.TOP,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const ri107: TGraph = {
  id: "РИ-107",
  points: [725, 500],
  direction: Side.TOP,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

const cor2: TGraph = {
  id: "cor2",
  points: [575, 475],
  direction: Side.RIGHT,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.CORRIDOR,
  height: 150,
}

const cor1: TGraph = {
  id: "cor1",
  points: [425, 475],
  direction: Side.RIGHT,
  section: 1,
  floor: 1,
  isFilled: false,
  destination: GraphDestination.CORRIDOR,
  height: 150,
}



cor1.neighbors = [cor2, ri101, ri102, ri105, ri106];
cor2.neighbors = [cor1, ri102, ri103, ri106, ri107];
ri101.neighbors = [cor1, ri105];
ri102.neighbors = [cor2, cor1, ri106];
ri103.neighbors = [cor2, ri107];
ri105.neighbors = [cor1, ri101];
ri106.neighbors = [cor2, cor1, ri102];
ri107.neighbors = [cor2, ri103];

console.log(findPaths(ri101, ri107));


// Поиск в ширину от графа startGraph до графа endGraph
function* createLinkedListPath(startGraph: TGraph, endGraph: TGraph): Generator<LinkedList<string> | undefined> {
  const queue = new Queue<TGraph>();
  queue.enqueue(startGraph);
  const visited = new Set(); // Сет для посещеных графов
  visited.add(startGraph);
  const tracks = new Map<string, LinkedList<string>>; // Словарь, связывающий айдишник со связанным списком
  const initLL = new LinkedList<string>(startGraph.id); // Создаем голову связанного списка
  tracks.set(startGraph.id, initLL);
  while (queue.length != 0) {
    const graph = queue.dequeue();
    // Добавляем всех соседедей graph в очередь
    for (let i = 0; i < (graph.neighbors?.length || 0); i++){
      const neighbor = graph.neighbors?.[i];
      if (!neighbor || visited.has(neighbor.id))
        continue
      queue.enqueue(neighbor);
      visited.add(neighbor.id);
      const currentLL = new LinkedList<string>(neighbor.id, tracks.get(graph.id));
      tracks.set(neighbor.id, currentLL)
    }
  }
  // Есди мы посетили конечный граф, то выводим генератор в виде связанного списка айдишников
  if (tracks.has(endGraph.id))
    yield tracks.get(endGraph.id);
}


// Разворачиваем связанный лист в массив айдишников
function findPaths (startGraph: TGraph, endGraph: TGraph): string[] {
  const pathLinkedList = createLinkedListPath(startGraph, endGraph);
  const iterationResult = pathLinkedList.next();
  let currentPathPoint = iterationResult.value;
  const path: string[] = [];
  while (currentPathPoint !== null){
    path.push(currentPathPoint.value)
    currentPathPoint = currentPathPoint.head;
  }
  return path.reverse();
}



