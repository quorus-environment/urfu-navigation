import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing3: TAuditorium[] = [
  {
    name: "РИ-301",
    height: 40,
    width: 100,
    coords: { x: 200, y: 0 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-301", "Коридор РИ-306"],
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
    neighbors: ["Коридор Лестница"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "leftWing3",
  },

  {
    name: "РИ-302",
    height: 130,
    width: 100,
    coords: { x: 350, y: 70 },
    entry: Side.LEFT,
    neighbors: ["Коридор Лестница", "Коридор РИ-304"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 50,
  },
  {
    name: "РИ-303",
    height: 50,
    width: 100,
    coords: { x: 200, y: 40 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-303а",
    height: 110,
    width: 100,
    coords: { x: 200, y: 90 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -40,
  },
  {
    name: "РИ-304",
    height: 100,
    width: 100,
    coords: { x: 350, y: 200 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 30,
  },
  {
    name: "РИ-305",
    height: 150,
    width: 100,
    coords: { x: 200, y: 200 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -60,
  },
  {
    name: "РИ-306",
    height: 150,
    width: 100,
    coords: { x: 350, y: 300 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 60,
  },
  {
    // Входа нет на плане
    name: "РИ-307",
    height: 50,
    width: 100,
    coords: { x: 200, y: 350 },
    entry: Side.RIGHT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-308",
    height: 100,
    width: 100,
    coords: { x: 350, y: 450 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 30,
  },
  {
    name: "РИ-309",
    height: 50,
    width: 100,
    coords: { x: 200, y: 400 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -10,
  },
  {
    name: "РИ-309а",
    height: 100,
    width: 100,
    coords: { x: 200, y: 450 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -30,
  },
  {
    // На плане входа нет, так что его с соседями не соединяем
    name: "РИ-310",
    height: 50,
    width: 100,
    coords: { x: 350, y: 550 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-311",
    height: 50,
    width: 100,
    coords: { x: 200, y: 550 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-312",
    height: 50,
    width: 100,
    coords: { x: 350, y: 600 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-313",
    height: 150,
    width: 100,
    coords: { x: 200, y: 600 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-314а",
    height: 100,
    width: 100,
    coords: { x: 350, y: 650 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-314",
    height: 50,
    width: 100,
    coords: { x: 350, y: 750 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-315",
    height: 100,
    width: 100,
    coords: { x: 200, y: 750 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -25,
  },
  {
    // Входа нет
    name: "РИ-316",
    height: 50,
    width: 100,
    coords: { x: 350, y: 800 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-317",
    height: 100,
    width: 100,
    coords: { x: 200, y: 850 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 30,
  },
  {
    name: "РИ-318",
    height: 100,
    width: 100,
    coords: { x: 350, y: 850 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -30,
  },
  {
    name: "РИ-319",
    height: 50,
    width: 100,
    coords: { x: 200, y: 950 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-320",
    height: 100,
    width: 100,
    coords: { x: 350, y: 950 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: 25,
  },
  {
    name: "РИ-321",
    height: 50,
    width: 100,
    coords: { x: 200, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
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
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
  },
  {
    name: "РИ-323",
    height: 200,
    width: 100,
    coords: { x: 200, y: 1050 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-312", "Коридор РИ-303"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing3",
    entryOffset: -75,
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1100 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-315", "Коридор Лестница 2"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "leftWing3",
  },
]

const mainSection3: TAuditorium[] = [
  {
    name: "РИ-325",
    height: 250,
    width: 270,
    coords: { x: 30, y: 1250 },
    entry: Side.RIGHT,
    neighbors: [
      "turnoverMain2ToLeft2",
      "Коридор РИ-317",
      "Коридор РИ-328 влево",
    ],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 110,
  },
  {
    name: "Тайная комната",
    height: 100,
    width: 70,
    coords: { x: 350, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "С/у",
    height: 100,
    width: 50,
    coords: { x: 420, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-328", "Коридор C/у"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: { x: 350, y: 1400 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-319"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "main_section3",
  },
  {
    name: "РИ-327",
    height: 100,
    width: 60,
    coords: { x: 470, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор C/у", "Коридор РИ-323"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: -65,
  },
  {
    name: "РИ-329",
    height: 100,
    width: 130,
    coords: { x: 530, y: 1400 },
    entry: Side.TOP,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: -50,
  },
  {
    name: "РИ-331а",
    height: 100,
    width: 110,
    coords: { x: 660, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-329", "Коридор РИ-331"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 30,
  },
  {
    name: "РИ-333",
    height: 100,
    width: 60,
    coords: { x: 770, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-331", "Коридор РИ-334", "РИ-334"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "РИ-335",
    height: 100,
    width: 210,
    coords: { x: 830, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-334", "Коридор РИ-335"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: -60,
  },
  {
    name: "РИ-337",
    height: 100,
    width: 70,
    coords: { x: 1040, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-334", "Коридор РИ-335"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "РИ-324",
    height: 100,
    width: 150,
    coords: { x: 470, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 40,
  },
  {
    name: "РИ-326",
    height: 100,
    width: 100,
    coords: { x: 620, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-330", "КРИ-327", "Коридор РИ-332", "РИ-327"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 20,
  },
  {
    name: "РИ-328",
    height: 100,
    width: 50,
    coords: { x: 720, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "РИ-330",
    height: 100,
    width: 170,
    coords: { x: 770, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-331", "Коридор РИ-334", "РИ-333"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 20,
  },
  {
    name: "РИ-332",
    height: 100,
    width: 170,
    coords: { x: 940, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-335", "Коридор РИ-336"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: 50,
  },
  {
    name: "Лестница Справа",
    height: 100,
    width: 120,
    coords: { x: 1110, y: 1400 },
    entry: Side.RIGHT,
    neighbors: ["Коридор Лестница Справа"],
    floor: 3,
    destination: GraphDestination.LADDER,
    section: "main_section3",
  },
  {
    name: "С/у (Ж)\nвторой этаж",
    height: 100,
    width: 50,
    coords: { x: 1110, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-336", "Коридор С/у (ж) второй этаж"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "Нарния",
    height: 100,
    width: 70,
    coords: { x: 1160, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
  },
  {
    name: "РИ-339",
    height: 250,
    width: 200,
    coords: { x: 1330, y: 1250 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-337", "Коридор РИ-338"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section3",
    entryOffset: -110,
  },
]

const rightWing3: TAuditorium[] = [
  {
    name: "РИ-334",
    height: 100,
    width: 60,
    coords: { x: 1220, y: 1150 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-341", "РИ-339а", "Коридор РИ-339а"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
    entryOffset: -30,
  },
  {
    name: "РИ-336",
    height: 100,
    width: 100,
    coords: { x: 1180, y: 1050 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-343", "Коридор РИ-340"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
    entryOffset: -30,
  },
  {
    name: "хз",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 950 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "хз2",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 900 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-338",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-344", "Коридор РИ-342"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-340",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 950 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-346", "Коридор РИ-344"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-340а",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 900 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-346", "Коридор РИ-344"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-341",
    height: 150,
    width: 100,
    coords: { x: 1330, y: 1000 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-341", "Коридор РИ-340"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
    entryOffset: 30,
  },
  {
    name: "РИ-341а",
    height: 100,
    width: 60,
    coords: { x: 1330, y: 1150 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-339а", "Коридор РИ-341"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
    entryOffset: -30,
  },
  {
    name: "РИ-342",
    height: 150,
    width: 100,
    coords: { x: 1180, y: 750 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-345", "Коридор РИ-346"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-342а",
    height: 100,
    width: 100,
    coords: { x: 1180, y: 650 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-345", "Коридор РИ-346"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-343",
    height: 150,
    width: 100,
    coords: { x: 1330, y: 750 },
    entry: Side.LEFT,
    neighbors: [],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-344",
    height: 100,
    width: 100,
    coords: { x: 1180, y: 550 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-345", "Коридор РИ-346"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
  {
    name: "РИ-345",
    height: 150,
    width: 100,
    coords: { x: 1330, y: 600 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-347", "Коридор РИ-350"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
    entryOffset: 35,
  },
  {
    name: "Лестница 3",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 550 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-350"],
    floor: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing3",
  },
]
export const neighborsGraphThird: TGraph[] = []

export const wallsThird = [
  { x: 300, y: 0, width: 50, height: 0, floor: 3 },
  { x: 300, y: 1500, width: 50, height: 0, floor: 3 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 3 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 3 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 3 },
  { x: 1280, y: 550, width: 50, height: 0, floor: 3 },
]

export const configSectionsGraphThird: TGraph[] = [
  {
    id: "leftWing3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["main_section3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing3",
    floor: 3,
  },
  {
    id: "main_section3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing3", "rightWing3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "main_section3",
    floor: 3,
  },
  {
    id: "rightWing3",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["main_section3"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing3",
    floor: 3,
  },
]

export const auditoriumsConfigThird = [
  ...leftWing3,
  ...mainSection3,
  ...rightWing3,
]
