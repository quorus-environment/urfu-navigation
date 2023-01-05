import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing: TAuditorium[] = [
  {
    name: "РИ-301",
    height: 50,
    width: 100,
    coords: { x: 200, y: 0 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-301"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "Лестница",
    height: 70,
    width: 100,
    coords: { x: 350, y: 0 },
    entry: Side.LEFT,
    linkedAuditoriums: [{ floor: 3, id: "Лестница 2 этаж" }],
    neighbors: ["Коридор Лестница", "Коридор РИ-301", "Лестница 2 этаж"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "leftWing3",
  },
  {
    name: "РИ-303",
    height: 50,
    width: 100,
    coords: { x: 200, y: 50 },
    entry: Side.RIGHT,
    neighbors: ["Коридор Лестница", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-302",
    height: 130,
    width: 100,
    coords: { x: 350, y: 70 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-303", "Коридор РИ-302"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-305",
    height: 100,
    width: 100,
    coords: { x: 200, y: 100 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-302", "Коридор РИ-305"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-304",
    height: 100,
    width: 100,
    coords: { x: 350, y: 200 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-305", "РИ-307", "Коридор РИ-307"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-307",
    height: 100,
    width: 100,
    coords: { x: 200, y: 200 },
    entry: Side.RIGHT,
    neighbors: ["РИ-304", "Коридор РИ-305", "Коридор РИ-307"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-306",
    height: 100,
    width: 100,
    coords: { x: 350, y: 300 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-307", "РИ-309", "Коридор РИ-309"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-309",
    height: 100,
    width: 100,
    coords: { x: 200, y: 300 },
    entry: Side.RIGHT,
    neighbors: ["РИ-306", "Коридор РИ-307", "Коридор РИ-309"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-308",
    height: 100,
    width: 100,
    coords: { x: 350, y: 400 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-311", "Коридор РИ-308"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-311",
    height: 50,
    width: 100,
    coords: { x: 200, y: 400 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-309", "Коридор РИ-311"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-313",
    height: 50,
    width: 100,
    coords: { x: 200, y: 450 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-308", "Коридор РИ-313"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-310",
    height: 50,
    width: 100,
    coords: { x: 350, y: 500 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-313", "Коридор РИ-315", "РИ-315"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-315",
    height: 50,
    width: 100,
    coords: { x: 200, y: 500 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-313", "РИ-310", "Коридор РИ-315"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-317a",
    height: 150,
    width: 100,
    coords: { x: 200, y: 550 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-317"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-312",
    height: 100,
    width: 100,
    coords: { x: 350, y: 550 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-315", "Коридор РИ-312"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-314",
    height: 100,
    width: 100,
    coords: { x: 350, y: 650 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-314", "Коридор РИ-317"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-319a",
    height: 150,
    width: 100,
    coords: { x: 200, y: 700 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-314", "Коридор РИ-319"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-316",
    height: 100,
    width: 100,
    coords: { x: 350, y: 750 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-316", "Коридор РИ-319"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-321",
    height: 150,
    width: 100,
    coords: { x: 200, y: 850 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-321", "Коридор РИ-318"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-318",
    height: 150,
    width: 100,
    coords: { x: 350, y: 850 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-316", "Коридор РИ-318"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-323a",
    height: 50,
    width: 100,
    coords: { x: 200, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-320", "Коридор РИ-323", "Тех-помещение"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-325a",
    height: 150,
    width: 100,
    coords: { x: 200, y: 1050 },
    entry: Side.RIGHT,
    neighbors: ["Лестница 2", "Коридор РИ-322", "Коридор РИ-325"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-325а",
    height: 50,
    width: 100,
    coords: { x: 200, y: 1200 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-325", "turnoverLeftToMain"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "Тех-помещение",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1000 },
    entry: Side.LEFT,
    neighbors: ["РИ-323", "Коридор РИ-323", "Коридор РИ-320"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-322",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1050 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-323", "Коридор РИ-322"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1100 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-322", "РИ-325", "Коридор РИ-325", "Лестница 22"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "leftWing3",
  },
]

const mainSection: TAuditorium[] = [
  {
    name: "РИ-317",
    height: 140,
    width: 270,
    coords: { x: 30, y: 1250 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-327а", "Коридор РИ-327"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-319",
    height: 110,
    width: 270,
    coords: { x: 30, y: 1390 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-327", "Коридор РадиоТочка", "turnoverMainToLeft"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-328",
    height: 100,
    width: 70,
    coords: { x: 350, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РадиоТочка", "Коридор РИ-324а"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "С/у",
    height: 100,
    width: 50,
    coords: { x: 420, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор С/у", "Коридор РИ-324а"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: { x: 350, y: 1400 },
    entry: Side.LEFT,
    neighbors: ["Коридор гардероб налево", "Коридор Лестница Слева"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "mainSection3",
  },
  {
    name: "РИ-323",
    height: 100,
    width: 160,
    coords: { x: 470, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-325",
    height: 100,
    width: 40,
    coords: { x: 630, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-327",
    height: 100,
    width: 100,
    coords: { x: 670, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-329",
    height: 100,
    width: 55,
    coords: { x: 770, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-331",
    height: 100,
    width: 55,
    coords: { x: 825, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-333",
    height: 100,
    width: 60,
    coords: { x: 880, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-335a",
    height: 100,
    width: 170,
    coords: { x: 940, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-330",
    height: 100,
    width: 200,
    coords: { x: 470, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-324", "Коридор РИ-326"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },

  {
    name: "РИ-332",
    height: 100,
    width: 100,
    coords: { x: 670, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-332", "Коридор РИ-334"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-334",
    height: 100,
    width: 170,
    coords: { x: 770, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-336", "Коридор РИ-338"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "РИ-336",
    height: 100,
    width: 170,
    coords: { x: 940, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-338 направо", "Коридор РИ-338"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection3",
  },
  {
    name: "Лестница Справа",
    height: 100,
    width: 120,
    coords: { x: 1110, y: 1400 },
    entry: Side.RIGHT,
    neighbors: ["Коридор гардероб направо", "Коридор Лестница Справа"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "mainSection3",
  },
]

const rightWing: TAuditorium[] = [
  {
    name: "РИ-338а",
    height: 100,
    width: 120,
    coords: { x: 1110, y: 1250 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-338а"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-335",
    height: 150,
    width: 200,
    coords: { x: 1330, y: 1350 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-335"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-337",
    height: 100,
    width: 200,
    coords: { x: 1330, y: 1250 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-338а", "Коридор РИ-337", "Коридор РИ-340"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-340",
    height: 100,
    width: 50,
    coords: { x: 1230, y: 1150 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-342", "Коридор РИ-340", "РИ-339"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-339",
    height: 100,
    width: 50,
    coords: { x: 1330, y: 1150 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-342", "Коридор РИ-340", "РИ-340"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-342",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 1100 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-342", "Коридор РИ-341"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-341",
    height: 100,
    width: 100,
    coords: { x: 1330, y: 1050 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-341", "Коридор РИ-344"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-344",
    height: 100,
    width: 100,
    coords: { x: 1180, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-344", "Коридор РИ-343"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-346",
    height: 150,
    width: 100,
    coords: { x: 1180, y: 850 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-346", "Коридор РИ-345"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-343",
    height: 150,
    width: 100,
    coords: { x: 1330, y: 900 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-346", "Коридор РИ-343"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-345",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 850 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-345"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
]
export const neighborsGraphThird: TGraph[] = [
  {
    id: "Коридор РИ-301",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-301", "Лестница", "Коридор Лестница"],
    direction: Side.RIGHT,
    points: [325, 25, 325, 35],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор Лестница",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-303", "Лестница", "Коридор РИ-301", "Коридор РИ-303"],
    direction: Side.RIGHT,
    points: [325, 35, 325, 75],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-303",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-302", "РИ-303", "Коридор Лестница", "Коридор РИ-302"],
    direction: Side.RIGHT,
    points: [325, 75, 325, 135],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-302",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-302", "РИ-305", "Коридор РИ-303", "Коридор РИ-305"],
    direction: Side.RIGHT,
    points: [325, 135, 325, 150],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-305",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-304",
      "РИ-305",
      "РИ-307",
      "Коридор РИ-302",
      "Коридор РИ-307",
    ],
    direction: Side.RIGHT,
    points: [325, 150, 325, 250],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-307",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-304",
      "РИ-306",
      "РИ-307",
      "РИ-309",
      "Коридор РИ-305",
      "Коридор РИ-309",
    ],
    direction: Side.RIGHT,
    points: [325, 250, 325, 350],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-309",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-306",
      "РИ-309",
      "РИ-311",
      "Коридор РИ-307",
      "Коридор РИ-311",
    ],
    direction: Side.RIGHT,
    points: [325, 350, 325, 425],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-311",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-311", "РИ-308", "Коридор РИ-309", "Коридор РИ-308"],
    direction: Side.RIGHT,
    points: [325, 425, 325, 450],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-308",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-308", "РИ-313", "Коридор РИ-311", "Коридор РИ-313"],
    direction: Side.RIGHT,
    points: [325, 450, 325, 475],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-313",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-313",
      "РИ-315",
      "РИ-310",
      "Коридор РИ-308",
      "Коридор РИ-315",
    ],
    direction: Side.RIGHT,
    points: [325, 475, 325, 525],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-315",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-310",
      "РИ-315",
      "РИ-312",
      "Коридор РИ-313",
      "Коридор РИ-312",
    ],
    direction: Side.RIGHT,
    points: [325, 525, 325, 600],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-312",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-312", "РИ-317", "Коридор РИ-315", "Коридор РИ-317"],
    direction: Side.RIGHT,
    points: [325, 600, 325, 625],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-317",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-314", "РИ-317", "Коридор РИ-312", "Коридор РИ-314"],
    direction: Side.RIGHT,
    points: [325, 625, 325, 700],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-314",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-314", "РИ-319", "Коридор РИ-317", "Коридор РИ-319"],
    direction: Side.RIGHT,
    points: [325, 700, 325, 775],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-319",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-319", "РИ-316", "Коридор РИ-314", "Коридор РИ-316"],
    direction: Side.RIGHT,
    points: [325, 775, 325, 800],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-316",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-316", "РИ-318", "Коридор РИ-319", "Коридор РИ-318"],
    direction: Side.RIGHT,
    points: [325, 800, 325, 875],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-318",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-321", "РИ-318", "Коридор РИ-316", "Коридор РИ-321"],
    direction: Side.RIGHT,
    points: [325, 875, 325, 925],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-321",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-321", "РИ-320", "Коридор РИ-318", "Коридор РИ-320"],
    direction: Side.RIGHT,
    points: [325, 925, 325, 950],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-320",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-320",
      "РИ-323",
      "Тех-помещение",
      "Коридор РИ-321",
      "Коридор РИ-323",
    ],
    direction: Side.RIGHT,
    points: [325, 950, 325, 1025],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-323",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-323",
      "Тех-помещение",
      "РИ-322",
      "Коридор РИ-320",
      "Коридор РИ-322",
    ],
    direction: Side.RIGHT,
    points: [325, 1025, 325, 1075],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-322",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-322",
      "РИ-325",
      "Лестница 2",
      "Коридор РИ-323",
      "Коридор РИ-325",
    ],
    direction: Side.RIGHT,
    points: [325, 1075, 325, 1125],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-325",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-325",
      "Лестница 2",
      "РИ-325а",
      "Коридор РИ-322",
      "turnoverLeftToMain",
    ],
    direction: Side.RIGHT,
    points: [325, 1125, 325, 1225],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "turnoverLeftToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["РИ-325а", "Коридор РИ-325"],
    direction: Side.RIGHT,
    points: [325, 1225, 325, 1300],
    section: "leftWing3",
    floor: 3,
    linkedSection: ["mainSection3"],
  },
  {
    id: "turnoverMainToLeft",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-327", "Коридор РадиоТочка", "РадиоТочка"],
    direction: Side.RIGHT,
    points: [325, 1300, 330, 1375],
    section: "mainSection3",
    floor: 3,
    linkedSection: ["leftWing3"],
  },
  {
    id: "Коридор РИ-327г",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-327г", "РИ-327в", "РИ-329б", "РИ-329", "Коридор РИ-329"],
    direction: Side.RIGHT,
    points: [125, 1375, 165, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-329",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-327а", "РИ-329", "Коридор РИ-327г", "Коридор РИ-327а"],
    direction: Side.RIGHT,
    points: [165, 1375, 195, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-327а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-327а", "РИ-327", "Коридор РИ-329", "Коридор РИ-327"],
    direction: Side.RIGHT,
    points: [195, 1375, 275, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-327",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-327",
      "РадиоТочка",
      "turnoverMainToLeft",
      "Коридор РадиоТочка",
      "Коридор РИ-327а",
    ],
    direction: Side.RIGHT,
    points: [275, 1375, 330, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РадиоТочка",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РадиоТочка",
      "РИ-324а",
      "turnoverMainToLeft",
      "Коридор РИ-327",
      "Коридор РИ-324а",
    ],
    direction: Side.RIGHT,
    points: [330, 1375, 385, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-324а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-324а", "С/у", "Коридор РадиоТочка", "Коридор С/у"],
    direction: Side.RIGHT,
    points: [385, 1375, 445, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор С/у",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["С/у", "Коридор РИ-324а", "Коридор РИ-324", "Коридор Буфет"],
    direction: Side.RIGHT,
    points: [445, 1375, 495, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-324",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-324", "Коридор С/у", "Коридор Буфет", "Коридор РИ-326"],
    direction: Side.RIGHT,
    points: [495, 1345, 495, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-326",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-324", "РИ-326", "Коридор РИ-324", "Коридор РИ-328"],
    direction: Side.RIGHT,
    points: [495, 1345, 545, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-328",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-326", "РИ-328", "Коридор РИ-326", "Коридор РИ-330"],
    direction: Side.RIGHT,
    points: [545, 1345, 595, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-330",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-328", "РИ-330", "Коридор РИ-328", "Коридор РИ-332"],
    direction: Side.RIGHT,
    points: [595, 1345, 645, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-332",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-330", "РИ-332", "Коридор РИ-330", "Коридор РИ-334"],
    direction: Side.RIGHT,
    points: [645, 1345, 695, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-334",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-332", "РИ-334", "Коридор РИ-332", "Коридор РИ-336"],
    direction: Side.RIGHT,
    points: [695, 1345, 745, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-336",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-334", "РИ-336", "Коридор РИ-334", "Коридор РИ-338"],
    direction: Side.RIGHT,
    points: [745, 1345, 855, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-338",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-336", "РИ-338", "Коридор РИ-336", "Коридор РИ-338 направо"],
    direction: Side.RIGHT,
    points: [855, 1345, 1025, 1345],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор Лестница Слева",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор гардероб налево",
      "Лестница Слева",
      "Буфет",
      "Коридор Буфет",
    ],
    direction: Side.RIGHT,
    points: [495, 1390, 495, 1450],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор Буфет",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор С/у",
      "Коридор РИ-324",
      "Коридор Лестница Слева",
      "Буфет",
    ],
    direction: Side.RIGHT,
    points: [495, 1375, 495, 1390],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор гардероб налево",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Гардероб",
      "Коридор Лестница Слева",
      "Лестница Слева",
      "Коридор гардероб направо",
      "Коридор вход наверх",
    ],
    direction: Side.RIGHT,
    points: [495, 1450, 770, 1450],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор гардероб направо",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Гардероб",
      "Коридор Лестница Справа",
      "Лестница Справа",
      "Коридор гардероб налево",
      "Коридор вход наверх",
    ],
    direction: Side.RIGHT,
    points: [770, 1450, 1085, 1450],
    section: "mainSection3",
    floor: 3,
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
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор Лестница Справа",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор гардероб направо",
      "Лестница Справа",
      "turnoverMainToRight",
      "Коридор РИ-338 направо",
    ],
    direction: Side.RIGHT,
    points: [1085, 1450, 1085, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "Коридор РИ-338 направо",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-338",
      "Коридор РИ-338",
      "Коридор Лестница Справа",
      "turnoverMainToRight",
    ],
    direction: Side.RIGHT,
    points: [1025, 1345, 1085, 1375],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "turnoverMainToRight",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-338 направо", "Коридор Лестница Справа"],
    direction: Side.RIGHT,
    points: [1085, 1375, 1230, 1375],
    section: "mainSection3",
    floor: 3,
    linkedSection: ["rightWing3"],
  },
  {
    id: "turnoverRightToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор РИ-337", "Коридор РИ-335"],
    direction: Side.RIGHT,
    points: [1230, 1375, 1305, 1375],
    section: "rightWing3",
    floor: 3,
    linkedSection: ["mainSection3"],
  },
  {
    id: "Коридор РИ-345",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-346", "РИ-345", "Коридор РИ-346"],
    direction: Side.RIGHT,
    points: [1305, 875, 1305, 925],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-346",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-346", "РИ-343", "Коридор РИ-345", "Коридор РИ-343"],
    direction: Side.RIGHT,
    points: [1305, 925, 1305, 975],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-343",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-343", "РИ-344", "Коридор РИ-346", "Коридор РИ-344"],
    direction: Side.RIGHT,
    points: [1305, 975, 1305, 1050],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-344",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-341", "РИ-344", "Коридор РИ-343", "Коридор РИ-341"],
    direction: Side.RIGHT,
    points: [1305, 1050, 1305, 1100],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-341",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-341", "РИ-342", "Коридор РИ-344", "Коридор РИ-342"],
    direction: Side.RIGHT,
    points: [1305, 1100, 1305, 1125],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-342",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-340",
      "РИ-339",
      "РИ-342",
      "Коридор РИ-341",
      "Коридор РИ-340",
    ],
    direction: Side.RIGHT,
    points: [1305, 1125, 1305, 1200],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-340",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-340",
      "РИ-339",
      "РИ-337",
      "Коридор РИ-342",
      "Коридор РИ-337",
    ],
    direction: Side.RIGHT,
    points: [1305, 1200, 1305, 1300],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-337",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-337",
      "turnoverRightToMain",
      "Коридор РИ-338а",
      "Коридор РИ-340",
    ],
    direction: Side.RIGHT,
    points: [1305, 1300, 1305, 1375],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-338а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-338а", "РИ-337", "Коридор РИ-340", "Коридор РИ-337"],
    direction: Side.RIGHT,
    points: [1255, 1300, 1305, 1300],
    section: "rightWing3",
    floor: 3,
  },
  {
    id: "Коридор РИ-335",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-335", "turnoverRightToMain", "Коридор РИ-337"],
    direction: Side.RIGHT,
    points: [1305, 1375, 1305, 1425],
    section: "rightWing3",
    floor: 3,
  },
]

export const wallsThird = [
  { x: 300, y: 0, width: 50, height: 0, floor: 3 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 3 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 3 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 3 },
  { x: 1280, y: 850, width: 50, height: 0, floor: 3 },
]

export const configSectionsGraphThird: TGraph[] = [
  {
    id: "leftWing3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "mainSection3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing3", "rightWing3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "mainSection3",
    floor: 3,
  },
  {
    id: "rightWing3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing3",
    floor: 3,
  },
]

export const auditoriumsConfigThird = [
  ...leftWing,
  ...mainSection,
  ...rightWing,
]
