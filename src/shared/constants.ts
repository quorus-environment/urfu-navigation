import { TCoords } from "./model/geometry"

export enum Colors {
  LightRed = "#ff000010",
  LightYellow = "#ffff0030",
  Gray = "#00000030",
  LightOrange = "rgba(255,145,0,0.2)",
  LightBlue = "rgba(0,197,255,0.2)",
  LightPink = "rgba(245,62,252,0.17)",
  LightGreen = "#12ff0030",
  LightGray = "rgba(49,49,49,0.10)",
}

export const jsonTestCorrect = {
  bodys: [
    {
      model: "main.body",
      pk: 1,
      fields: { name: "Test_body", pub_date: "2023-05-12T20:34:19.023Z" },
    },
  ],
  floors: [
    {
      model: "main.floor",
      pk: 1,
      fields: { body: 1, name: "TEst", pub_date: "2023-05-12T20:34:19.028Z" },
    },
  ],
  sections: [
    {
      model: "main.section",
      pk: 2,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.118Z" },
    },
    {
      model: "main.section",
      pk: 1,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.034Z" },
    },
  ],
  neighbors: [],
  hallways: [
    {
      model: "main.hallway",
      pk: 2,
      fields: {
        x: "471",
        y: "53",
        w: "23",
        h: "663",
        x_end: "",
        y_end: "",
        height: "",
        pub_date: "2023-05-12T20:34:19.123Z",
      },
    },
    {
      model: "main.hallway",
      pk: 1,
      fields: {
        x: "343",
        y: "721",
        w: "221",
        h: "24",
        x_end: "",
        y_end: "",
        height: "",
        pub_date: "2023-05-12T20:34:19.039Z",
      },
    },
  ],
  offices: [
    {
      model: "main.office",
      pk: 36,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "53",
        w: "64",
        h: "57",
        pub_date: "2023-05-12T20:34:19.238Z",
      },
    },
    {
      model: "main.office",
      pk: 35,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "110",
        w: "61",
        h: "57",
        pub_date: "2023-05-12T20:34:19.233Z",
      },
    },
    {
      model: "main.office",
      pk: 34,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "166",
        w: "64",
        h: "38",
        pub_date: "2023-05-12T20:34:19.228Z",
      },
    },
    {
      model: "main.office",
      pk: 33,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "195",
        w: "61",
        h: "29",
        pub_date: "2023-05-12T20:34:19.223Z",
      },
    },
  ],
}

