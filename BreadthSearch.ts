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


let routes: Map<string, string> = new Map<string, string>();
let queue: Queue<number> = new Queue<number>();

function isString(element: string | undefined): element is string {
  return typeof element === 'string';
}

function GetResultRoute(startPointID: string, endPointID: string): Array<string> {
  let currentId = endPointID;
  const resultRoute = [currentId];
  while (currentId !== startPointID) {
    let idContainer: string | undefined = routes.get(currentId)
    if (isString(idContainer)) {
      currentId = idContainer;
    }
    resultRoute.unshift(currentId);
  }
  return resultRoute;
}



function BreadthSearch(graph: Array<TGraph>, startPointID: string, endPointID: string): Array<string> {
  if (queue.length === 0) {
    return [];
  }
  let currentIndex = queue.dequeue();
  let currentPlace = graph[currentIndex];
  console.log(currentPlace.id);
  console.log(currentPlace.isFilled);
  if (/*currentPlace.isFilled*/ graph[currentIndex].isFilled) {
    BreadthSearch(graph, startPointID, endPointID)
  }
  console.log(currentPlace.id);
  console.log(currentPlace.isFilled);

  console.log(graph[currentIndex].id);
  console.log(graph[currentIndex].isFilled);

  graph[currentIndex].isFilled = true;
  // currentPlace.isFilled = true;


  console.log(currentPlace.isFilled);
  if (currentPlace.id === endPointID) {
    console.log(routes);
    return GetResultRoute(startPointID, endPointID);
  }
  currentPlace.neighbors?.forEach(currentGraph => {
    const neighbourIndex = graph.findIndex(element => element.id === currentGraph.id);
    console.log(neighbourIndex);
    // ri_101, ri_102, ri_103, ri_105, ri_106, ri_107, cor_1, cor_2
    const neighbour = graph[neighbourIndex];
    if (!neighbour.isFilled) {
      routes.set(neighbour.id, currentPlace.id);
      queue.enqueue(neighbourIndex);
    }
  });
  return BreadthSearch(graph, startPointID, endPointID);
}

function Initialization(graph: Array<TGraph>, startPointID: string, endPointID: string): string[] | null {
  routes = new Map<string, string>();
  queue = new Queue<number>();
  if (startPointID === endPointID) {
    return null;
  }
  queue.enqueue(graph.findIndex(item =>
    item.id === startPointID));
  console.log(queue.length)
  return BreadthSearch(graph, startPointID, endPointID);
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



cor_1.neighbors = [ri_101, ri_102, ri_105, ri_106, cor_2];
cor_2.neighbors = [ri_102, ri_103, ri_106, ri_107, cor_1];
ri_101.neighbors = [ri_105, cor_1];
ri_102.neighbors = [ri_106, cor_1, cor_2];
ri_103.neighbors = [ri_107, cor_2];
ri_105.neighbors = [ri_101, cor_1];
ri_106.neighbors = [ri_102, cor_1, cor_2];
ri_107.neighbors = [ri_103, cor_2];
let meinGraph: TGraph[] = [ri_101, ri_102, ri_103, ri_105, ri_106, ri_107, cor_1, cor_2];

// console.log(cor_1.neighbors);
console.log(Initialization(meinGraph, "РИ-101", "РИ-102"));

// console.log(Initialization(graph, "РИ-101", "РИ-107"))







