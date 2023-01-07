import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing2: TAuditorium[] = [
  {
    name: "РИ-201",
    height: 300,
    width: 100,
    coords: {
      x: 200,
      y: 0,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-201", "Коридор РИ-206"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 90,
    id: "РИ-201",
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
        floor: 1,
        id: "Лестница 1floor",
      },
    ],
    neighbors: ["Коридор Лестница 2floor"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "leftWing2",
    id: "Лестница 2floor",
  },
  {
    name: "РИ-202",
    height: 40,
    width: 100,
    coords: {
      x: 350,
      y: 70,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор Лестница 2floor", "Коридор РИ-202"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    id: "РИ-202",
  },
  {
    name: "РИ-204",
    height: 90,
    width: 100,
    coords: {
      x: 350,
      y: 110,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-202", "Коридор РИ-204"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 30,
    id: "РИ-204",
  },
  {
    name: "РИ-206",
    height: 60,
    width: 100,
    coords: {
      x: 350,
      y: 200,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-204", "Коридор РИ-206"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: -10,
    id: "РИ-206",
  },
  {
    name: "РИ-203",
    height: 250,
    width: 100,
    coords: {
      x: 200,
      y: 300,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-212", "Коридор РИ-203"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 50,
    id: "РИ-203",
  },
  {
    name: "РИ-208",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 260,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-201", "Коридор РИ-208"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: -20,
    id: "РИ-208",
  },
  {
    name: "РИ-210",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 360,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-210", "Коридор РИ-208"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    id: "РИ-210",
  },
  {
    name: "РИ-207",
    height: 110,
    width: 100,
    coords: {
      x: 200,
      y: 550,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-214", "Коридор РИ-207"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 30,
    id: "РИ-207",
  },
  {
    name: "РИ-209",
    height: 90,
    width: 100,
    coords: {
      x: 200,
      y: 660,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-218", "Коридор РИ-209"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 30,
    id: "РИ-209",
  },
  {
    name: "РИ-212",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 410,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-212", "Коридор РИ-210"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    id: "РИ-212",
  },
  {
    name: "РИ-214",
    height: 90,
    width: 100,
    coords: {
      x: 350,
      y: 460,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-214", "Коридор РИ-203"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 30,
    id: "РИ-214",
  },
  {
    name: "РИ-211",
    height: 250,
    width: 100,
    coords: {
      x: 200,
      y: 750,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-209", "Коридор РИ-211", "РИ-222"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: -100,
    id: "РИ-211",
  },
  {
    name: "РИ-213",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 1000,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-211", "Коридор РИ-213", "РИ-224"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: -10,
    id: "РИ-213",
  },
  {
    name: "РИ-215",
    height: 200,
    width: 100,
    coords: {
      x: 200,
      y: 1050,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-213", "Коридор РИ-215"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: -70,
    id: "РИ-215",
  },
  {
    name: "РИ-218",
    height: 200,
    width: 100,
    coords: {
      x: 350,
      y: 550,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-207", "Коридор РИ-218"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    id: "РИ-218",
  },
  {
    name: "РИ-224",
    height: 250,
    width: 100,
    coords: {
      x: 350,
      y: 800,
    },
    entry: Side.LEFT,
    neighbors: ["РИ-213", "Коридор РИ-211", "Коридор РИ-213"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 90,
    id: "РИ-224",
  },
  {
    name: "РИ-222",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 750,
    },
    entry: Side.LEFT,
    neighbors: ["РИ-211", "Коридор РИ-209", "Коридор РИ-211"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    id: "РИ-222",
  },
  {
    name: "РИ-226",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-213", "Коридор РИ-215", "РИ-215"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing2",
    entryOffset: 5,
    id: "РИ-226",
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
    linkedAuditoriums: [{ floor: 1, id: "Лестница 2 1floor" }],
    neighbors: ["Коридор РИ-215", "Коридор Лестница 2 2floor"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "leftWing2",
    id: "Лестница 2 2floor",
  },
]

const mainSection2: TAuditorium[] = [
  {
    name: "РИ-217",
    height: 140,
    width: 270,
    coords: {
      x: 30,
      y: 1250,
    },
    entry: Side.RIGHT,
    neighbors: [
      "turnoverMain2ToLeft2",
      "Коридор РИ-217",
      "Коридор РИ-228 влево",
    ],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: 55,
    id: "РИ-217",
  },
  {
    name: "РИ-219",
    height: 110,
    width: 270,
    coords: {
      x: 30,
      y: 1390,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-217", "Коридор РИ-219"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -40,
    id: "РИ-219",
  },
  {
    name: "РИ-228",
    height: 100,
    width: 70,
    coords: {
      x: 350,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-228 влево", "Коридор РИ-228"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -5,
    id: "РИ-228",
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
    neighbors: ["Коридор РИ-228", "Коридор C/у"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    id: "С/у 2floor",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: {
      x: 350,
      y: 1400,
    },
    entry: Side.LEFT,
    linkedAuditoriums: [{ floor: 1, id: "Лестница Слева 1floor" }],
    neighbors: ["Коридор РИ-219"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "mainSection2",
    id: "Лестница Слева 2floor",
  },
  {
    name: "РИ-223",
    height: 100,
    width: 160,
    coords: {
      x: 470,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор C/у", "Коридор РИ-223"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -65,
    id: "РИ-223",
  },
  {
    name: "РИ-225",
    height: 100,
    width: 40,
    coords: {
      x: 630,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-223", "РИ-230", "Коридор РИ-230"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    id: "РИ-225",
  },
  {
    name: "РИ-227",
    height: 100,
    width: 100,
    coords: {
      x: 670,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-230", "РИ-232", "Коридор РИ-232"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -30,
    id: "РИ-227",
  },
  {
    name: "РИ-229",
    height: 100,
    width: 55,
    coords: {
      x: 770,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-232", "Коридор РИ-229"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -2.5,
    id: "РИ-229",
  },
  {
    name: "РИ-231",
    height: 100,
    width: 55,
    coords: {
      x: 825,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-229", "Коридор РИ-231"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -2.5,
    id: "РИ-231",
  },
  {
    name: "РИ-233",
    height: 100,
    width: 60,
    coords: {
      x: 880,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-231", "Коридор РИ-234", "РИ-234"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    id: "РИ-233",
  },
  {
    name: "РИ-235",
    height: 100,
    width: 170,
    coords: {
      x: 940,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-234", "Коридор РИ-235"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -60,
    id: "РИ-235",
  },
  {
    name: "РИ-230",
    height: 100,
    width: 200,
    coords: {
      x: 470,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-223", "РИ-225", "Коридор РИ-230"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: 80,
    id: "РИ-230",
  },
  {
    name: "РИ-232",
    height: 100,
    width: 100,
    coords: {
      x: 670,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-230", "КРИ-227", "Коридор РИ-232", "РИ-227"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -30,
    id: "РИ-232",
  },
  {
    name: "РИ-234",
    height: 100,
    width: 170,
    coords: {
      x: 770,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-231", "Коридор РИ-234", "РИ-233"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: 55,
    id: "РИ-234",
  },
  {
    name: "РИ-236",
    height: 100,
    width: 170,
    coords: {
      x: 940,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-235", "Коридор РИ-236"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: 70,
    id: "РИ-236",
  },
  {
    name: "Лестница Справа",
    height: 100,
    width: 120,
    coords: {
      x: 1110,
      y: 1400,
    },
    entry: Side.RIGHT,
    linkedAuditoriums: [{ floor: 1, id: "Лестница Справа 1floor" }],
    neighbors: ["Коридор Лестница Справа 2floor"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "mainSection2",
    id: "Лестница Справа 2floor",
  },
  {
    name: "С/у (Ж)\nвторой этаж",
    height: 100,
    width: 50,
    coords: {
      x: 1110,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-236", "Коридор С/у (ж) второй этаж 2floor"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    id: "С/у (Ж) второй этаж 2floor",
  },
  {
    name: "РИ-238",
    height: 100,
    width: 70,
    coords: {
      x: 1160,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор С/у (ж) второй этаж 2floor", "Коридор РИ-238"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    id: "РИ-238",
  },
  {
    name: "РИ-237",
    height: 150,
    width: 200,
    coords: {
      x: 1330,
      y: 1350,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-237", "Коридор РИ-238"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection2",
    entryOffset: -50,
    id: "РИ-237",
  },
]

const rightWing2: TAuditorium[] = [
  {
    name: "РИ-239",
    height: 100,
    width: 200,
    coords: {
      x: 1330,
      y: 1250,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-239а", "TurnoverRight2ToMain2"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -30,
    id: "РИ-239",
  },
  {
    name: "РИ-238а",
    height: 100,
    width: 60,
    coords: {
      x: 1220,
      y: 1150,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-241", "РИ-239а", "Коридор РИ-239а"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -30,
    id: "РИ-238а",
  },
  {
    name: "РИ-239а",
    height: 100,
    width: 60,
    coords: {
      x: 1330,
      y: 1150,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-239а", "Коридор РИ-241"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -30,
    id: "РИ-239а",
  },
  {
    name: "РИ-240",
    height: 100,
    width: 100,
    coords: {
      x: 1180,
      y: 1050,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-243", "Коридор РИ-240"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -30,
    id: "РИ-240",
  },
  {
    name: "РИ-241",
    height: 100,
    width: 100,
    coords: {
      x: 1330,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-241", "Коридор РИ-240"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: 30,
    id: "РИ-241",
  },
  {
    name: "РИ-242",
    height: 100,
    width: 100,
    coords: {
      x: 1180,
      y: 950,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-244", "Коридор РИ-242"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -30,
    id: "РИ-242",
  },
  {
    name: "РИ-250",
    height: 150,
    width: 100,
    coords: {
      x: 1180,
      y: 550,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-250", "Коридор РИ-247", "РИ-247"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: 60,
    id: "РИ-250",
  },
  {
    name: "РИ-248",
    height: 150,
    width: 100,
    coords: {
      x: 1180,
      y: 700,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-247", "Коридор РИ-248"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: -60,
    id: "РИ-248",
  },
  {
    name: "РИ-246",
    height: 50,
    width: 100,
    coords: {
      x: 1180,
      y: 850,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-245", "Коридор РИ-246"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    id: "РИ-246",
  },
  {
    name: "РИ-244",
    height: 50,
    width: 100,
    coords: {
      x: 1180,
      y: 900,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-244"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    id: "РИ-244",
  },
  {
    name: "РИ-243",
    height: 200,
    width: 100,
    coords: {
      x: 1330,
      y: 850,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-242", "Коридор РИ-243"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: 70,
    id: "РИ-243",
  },
  {
    name: "РИ-247",
    height: 100,
    width: 100,
    coords: {
      x: 1330,
      y: 600,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-247", "Коридор РИ-250"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    entryOffset: 35,
    id: "РИ-247",
  },
  {
    name: "РИ-245",
    height: 150,
    width: 100,
    coords: {
      x: 1330,
      y: 700,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-245", "Коридор РИ-248"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    id: "РИ-245",
  },
  {
    name: "Лестница 3",
    height: 50,
    width: 100,
    coords: {
      x: 1330,
      y: 550,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-250"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing2",
    id: "Лестница 3 2floor",
  },
]

export const neighborsGraphSecond: TGraph[] = [
  {
    id: "turnoverLeft2ToMain2",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["Коридор Лестница 2 2floor"],
    direction: Side.BOTTOM,
    points: [325, 1225, 325, 1300],
    section: "leftWing2",
    floor: 2,
    linkedSection: ["mainSection2"],
  },

  {
    id: "turnoverMain2ToLeft2",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["РИ-217", "Коридор РИ-217", "Коридор РИ-228 влево"],
    direction: Side.RIGHT,
    points: [325, 1300, 325, 1375],
    section: "mainSection2",
    floor: 2,
    linkedSection: ["leftWing2"],
  },
  {
    id: "Коридор Лестница 2floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Лестница 2floor", "РИ-202", "Коридор РИ-202"],
    direction: Side.RIGHT,
    points: [325, 35, 325, 90],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-202",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-202",
      "Коридор Лестница 2floor",
      "Коридор РИ-204",
      "РИ-204",
    ],
    direction: Side.RIGHT,
    points: [325, 90, 325, 185],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-204",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-204", "Коридор РИ-202", "Коридор РИ-206", "РИ-206"],
    direction: Side.RIGHT,
    points: [325, 185, 325, 220],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-206",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-204", "Коридор РИ-201", "РИ-206", "РИ-201"],
    direction: Side.RIGHT,
    points: [325, 220, 325, 240],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-201",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-201", "Коридор РИ-206", "Коридор РИ-208", "РИ-208"],
    direction: Side.RIGHT,
    points: [325, 240, 325, 290],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-208",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-201", "Коридор РИ-210", "РИ-208", "РИ-210"],
    direction: Side.RIGHT,
    points: [325, 290, 325, 385],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-210",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-208", "Коридор РИ-212", "РИ-210", "РИ-212"],
    direction: Side.RIGHT,
    points: [325, 385, 325, 435],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-212",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-203", "Коридор РИ-210", "РИ-203", "РИ-212"],
    direction: Side.RIGHT,
    points: [325, 435, 325, 475],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-203",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-212", "Коридор РИ-214", "РИ-203", "РИ-214"],
    direction: Side.RIGHT,
    points: [325, 475, 325, 535],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-214",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-203", "Коридор РИ-207", "РИ-214", "РИ-207"],
    direction: Side.RIGHT,
    points: [325, 535, 325, 635],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-207",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-214", "Коридор РИ-218", "РИ-207", "РИ-218"],
    direction: Side.RIGHT,
    points: [325, 635, 325, 650],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-218",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-207", "Коридор РИ-209", "РИ-218", "РИ-209"],
    direction: Side.RIGHT,
    points: [325, 650, 325, 735],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-209",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-218",
      "Коридор РИ-211",
      "РИ-211",
      "РИ-222",
      "РИ-209",
    ],
    direction: Side.RIGHT,
    points: [325, 735, 325, 775],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-211",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-209",
      "Коридор РИ-213",
      "РИ-211",
      "РИ-222",
      "РИ-213",
      "РИ-224",
    ],
    direction: Side.RIGHT,
    points: [325, 775, 325, 1015],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-213",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-211",
      "Коридор РИ-215",
      "РИ-213",
      "РИ-224",
      "РИ-215",
      "РИ-226",
    ],
    direction: Side.RIGHT,
    points: [325, 1015, 325, 1080],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-215",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-213",
      "Коридор Лестница 2 2floor",
      "РИ-215",
      "РИ-226",
      "Лестница 2 2floor",
    ],
    direction: Side.RIGHT,
    points: [325, 1080, 325, 1125],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор Лестница 2 2floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-215", "Лестница 2 2floor", "turnoverLeft2ToMain2"],
    direction: Side.RIGHT,
    points: [325, 1125, 325, 1225],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-217",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "turnoverMain2ToLeft2",
      "РИ-217",
      "Коридор РИ-228 влево",
      "Коридор РИ-219",
      "РИ-219",
    ],
    direction: Side.RIGHT,
    points: [325, 1375, 325, 1405],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-219",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-219", "Лестница Слева 2floor", "Коридор РИ-217"],
    direction: Side.RIGHT,
    points: [325, 1405, 325, 1450],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-228 влево",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "turnoverMain2ToLeft2",
      "РИ-217",
      "Коридор РИ-217",
      "РИ-228",
      "Коридор РИ-228",
    ],
    direction: Side.RIGHT,
    points: [325, 1375, 380, 1375],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-228",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-228 влево",
      "РИ-228",
      "С/у 2floor",
      "Коридор C/у 2floor",
    ],
    direction: Side.RIGHT,
    points: [380, 1375, 445, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор C/у",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-228", "С/у", "РИ-223", "Коридор РИ-223"],
    direction: Side.RIGHT,
    points: [445, 1375, 485, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-223",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор C/у", "РИ-223", "РИ-230", "РИ-225", "Коридор РИ-230"],
    direction: Side.RIGHT,
    points: [485, 1375, 650, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-230",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-230",
      "Коридор РИ-223",
      "РИ-225",
      "РИ-232",
      "РИ-227",
      "Коридор РИ-232",
    ],
    direction: Side.RIGHT,
    points: [650, 1375, 690, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-232",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-232",
      "РИ-227",
      "Коридор РИ-230",
      "РИ-229",
      "Коридор РИ-229",
    ],
    direction: Side.RIGHT,
    points: [690, 1375, 795, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-229",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-232", "РИ-229", "РИ-231", "Коридор РИ-231"],
    direction: Side.RIGHT,
    points: [795, 1375, 850, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-231",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-229",
      "РИ-231",
      "РИ-233",
      "РИ-234",
      "Коридор РИ-234",
    ],
    direction: Side.RIGHT,
    points: [850, 1375, 910, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-234",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-231",
      "РИ-234",
      "РИ-233",
      "РИ-235",
      "Коридор РИ-235",
    ],
    direction: Side.RIGHT,
    points: [910, 1375, 965, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-238",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-238",
      "Коридор С/у (ж) второй этаж 2floor",
      "РИ-237",
      "Коридор РИ-237",
      "TurnoverMain2ToRight2",
    ],
    direction: Side.RIGHT,
    points: [1195, 1375, 1305, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-237",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор Лестница Справа 2floor",
      "Коридор РИ-238",
      "РИ-237",
      "TurnoverMain2ToRight2",
    ],
    direction: Side.RIGHT,
    points: [1305, 1375, 1305, 1425],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор Лестница Справа 2floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Лестница Справа 2floor", "Коридор РИ-237"],
    direction: Side.RIGHT,
    points: [1255, 1450, 1305, 1425],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-239а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-238а",
      "Коридор РИ-241",
      "РИ-239а",
      "РИ-239",
      "TurnoverRight2ToMain2",
    ],
    direction: Side.RIGHT,
    points: [1305, 1170, 1305, 1270],
    section: "rightWing2",
    floor: 2,
  },

  {
    id: "Коридор РИ-241",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-240",
      "РИ-241",
      "РИ-239а",
      "Коридор РИ-239а",
      "РИ-238а",
    ],
    direction: Side.RIGHT,
    points: [1305, 1170, 1305, 1130],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-235",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-234", "РИ-235", "РИ-236", "Коридор РИ-236"],
    direction: Side.RIGHT,
    points: [965, 1375, 1095, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор РИ-236",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-235",
      "РИ-236",
      "С/у (Ж) второй этаж 2floor",
      "Коридор С/у (ж) второй этаж 2floor",
    ],
    direction: Side.RIGHT,
    points: [1095, 1375, 1135, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "Коридор С/у (ж) второй этаж 2floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-236",
      "С/у (Ж) второй этаж 2 floor",
      "РИ-238",
      "Коридор РИ-238",
    ],
    direction: Side.RIGHT,
    points: [1135, 1375, 1195, 1375],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "TurnoverMain2ToRight2",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-237", "Коридор РИ-237", "Коридор РИ-238"],
    direction: Side.RIGHT,
    points: [1305, 1375, 1305, 1350],
    section: "mainSection2",
    linkedSection: ["rightWing2"],
    floor: 2,
  },
  {
    id: "Коридор РИ-240",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-240", "Коридор РИ-243", "Коридор РИ-241", "РИ-241"],
    direction: Side.RIGHT,
    points: [1305, 1130, 1305, 1070],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "TurnoverRight2ToMain2",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-239", "Коридор РИ-239а"],
    direction: Side.RIGHT,
    points: [1305, 1350, 1305, 1270],
    section: "rightWing2",
    linkedSection: ["mainSection2"],
    floor: 2,
  },
  {
    id: "Коридор РИ-243",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-242", "РИ-243", "РИ-240", "Коридор РИ-240"],
    direction: Side.RIGHT,
    points: [1305, 1070, 1305, 1020],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-242",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-242", "Коридор РИ-244", "Коридор РИ-243", "РИ-243"],
    direction: Side.RIGHT,
    points: [1305, 1020, 1305, 970],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-244",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-244", "Коридор РИ-246", "РИ-242", "Коридор РИ-242"],
    direction: Side.RIGHT,
    points: [1305, 970, 1305, 925],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-246",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-246", "Коридор РИ-245", "РИ-244", "Коридор РИ-244"],
    direction: Side.RIGHT,
    points: [1305, 925, 1305, 875],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-245",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-245", "Коридор РИ-248", "РИ-246", "Коридор РИ-246"],
    direction: Side.RIGHT,
    points: [1305, 875, 1305, 775],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-248",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-248", "Коридор РИ-247", "РИ-245", "Коридор РИ-245"],
    direction: Side.RIGHT,
    points: [1305, 775, 1305, 715],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-247",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-250",
      "РИ-247",
      "Коридор РИ-250",
      "РИ-248",
      "Коридор РИ-248",
    ],
    direction: Side.RIGHT,
    points: [1305, 715, 1305, 685],
    section: "rightWing2",
    floor: 2,
  },
  {
    id: "Коридор РИ-250",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Лестница 3 2floor", "РИ-250", "РИ-247", "Коридор РИ-247"],
    direction: Side.RIGHT,
    points: [1305, 685, 1305, 575],
    section: "rightWing2",
    floor: 2,
  },
]

export const wallsSecond = [
  { x: 300, y: 0, width: 50, height: 0, floor: 2 },
  { x: 300, y: 1500, width: 50, height: 0, floor: 2 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 2 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 2 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 2 },
  { x: 1280, y: 550, width: 50, height: 0, floor: 2 },
]

export const configSectionsGraphSecond: TGraph[] = [
  {
    id: "leftWing2",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing2",
    floor: 2,
  },
  {
    id: "mainSection2",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing2", "rightWing2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "mainSection2",
    floor: 2,
  },
  {
    id: "rightWing2",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing2",
    floor: 2,
  },
]

export const auditoriumsConfigSecond = [
  ...leftWing2,
  ...mainSection2,
  ...rightWing2,
]