export const testUniv = {
  bodys: [
    {
      model: "main.body",
      pk: 1,
      fields: { name: "Test_body", pub_date: "2023-05-12T20:34:19.023Z" },
    },
  ],
  floors: [
    {
      model: "main.floor",
      pk: 1,
      fields: { body: 1, name: "TEst", pub_date: "2023-05-12T20:34:19.028Z" },
    },
  ],
  sections: [
    {
      model: "main.section",
      pk: 2,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.118Z" },
    },
    {
      model: "main.section",
      pk: 1,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.034Z" },
    },
  ],
  neighbors: [],
  hallways: [
    {
      model: "main.hallway",
      pk: 2,
      fields: {
        x: "471",
        y: "53",
        w: "23",
        h: "663",
        x_end: "",
        y_end: "",
        height: "",
        pub_date: "2023-05-12T20:34:19.123Z",
      },
    },
    {
      model: "main.hallway",
      pk: 1,
      fields: {
        x: "343",
        y: "721",
        w: "221",
        h: "24",
        x_end: "",
        y_end: "",
        height: "",
        pub_date: "2023-05-12T20:34:19.039Z",
      },
    },
  ],
  offices: [
    {
      model: "main.office",
      pk: 36,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "53",
        w: "64",
        h: "57",
        pub_date: "2023-05-12T20:34:19.238Z",
      },
    },
    {
      model: "main.office",
      pk: 35,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "110",
        w: "61",
        h: "57",
        pub_date: "2023-05-12T20:34:19.233Z",
      },
    },
    {
      model: "main.office",
      pk: 34,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "166",
        w: "64",
        h: "38",
        pub_date: "2023-05-12T20:34:19.228Z",
      },
    },
    //
    {
      model: "main.office",
      pk: 33,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "195",
        w: "61",
        h: "29",
        pub_date: "2023-05-12T20:34:19.223Z",
      },
    },
    {
      model: "main.office",
      pk: 32,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "226",
        w: "64",
        h: "28",
        pub_date: "2023-05-12T20:34:19.218Z",
      },
    },
    {
      model: "main.office",
      pk: 31,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "253",
        w: "61",
        h: "87",
        pub_date: "2023-05-12T20:34:19.213Z",
      },
    },
    {
      model: "main.office",
      pk: 30,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "312",
        w: "64",
        h: "57",
        pub_date: "2023-05-12T20:34:19.209Z",
      },
    },
    {
      model: "main.office",
      pk: 29,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "425",
        w: "61",
        h: "87",
        pub_date: "2023-05-12T20:34:19.204Z",
      },
    },
    {
      model: "main.office",
      pk: 28,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "427",
        w: "64",
        h: "29",
        pub_date: "2023-05-12T20:34:19.200Z",
      },
    },
    {
      model: "main.office",
      pk: 27,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "483",
        w: "64",
        h: "29",
        pub_date: "2023-05-12T20:34:19.195Z",
      },
    },
    {
      model: "main.office",
      pk: 26,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "539",
        w: "61",
        h: "87",
        pub_date: "2023-05-12T20:34:19.190Z",
      },
    },
    {
      model: "main.office",
      pk: 25,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "539",
        w: "64",
        h: "29",
        pub_date: "2023-05-12T20:34:19.185Z",
      },
    },
    {
      model: "main.office",
      pk: 24,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "53",
        w: "61",
        h: "57",
        pub_date: "2023-05-12T20:34:19.181Z",
      },
    },
    {
      model: "main.office",
      pk: 23,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "110",
        w: "64",
        h: "56",
        pub_date: "2023-05-12T20:34:19.176Z",
      },
    },
    {
      model: "main.office",
      pk: 22,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "167",
        w: "61",
        h: "28",
        pub_date: "2023-05-12T20:34:19.172Z",
      },
    },
    {
      model: "main.office",
      pk: 21,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "204",
        w: "64",
        h: "22",
        pub_date: "2023-05-12T20:34:19.168Z",
      },
    },
    //
    {
      model: "main.office",
      pk: 20,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "224",
        w: "61",
        h: "29",
        pub_date: "2023-05-12T20:34:19.163Z",
      },
    },
    {
      model: "main.office",
      pk: 19,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "254",
        w: "64",
        h: "58",
        pub_date: "2023-05-12T20:34:19.159Z",
      },
    },
    {
      model: "main.office",
      pk: 18,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "340",
        w: "61",
        h: "85",
        pub_date: "2023-05-12T20:34:19.154Z",
      },
    },
    {
      model: "main.office",
      pk: 17,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "369",
        w: "64",
        h: "58",
        pub_date: "2023-05-12T20:34:19.150Z",
      },
    },
    {
      model: "main.office",
      pk: 16,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "456",
        w: "64",
        h: "27",
        pub_date: "2023-05-12T20:34:19.145Z",
      },
    },
    {
      model: "main.office",
      pk: 15,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "512",
        w: "61",
        h: "27",
        pub_date: "2023-05-12T20:34:19.141Z",
      },
    },
    {
      model: "main.office",
      pk: 14,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "512",
        w: "64",
        h: "27",
        pub_date: "2023-05-12T20:34:19.137Z",
      },
    },
    {
      model: "main.office",
      pk: 13,
      fields: {
        section: 2,
        name: "Name",
        x: "494",
        y: "568",
        w: "64",
        h: "30",
        pub_date: "2023-05-12T20:34:19.132Z",
      },
    },
    {
      model: "main.office",
      pk: 12,
      fields: {
        section: 2,
        name: "Name",
        x: "410",
        y: "626",
        w: "61",
        h: "26",
        pub_date: "2023-05-12T20:34:19.128Z",
      },
    },
    {
      model: "main.office",
      pk: 11,
      fields: {
        section: 1,
        name: "Name",
        x: "373",
        y: "657",
        w: "70",
        h: "64",
        pub_date: "2023-05-12T20:34:19.113Z",
      },
    },
    {
      model: "main.office",
      pk: 10,
      fields: {
        section: 1,
        name: "Name",
        x: "499",
        y: "657",
        w: "32",
        h: "64",
        pub_date: "2023-05-12T20:34:19.097Z",
      },
    },
    {
      model: "main.office",
      pk: 9,
      fields: {
        section: 1,
        name: "Name",
        x: "306",
        y: "721",
        w: "37",
        h: "24",
        pub_date: "2023-05-12T20:34:19.082Z",
      },
    },
    {
      model: "main.office",
      pk: 8,
      fields: {
        section: 1,
        name: "Name",
        x: "343",
        y: "745",
        w: "35",
        h: "61",
        pub_date: "2023-05-12T20:34:19.078Z",
      },
    },
    {
      model: "main.office",
      pk: 7,
      fields: {
        section: 1,
        name: "Name",
        x: "408",
        y: "745",
        w: "35",
        h: "61",
        pub_date: "2023-05-12T20:34:19.073Z",
      },
    },
    {
      model: "main.office",
      pk: 6,
      fields: {
        section: 1,
        name: "Name",
        x: "500",
        y: "745",
        w: "64",
        h: "61",
        pub_date: "2023-05-12T20:34:19.068Z",
      },
    },
    {
      model: "main.office",
      pk: 5,
      fields: {
        section: 1,
        name: "Name",
        x: "306",
        y: "657",
        w: "67",
        h: "64",
        pub_date: "2023-05-12T20:34:19.063Z",
      },
    },
    {
      model: "main.office",
      pk: 5,
      fields: {
        section: 1,
        name: "Name",
        x: "306",
        y: "745",
        w: "37",
        h: "61",
        pub_date: "2023-05-12T20:34:19.063Z",
      },
    },
    {
      model: "main.office",
      pk: 4,
      fields: {
        section: 1,
        name: "Name",
        x: "443",
        y: "657",
        w: "24",
        h: "64",
        pub_date: "2023-05-12T20:34:19.058Z",
      },
    },
    {
      model: "main.office",
      pk: 3,
      fields: {
        section: 1,
        name: "Name",
        x: "531",
        y: "657",
        w: "33",
        h: "64",
        pub_date: "2023-05-12T20:34:19.054Z",
      },
    },
    {
      model: "main.office",
      pk: 2,
      fields: {
        section: 1,
        name: "Name",
        x: "378",
        y: "745",
        w: "30",
        h: "61",
        pub_date: "2023-05-12T20:34:19.049Z",
      },
    },
    {
      model: "main.office",
      pk: 1,
      fields: {
        section: 1,
        name: "Name",
        x: "443",
        y: "745",
        w: "57",
        h: "61",
        pub_date: "2023-05-12T20:34:19.044Z",
      },
    },
  ],
}

