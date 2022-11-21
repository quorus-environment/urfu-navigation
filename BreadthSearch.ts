import { Queue } from "queue-typescript";

class Node {
  id: string;
  destination: string;
  height: number;
  isFilled: boolean;
  neighbors: string[];
  direction: string;
  points: number[];
  constructor(id: string,
              destination: string,
              height: number,
              isFilled: boolean,
              neighbors: string[],
              direction: string,
              points: number[]) {
    this.id = id;
    this.destination = destination;
    this.height = height;
    this.isFilled = isFilled;
    this.neighbors = neighbors;
    this.direction = direction;
    this.points = points;
  }
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



function BreadthSearch(graph: Array<Node>, startPointID: string, endPointID: string): Array<string> {
  if (queue.length === 0) {
    return [];
  }
  let currentPlace = graph[queue.dequeue()];
  if (currentPlace.isFilled) {
    BreadthSearch(graph, startPointID, endPointID)
  }
  currentPlace.isFilled = true;
  if (currentPlace.id === endPointID) {
    return GetResultRoute(startPointID, endPointID);
  }
  currentPlace.neighbors.forEach(id => {
    const neighbourIndex = graph.findIndex(element => element.id === id);
    const neighbour = graph[neighbourIndex];
    if (!neighbour.isFilled) {
      routes.set(neighbour.id, currentPlace.id);
      queue.enqueue(neighbourIndex);
    }
  });
  return BreadthSearch(graph, startPointID, endPointID);
}

function Initialization(graph: Array<Node>, startPointID: string, endPointID: string) {
  routes = new Map<string, string>();
  queue = new Queue<number>();
  if (startPointID === endPointID) {
    return queue;
  }
  queue.enqueue(graph.findIndex(item =>
    item.id === startPointID));
  return BreadthSearch(graph, startPointID, endPointID);
}

let graph = [new Node("РИ-101", "auditorium", 25, false, ["cor_1"], "bottom", [425, 450, 425, 475]),
  new Node("РИ-102", "auditorium", 25, false, ["cor_2"], "bottom", [575, 450, 575, 475]),
  new Node("РИ-103", "auditorium", 25, false, ["cor_3"], "bottom", [725, 450, 725, 475]),
  new Node("РИ-105", "auditorium", 25, false, ["cor_1"], "bottom", [425, 500, 425, 475]),
  new Node("РИ-106", "auditorium", 25, false, ["cor_2"], "top", [575, 500, 575, 475]),
  new Node("РИ-107", "auditorium", 25, false, ["cor_3"], "top", [725, 500, 725, 475]),

  new Node("cor_1", "corridor", 150, false, ["РИ-101", "РИ-105", "cor_2"], "right", [425, 475, 575, 47]),
  new Node("cor_2", "corridor", 150, false, ["РИ-102", "РИ-106", "cor_1", "cor_3"], "right", [575, 475, 725, 47]),
  new Node("cor_3", "corridor", 150, false, ["РИ-103", "РИ-107", "cor_2"], "right", [725, 475, 875, 47])
]

console.log(Initialization(graph, "РИ-101", "РИ-107"))







