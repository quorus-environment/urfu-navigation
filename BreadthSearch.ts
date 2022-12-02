import { Queue } from "queue-typescript";
// import { Side, TGraph, GraphDestination } from "./graph/graph";


export type TGraph = {
  id: string
  points: [number, number]
  direction: Side
  isFilled?: boolean
  destination: GraphDestination
  height?: number
  neighbors?: TGraph[]
}

export enum GraphDestination {
  CORRIDOR = "corridor",
  AUDITORIUM = "auditorium",
  TURN_OVER = "turnover",
  LADDER = "ladder",
}

export enum Side {
  LEFT = "left",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
}


class LinkedList<T> {
  value: T;
  head: LinkedList<T>;
  size: number;
  constructor(value: T, head: LinkedList<T> = null) {
    this.head = head;
    this.value = value;
    this.size = head?.size + 1 ?? 1;
  }
}


let ri_101: TGraph = {
  id: "РИ-101",
  points: [425, 450],
  direction: Side.BOTTOM,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let ri_102: TGraph = {
  id: "РИ-102",
  points: [575, 450],
  direction: Side.BOTTOM,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let ri_103: TGraph = {
  id: "РИ-103",
  points: [725, 450],
  direction: Side.BOTTOM,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let ri_105: TGraph = {
  id: "РИ-105",
  points: [425, 500],
  direction: Side.TOP,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let ri_106: TGraph = {
  id: "РИ-106",
  points: [575, 500],
  direction: Side.TOP,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let ri_107: TGraph = {
  id: "РИ-107",
  points: [725, 500],
  direction: Side.TOP,
  isFilled: false,
  destination: GraphDestination.AUDITORIUM,
  height: 25
}

let cor_2: TGraph = {
  id: "cor_2",
  points: [575, 475],
  direction: Side.RIGHT,
  isFilled: false,
  destination: GraphDestination.CORRIDOR,
  height: 150,
}

let cor_1: TGraph = {
  id: "cor_1",
  points: [425, 475],
  direction: Side.RIGHT,
  isFilled: false,
  destination: GraphDestination.CORRIDOR,
  height: 150,
}



cor_1.neighbors = [cor_2, ri_101, ri_102, ri_105, ri_106];
cor_2.neighbors = [cor_1, ri_102, ri_103, ri_106, ri_107];
ri_101.neighbors = [cor_1, ri_105];
ri_102.neighbors = [cor_2, cor_1, ri_106];
ri_103.neighbors = [cor_2, ri_107];
ri_105.neighbors = [cor_1, ri_101];
ri_106.neighbors = [cor_2, cor_1, ri_102];
ri_107.neighbors = [cor_2, ri_103];
let mainGraph: TGraph[] = [cor_2, cor_1, ri_101, ri_102, ri_103, ri_105, ri_106, ri_107];

console.log(expandLinkedList(ri_101, ri_107));


function* findPaths(startGraph: TGraph, endGraph: TGraph): Generator<LinkedList<string>> {
  let queue = new Queue<TGraph>();
  queue.enqueue(startGraph);
  let visited = new Set();
  visited.add(startGraph);
  let tracks = new Map<string, LinkedList<string>>;
  const initLL = new LinkedList<string>(startGraph.id);
  tracks.set(startGraph.id, initLL);
  while (queue.length != 0) {
    let graph = queue.dequeue();
    for (let i = 0; i < graph.neighbors.length; i++){
      let neighbor = graph.neighbors[i];
      if (visited.has(neighbor.id))
        continue
      queue.enqueue(neighbor);
      visited.add(neighbor.id);
      const currentLL = new LinkedList<string>(neighbor.id, tracks.get(graph.id));
      tracks.set(neighbor.id, currentLL)
    }
  }

  if (tracks.has(endGraph.id))
    yield tracks.get(endGraph.id);
}



function expandLinkedList(startGraph: TGraph, endGraph: TGraph): string[] {
  const pathLinkedList = findPaths(startGraph, endGraph);
  const iterationResult = pathLinkedList.next();
  let currentPathPoint = iterationResult.value;
  let path: string[] = [];
  while (currentPathPoint !== null){
    path.push(currentPathPoint.value)
    currentPathPoint = currentPathPoint.head;
  }
  // console.log(result.reverse())
  return path.reverse();
}