export const testUnivUpdated = {
  bodys: [
    {
      model: "main.body",
      pk: 1,
      fields: { name: "Test_body", pub_date: "2023-05-12T20:34:19.023Z" },
    },
  ],
  floors: [
    {
      model: "main.floor",
      pk: 1,
      fields: { body: 1, name: "TEst", pub_date: "2023-05-12T20:34:19.028Z" },
    },
  ],
  sections: [
    {
      model: "main.section",
      pk: 2,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.118Z" },
    },
    {
      model: "main.section",
      pk: 1,
      fields: { floor: 1, body: 1, pub_date: "2023-05-12T20:34:19.034Z" },
    },
  ],
  neighbors: [],
  hallways: [
    {
      model: "main.hallway",
      id: "1",
      coords: [
        [
          { x: 343, y: 721 },
          { x: 564, y: 721 },
        ],
        [
          { x: 564, y: 721 },
          { x: 564, y: 745 },
        ],
        [
          { x: 564, y: 745 },
          { x: 343, y: 745 },
        ],
        [
          { x: 343, y: 745 },
          { x: 343, y: 721 },
        ],
      ],
      fields: {
        x: "343",
        y: "721",
        w: "221",
        h: "24",
        x_end: "",
        y_end: "",
        height: "",
        pub_date: "2023-05-12T20:34:19.039Z",
      },
    },
  ],
  offices: [
    {
      model: "main.office",
      id: "3",
      vectors: [
        [
          { x: 531, y: 657 },
          { x: 564, y: 657 },
        ],
        [
          { x: 564, y: 657 },
          { x: 564, y: 721 },
        ],
        [
          { x: 564, y: 721 },
          { x: 531, y: 721 },
        ],
        [
          { x: 531, y: 721 },
          { x: 531, y: 657 },
        ],
      ],
      startPoint: { x: 531, y: 657 },
      section: "1",
      // fields: {
      //   section: 1,
      //   name: "Name",
      //   x: "531",
      //   y: "657",
      //   w: "33",
      //   h: "64",
      //   pub_date: "2023-05-12T20:34:19.054Z",
      // },
    },
    {
      model: "main.office",
      id: "2",
      vectors: [
        [
          { x: 378, y: 745 },
          { x: 408, y: 745 },
        ],
        [
          { x: 408, y: 745 },
          { x: 408, y: 806 },
        ],
        [
          { x: 408, y: 806 },
          { x: 378, y: 806 },
        ],
        [
          { x: 378, y: 806 },
          { x: 378, y: 745 },
        ],
      ],
      startPoint: { x: 378, y: 745 },
      section: 1,
      fields: {
        section: 1,
        name: "Name",
        x: "378",
        y: "745",
        w: "30",
        h: "61",
        pub_date: "2023-05-12T20:34:19.049Z",
      },
    },
    {
      model: "main.office",
      pk: 1,
      fields: {
        section: 1,
        name: "Name",
        x: "443",
        y: "745",
        w: "57",
        h: "61",
        pub_date: "2023-05-12T20:34:19.044Z",
      },
    },
  ],
}

