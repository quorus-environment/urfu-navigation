import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 0,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-101"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-101",
  },
  {
    name: "Лестница",
    height: 70,
    width: 100,
    coords: {
      x: 350,
      y: 0,
    },
    entry: Side.LEFT,
    linkedAuditoriums: [
      {
        floor: 2,
        id: "Лестница 2floor",
      },
    ],
    neighbors: ["Коридор Лестница 1floor", "Коридор РИ-101", "Лестница 2floor"],
    floor: 1,
    destination: GraphDestination.LADDER,
    section: "leftWing1",
    id: "Лестница 1floor",
  },
  {
    name: "РИ-103",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 50,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор Лестница 1floor", "Коридор РИ-103"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-103",
  },
  {
    name: "РИ-102",
    height: 130,
    width: 100,
    coords: {
      x: 350,
      y: 70,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-103", "Коридор РИ-102"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-102",
  },
  {
    name: "РИ-105",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 100,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-102", "Коридор РИ-105"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-105",
  },
  {
    name: "РИ-104",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 200,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-105", "РИ-107", "Коридор РИ-107"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-104",
  },
  {
    name: "РИ-107",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 200,
    },
    entry: Side.RIGHT,
    neighbors: ["РИ-104", "Коридор РИ-105", "Коридор РИ-107"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-107",
  },
  {
    name: "РИ-106",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 300,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-107", "РИ-109", "Коридор РИ-109"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-106",
  },
  {
    name: "РИ-109",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 300,
    },
    entry: Side.RIGHT,
    neighbors: ["РИ-106", "Коридор РИ-107", "Коридор РИ-109"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-109",
  },
  {
    name: "РИ-108",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 400,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-111", "Коридор РИ-108"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-108",
  },
  {
    name: "РИ-111",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 400,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-109", "Коридор РИ-111"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-111",
  },
  {
    name: "РИ-113",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 450,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-108", "Коридор РИ-113"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-113",
  },
  {
    name: "РИ-110",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 500,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-113", "Коридор РИ-115", "РИ-115"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-110",
  },
  {
    name: "РИ-115",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 500,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-113", "РИ-110", "Коридор РИ-115"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-115",
  },
  {
    name: "РИ-117",
    height: 150,
    width: 100,
    coords: {
      x: 200,
      y: 550,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-112", "Коридор РИ-117"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-117",
  },
  {
    name: "РИ-112",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 550,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-115", "Коридор РИ-112"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-112",
  },
  {
    name: "РИ-114",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 650,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-114", "Коридор РИ-117"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-114",
  },
  {
    name: "РИ-119",
    height: 150,
    width: 100,
    coords: {
      x: 200,
      y: 700,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-114", "Коридор РИ-119"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-119",
  },
  {
    name: "РИ-116",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 750,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-116", "Коридор РИ-119"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-116",
  },
  {
    name: "РИ-121",
    height: 150,
    width: 100,
    coords: {
      x: 200,
      y: 850,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-121", "Коридор РИ-118"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-121",
  },
  {
    name: "РИ-118",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 850,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-116", "Коридор РИ-118"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-118",
  },
  {
    name: "РИ-120",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 900,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-120", "Коридор РИ-121"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-120",
  },
  {
    name: "РИ-123",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 1000,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-120", "Коридор РИ-123", "Тех-помещение"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-123",
  },
  {
    name: "РИ-125",
    height: 150,
    width: 100,
    coords: {
      x: 200,
      y: 1050,
    },
    entry: Side.RIGHT,
    neighbors: ["Лестница 2 1floor", "Коридор РИ-122", "Коридор РИ-125"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-125",
  },
  {
    name: "РИ-125а",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 1200,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-125", "turnoverLeftToMain"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-125а",
  },
  {
    name: "Тех-помещение",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1000,
    },
    entry: Side.LEFT,
    neighbors: ["РИ-123", "Коридор РИ-123", "Коридор РИ-120"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "Тех-помещение",
  },
  {
    name: "РИ-122",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-123", "Коридор РИ-122"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    id: "РИ-122",
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1100,
    },
    entry: Side.LEFT,
    neighbors: [
      "Коридор РИ-122",
      "РИ-125",
      "Коридор РИ-125",
      "Лестница 2 2floor",
    ],
    floor: 1,
    destination: GraphDestination.LADDER,
    section: "leftWing1",
    id: "Лестница 2 1floor",
  },
]

const mainSection: TAuditorium[] = [
  {
    name: "РИ-127в",
    height: 100,
    width: 110,
    coords: {
      x: 30,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["РИ-127г", "Коридор РИ-127г", "РИ-129б"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    entryOffset: 40,
    id: "РИ-127в",
  },
  {
    name: "РИ-127а",
    height: 100,
    width: 110,
    coords: {
      x: 140,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-129", "Коридор РИ-127а"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-127а",
  },
  {
    name: "РИ-127г",
    height: 50,
    width: 70,
    coords: {
      x: 30,
      y: 1350,
    },
    entry: Side.RIGHT,
    neighbors: ["РИ-127в", "РИ-129б", "Коридор РИ-127г"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-127г",
  },
  {
    name: "РИ-127",
    height: 100,
    width: 50,
    coords: {
      x: 250,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-127а", "Коридор РИ-127"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-127",
  },
  {
    name: "РИ-129б",
    height: 100,
    width: 110,
    coords: {
      x: 30,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["РИ-127г", "Коридор РИ-127г", "РИ-127в"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    entryOffset: 40,
    id: "РИ-129б",
  },
  {
    name: "РИ-129",
    height: 100,
    width: 50,
    coords: {
      x: 140,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-127г", "Коридор РИ-129"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-129",
  },
  {
    name: "РадиоТочка",
    height: 100,
    width: 160,
    coords: {
      x: 190,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-127", "Коридор РадиоТочка", "turnoverMainToLeft"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    entryOffset: 60,
    id: "РадиоТочка",
  },
  {
    name: "РИ-124а",
    height: 100,
    width: 70,
    coords: {
      x: 350,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РадиоТочка", "Коридор РИ-124а"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-124а",
  },
  {
    name: "С/у",
    height: 100,
    width: 50,
    coords: {
      x: 420,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор С/у", "Коридор РИ-124а"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "С/у",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: {
      x: 350,
      y: 1400,
    },
    entry: Side.RIGHT,
    neighbors: [
      "Коридор гардероб налево",
      "Коридор Лестница Слева 1floor",
      "Лестница Слева 2floor",
    ],
    floor: 1,
    destination: GraphDestination.LADDER,
    section: "mainSection1",
    id: "Лестница Слева 1floor",
  },
  {
    name: "РИ-124",
    height: 70,
    width: 50,
    coords: {
      x: 470,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-124", "Коридор РИ-126"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-124",
  },
  {
    name: "РИ-126",
    height: 70,
    width: 50,
    coords: {
      x: 520,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-128", "Коридор РИ-126"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-126",
  },
  {
    name: "РИ-128",
    height: 70,
    width: 50,
    coords: {
      x: 570,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-128", "Коридор РИ-130"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-128",
  },
  {
    name: "РИ-130",
    height: 70,
    width: 50,
    coords: {
      x: 620,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-132", "Коридор РИ-130"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-130",
  },
  {
    name: "РИ-132",
    height: 70,
    width: 50,
    coords: {
      x: 670,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-132", "Коридор РИ-134"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-132",
  },
  {
    name: "РИ-134",
    height: 70,
    width: 50,
    coords: {
      x: 720,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-136", "Коридор РИ-134"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-134",
  },
  {
    name: "РИ-136",
    height: 70,
    width: 170,
    coords: {
      x: 770,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-136", "Коридор РИ-138"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-136",
  },
  {
    name: "РИ-138",
    height: 70,
    width: 170,
    coords: {
      x: 940,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-138 направо", "Коридор РИ-138"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "РИ-138",
  },
  {
    name: "Буфет",
    height: 70,
    width: 50,
    coords: {
      x: 520,
      y: 1355,
    },
    entry: Side.LEFT,
    neighbors: [],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "Буфет",
  },
  {
    name: "Гардероб",
    height: 70,
    width: 450,
    coords: {
      x: 570,
      y: 1355,
    },
    entry: Side.BOTTOM,
    neighbors: [
      "Коридор гардероб налево",
      "Коридор вход наверх",
      "Коридор гардероб направо",
    ],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    entryOffset: -25,
    id: "Гардероб",
  },
  {
    name: "Вход",
    height: 90,
    width: 350,
    coords: {
      x: 595,
      y: 1500,
    },
    entry: Side.TOP,
    neighbors: ["Коридор вход наверх"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection1",
    id: "Вход",
  },
  {
    name: "Лестница Справа 1floor",
    height: 100,
    width: 120,
    coords: {
      x: 1110,
      y: 1400,
    },
    entry: Side.LEFT,
    neighbors: [
      "Коридор гардероб направо",
      "Коридор Лестница Справа 1floor",
      "Лестница Справа 2floor",
    ],
    floor: 1,
    destination: GraphDestination.LADDER,
    section: "mainSection1",
    id: "Лестница Справа 1floor",
  },
]

const rightWing: TAuditorium[] = [
  {
    name: "РИ-138а",
    height: 100,
    width: 120,
    coords: {
      x: 1110,
      y: 1250,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-138а"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-138а",
  },
  {
    name: "РИ-135",
    height: 150,
    width: 200,
    coords: {
      x: 1330,
      y: 1350,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-135"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-135",
  },
  {
    name: "РИ-137",
    height: 100,
    width: 200,
    coords: {
      x: 1330,
      y: 1250,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-138а", "Коридор РИ-137", "Коридор РИ-140"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-137",
  },
  {
    name: "РИ-140",
    height: 100,
    width: 50,
    coords: {
      x: 1230,
      y: 1150,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-142", "Коридор РИ-140", "РИ-139"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-140",
  },
  {
    name: "РИ-139",
    height: 100,
    width: 50,
    coords: {
      x: 1330,
      y: 1150,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-142", "Коридор РИ-140", "РИ-140"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-139",
  },
  {
    name: "РИ-142",
    height: 50,
    width: 100,
    coords: {
      x: 1180,
      y: 1100,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-142", "Коридор РИ-141"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-142",
  },
  {
    name: "РИ-141",
    height: 100,
    width: 100,
    coords: {
      x: 1330,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-141", "Коридор РИ-144"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-141",
  },
  {
    name: "РИ-144",
    height: 100,
    width: 100,
    coords: {
      x: 1180,
      y: 1000,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-144", "Коридор РИ-143"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-144",
  },
  {
    name: "РИ-146",
    height: 150,
    width: 100,
    coords: {
      x: 1180,
      y: 850,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-146", "Коридор РИ-145"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-146",
  },
  {
    name: "РИ-143",
    height: 150,
    width: 100,
    coords: {
      x: 1330,
      y: 900,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-146", "Коридор РИ-143"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-143",
  },
  {
    name: "РИ-145",
    height: 50,
    width: 100,
    coords: {
      x: 1330,
      y: 850,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-145"],
    floor: 1,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
    id: "РИ-145",
  },
]

export const neighborsGraph: TGraph[] = [
  {
    id: "Коридор РИ-101",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-101", "Лестница 1floor", "Коридор Лестница 1floor"],
    direction: Side.RIGHT,
    points: [325, 25, 325, 35],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор Лестница 1floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-103",
      "Лестница 1floor",
      "Коридор РИ-101",
      "Коридор РИ-103",
    ],
    direction: Side.RIGHT,
    points: [325, 35, 325, 75],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-103",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-102",
      "РИ-103",
      "Коридор Лестница 1floor",
      "Коридор РИ-102",
    ],
    direction: Side.RIGHT,
    points: [325, 75, 325, 135],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-102",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-102", "РИ-105", "Коридор РИ-103", "Коридор РИ-105"],
    direction: Side.RIGHT,
    points: [325, 135, 325, 150],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-105",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-104",
      "РИ-105",
      "РИ-107",
      "Коридор РИ-102",
      "Коридор РИ-107",
    ],
    direction: Side.RIGHT,
    points: [325, 150, 325, 250],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-107",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-104",
      "РИ-106",
      "РИ-107",
      "РИ-109",
      "Коридор РИ-105",
      "Коридор РИ-109",
    ],
    direction: Side.RIGHT,
    points: [325, 250, 325, 350],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-109",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-106",
      "РИ-109",
      "РИ-111",
      "Коридор РИ-107",
      "Коридор РИ-111",
    ],
    direction: Side.RIGHT,
    points: [325, 350, 325, 425],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-111",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-111", "РИ-108", "Коридор РИ-109", "Коридор РИ-108"],
    direction: Side.RIGHT,
    points: [325, 425, 325, 450],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-108",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-108", "РИ-113", "Коридор РИ-111", "Коридор РИ-113"],
    direction: Side.RIGHT,
    points: [325, 450, 325, 475],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-113",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-113",
      "РИ-115",
      "РИ-110",
      "Коридор РИ-108",
      "Коридор РИ-115",
    ],
    direction: Side.RIGHT,
    points: [325, 475, 325, 525],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-115",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-110",
      "РИ-115",
      "РИ-112",
      "Коридор РИ-113",
      "Коридор РИ-112",
    ],
    direction: Side.RIGHT,
    points: [325, 525, 325, 600],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-112",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-112", "РИ-117", "Коридор РИ-115", "Коридор РИ-117"],
    direction: Side.RIGHT,
    points: [325, 600, 325, 625],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-117",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-114", "РИ-117", "Коридор РИ-112", "Коридор РИ-114"],
    direction: Side.RIGHT,
    points: [325, 625, 325, 700],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-114",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-114", "РИ-119", "Коридор РИ-117", "Коридор РИ-119"],
    direction: Side.RIGHT,
    points: [325, 700, 325, 775],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-119",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-119", "РИ-116", "Коридор РИ-114", "Коридор РИ-116"],
    direction: Side.RIGHT,
    points: [325, 775, 325, 800],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-116",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-116", "РИ-118", "Коридор РИ-119", "Коридор РИ-118"],
    direction: Side.RIGHT,
    points: [325, 800, 325, 875],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-118",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-121", "РИ-118", "Коридор РИ-116", "Коридор РИ-121"],
    direction: Side.RIGHT,
    points: [325, 875, 325, 925],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-121",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-121", "РИ-120", "Коридор РИ-118", "Коридор РИ-120"],
    direction: Side.RIGHT,
    points: [325, 925, 325, 950],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-120",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-120",
      "РИ-123",
      "Тех-помещение",
      "Коридор РИ-121",
      "Коридор РИ-123",
    ],
    direction: Side.RIGHT,
    points: [325, 950, 325, 1025],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-123",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-123",
      "Тех-помещение",
      "РИ-122",
      "Коридор РИ-120",
      "Коридор РИ-122",
    ],
    direction: Side.RIGHT,
    points: [325, 1025, 325, 1075],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-122",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-122",
      "РИ-125",
      "Лестница 2 1floor",
      "Коридор РИ-123",
      "Коридор РИ-125",
    ],
    direction: Side.RIGHT,
    points: [325, 1075, 325, 1125],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-125",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-125",
      "Лестница 2 1floor",
      "РИ-125а",
      "Коридор РИ-122",
      "turnoverLeftToMain",
    ],
    direction: Side.RIGHT,
    points: [325, 1125, 325, 1225],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "turnoverLeftToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["РИ-125а", "Коридор РИ-125"],
    direction: Side.RIGHT,
    points: [325, 1225, 325, 1300],
    section: "leftWing1",
    floor: 1,
    linkedSection: ["mainSection1"],
  },
  {
    id: "turnoverMainToLeft",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-127", "Коридор РадиоТочка", "РадиоТочка"],
    direction: Side.RIGHT,
    points: [325, 1300, 330, 1375],
    section: "mainSection1",
    floor: 1,
    linkedSection: ["leftWing1"],
  },
  {
    id: "Коридор РИ-127г",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-127г", "РИ-127в", "РИ-129б", "РИ-129", "Коридор РИ-129"],
    direction: Side.RIGHT,
    points: [125, 1375, 165, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-129",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-127а", "РИ-129", "Коридор РИ-127г", "Коридор РИ-127а"],
    direction: Side.RIGHT,
    points: [165, 1375, 195, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-127а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-127а", "РИ-127", "Коридор РИ-129", "Коридор РИ-127"],
    direction: Side.RIGHT,
    points: [195, 1375, 275, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-127",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-127",
      "РадиоТочка",
      "turnoverMainToLeft",
      "Коридор РадиоТочка",
      "Коридор РИ-127а",
    ],
    direction: Side.RIGHT,
    points: [275, 1375, 330, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РадиоТочка",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РадиоТочка",
      "РИ-124а",
      "turnoverMainToLeft",
      "Коридор РИ-127",
      "Коридор РИ-124а",
    ],
    direction: Side.RIGHT,
    points: [330, 1375, 385, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-124а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-124а", "С/у", "Коридор РадиоТочка", "Коридор С/у"],
    direction: Side.RIGHT,
    points: [385, 1375, 445, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор С/у",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["С/у", "Коридор РИ-124а", "Коридор РИ-124", "Коридор Буфет"],
    direction: Side.RIGHT,
    points: [445, 1375, 495, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-124",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-124", "Коридор С/у", "Коридор Буфет", "Коридор РИ-126"],
    direction: Side.RIGHT,
    points: [495, 1345, 495, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-126",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-124", "РИ-126", "Коридор РИ-124", "Коридор РИ-128"],
    direction: Side.RIGHT,
    points: [495, 1345, 545, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-128",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-126", "РИ-128", "Коридор РИ-126", "Коридор РИ-130"],
    direction: Side.RIGHT,
    points: [545, 1345, 595, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-130",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-128", "РИ-130", "Коридор РИ-128", "Коридор РИ-132"],
    direction: Side.RIGHT,
    points: [595, 1345, 645, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-132",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-130", "РИ-132", "Коридор РИ-130", "Коридор РИ-134"],
    direction: Side.RIGHT,
    points: [645, 1345, 695, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-134",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-132", "РИ-134", "Коридор РИ-132", "Коридор РИ-136"],
    direction: Side.RIGHT,
    points: [695, 1345, 745, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-136",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-134", "РИ-136", "Коридор РИ-134", "Коридор РИ-138"],
    direction: Side.RIGHT,
    points: [745, 1345, 855, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-138",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-136", "РИ-138", "Коридор РИ-136", "Коридор РИ-138 направо"],
    direction: Side.RIGHT,
    points: [855, 1345, 1025, 1345],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор Лестница Слева 1floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор гардероб налево",
      "Лестница Слева 1floor",
      "Буфет",
      "Коридор Буфет",
    ],
    direction: Side.RIGHT,
    points: [495, 1390, 495, 1450],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор Буфет",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор С/у",
      "Коридор РИ-124",
      "Коридор Лестница Слева 1floor",
      "Буфет",
    ],
    direction: Side.RIGHT,
    points: [495, 1375, 495, 1390],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор гардероб налево",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Гардероб",
      "Коридор Лестница Слева 1floor",
      "Лестница Слева 1floor",
      "Коридор гардероб направо",
      "Коридор вход наверх",
    ],
    direction: Side.RIGHT,
    points: [495, 1450, 770, 1450],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор гардероб направо",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Гардероб",
      "Коридор Лестница Справа 1floor",
      "Лестница Справа 1floor",
      "Коридор гардероб налево",
      "Коридор вход наверх",
    ],
    direction: Side.RIGHT,
    points: [770, 1450, 1085, 1450],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор вход наверх",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Вход",
      "Коридор гардероб налево",
      "Гардероб",
      "Коридор гардероб направо",
    ],
    direction: Side.RIGHT,
    points: [770, 1450, 770, 1475],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор Лестница Справа 1floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор гардероб направо",
      "Лестница Справа 1floor",
      "turnoverMainToRight",
      "Коридор РИ-138 направо",
    ],
    direction: Side.RIGHT,
    points: [1085, 1450, 1085, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "Коридор РИ-138 направо",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-138",
      "Коридор РИ-138",
      "Коридор Лестница Справа 1floor",
      "turnoverMainToRight",
    ],
    direction: Side.RIGHT,
    points: [1025, 1345, 1085, 1375],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "turnoverMainToRight",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-138 направо", "Коридор Лестница Справа 1floor"],
    direction: Side.RIGHT,
    points: [1085, 1375, 1230, 1375],
    section: "mainSection1",
    floor: 1,
    linkedSection: ["rightWing1"],
  },
  {
    id: "turnoverRightToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-137", "Коридор РИ-135"],
    direction: Side.RIGHT,
    points: [1230, 1375, 1305, 1375],
    section: "rightWing1",
    floor: 1,
    linkedSection: ["mainSection1"],
  },
  {
    id: "Коридор РИ-145",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-146", "РИ-145", "Коридор РИ-146"],
    direction: Side.RIGHT,
    points: [1305, 875, 1305, 925],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-146",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-146", "РИ-143", "Коридор РИ-145", "Коридор РИ-143"],
    direction: Side.RIGHT,
    points: [1305, 925, 1305, 975],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-143",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-143", "РИ-144", "Коридор РИ-146", "Коридор РИ-144"],
    direction: Side.RIGHT,
    points: [1305, 975, 1305, 1050],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-144",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-141", "РИ-144", "Коридор РИ-143", "Коридор РИ-141"],
    direction: Side.RIGHT,
    points: [1305, 1050, 1305, 1100],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-141",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-141", "РИ-142", "Коридор РИ-144", "Коридор РИ-142"],
    direction: Side.RIGHT,
    points: [1305, 1100, 1305, 1125],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-142",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-140",
      "РИ-139",
      "РИ-142",
      "Коридор РИ-141",
      "Коридор РИ-140",
    ],
    direction: Side.RIGHT,
    points: [1305, 1125, 1305, 1200],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-140",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-140",
      "РИ-139",
      "РИ-137",
      "Коридор РИ-142",
      "Коридор РИ-137",
      "Коридор РИ-138а",
    ],
    direction: Side.RIGHT,
    points: [1305, 1200, 1305, 1300],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-137",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-137",
      "turnoverRightToMain",
      "Коридор РИ-138а",
      "Коридор РИ-140",
      "Коридор РИ-135",
    ],
    direction: Side.RIGHT,
    points: [1305, 1300, 1305, 1375],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-138а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-138а", "РИ-137", "Коридор РИ-140", "Коридор РИ-137"],
    direction: Side.RIGHT,
    points: [1255, 1300, 1305, 1300],
    section: "rightWing1",
    floor: 1,
  },
  {
    id: "Коридор РИ-135",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-135", "turnoverRightToMain", "Коридор РИ-137"],
    direction: Side.RIGHT,
    points: [1305, 1375, 1305, 1425],
    section: "rightWing1",
    floor: 1,
  },
]

export const walls = [
  { x: 300, y: 0, width: 50, height: 0, floor: 1 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 1 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 1 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 1 },
  { x: 1280, y: 850, width: 50, height: 0, floor: 1 },
]

export const configSectionsGraph: TGraph[] = [
  {
    id: "leftWing1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection1"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing1",
    floor: 1,
  },
  {
    id: "mainSection1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing1", "rightWing1"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "mainSection1",
    floor: 1,
  },
  {
    id: "rightWing1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection1"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing1",
    floor: 1,
  },
]

export const auditoriumsConfig = [...leftWing, ...mainSection, ...rightWing]