// {
//   model: "main.office",
//     pk: 1,
//   fields: {
//   section: 1,
//     name: "Name",
//     x: "443",
//     y: "745",
//     w: "57",
//     h: "61",
//     pub_date: "2023-05-12T20:34:19.044Z",
// },
// },

// export type TAuditoriumReborn = {
//   id?: string
//   //[[{x: 0, y: 0},{x: 0, y:4}], [{x: 0, y: 4},{x: 4, y:4}], [{x: 4, y: 4},{x: 4, y:0}], [{x: 4, y: 0},{x: 0, y:4}]]
//   vectors: [TCoords, TCoords][]
//   startPoint: TCoords
//   entryPoint?: TCoords
//   section: string
// }
const parseOffice = (data: any) => {
  const { pk, fields } = data
  let { section, x, y, w, h } = fields
  x = Number(x)
  y = Number(y)
  w = Number(w)
  h = Number(h)
  section = String(section)
  return {
    id: String(pk),
    section: section,
    startPoint: { x, y },
    vectors: [
      [
        { x: x, y: y },
        { x: x + w, y: y },
      ],
      [
        { x: x + w, y: y },
        { x: x + w, y: y + h },
      ],
      [
        { x: x + w, y: y + h },
        { x: x, y: y + h },
      ],
      [
        { x: x, y: y + h },
        { x: x, y: y },
      ],
    ],
  }
}
const parseHallway = (data: any) => {
  const { pk, fields } = data
  let { x, y, w, h } = fields
  x = Number(x)
  y = Number(y)
  w = Number(w)
  h = Number(h)
  return {
    id: String(pk),
    coords: [
      [
        { x: x, y: y },
        { x: x + w, y: y },
      ],
      [
        { x: x + w, y: y },
        { x: x + w, y: y + h },
      ],
      [
        { x: x + w, y: y + h },
        { x: x, y: y + h },
      ],
      [
        { x: x, y: y + h },
        { x: x, y: y },
      ],
    ],
  }
}

export const parseToCorrData = (data: any) => {
  const { hallways, offices } = data
  const newOffices = offices.map((office: any) => parseOffice(office))
  const newHallways = hallways.map((hallway: any) => parseHallway(hallway))
  return { ...data, hallways: newHallways, offices: newOffices }
}
