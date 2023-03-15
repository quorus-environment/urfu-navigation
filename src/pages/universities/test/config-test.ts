import {
  TAuditoriumReborn,
  TSectionReborn,
} from "../../../entities/auditorium/model/interface"

const testSectionAuds: TAuditoriumReborn[] = [
  {
    entryPoint: { x: 20, y: 25 },
    section: "uidsu-123jsa-weq-wwe21-werr",
    id: "uidsu-123jsa-weq-wwe21-werr-aud",
    startPoint: { x: 0, y: 0 },
    vectors: [
      [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
      ],
      [
        { x: 20, y: 0 },
        { x: 20, y: 50 },
      ],
      [
        { x: 20, y: 50 },
        { x: 0, y: 50 },
      ],
      [
        { x: 0, y: 50 },
        { x: 0, y: 0 },
      ],
    ],
  },
  {
    entryPoint: { x: 0, y: 25 },
    section: "uidsu-123jsa-weq-wwe21-werr",
    id: "uidsu-123jsa-weq-wwe21-werr-aud2",
    startPoint: { x: 40, y: 50 },
    vectors: [
      [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
      ],
      [
        { x: 20, y: 0 },
        { x: 20, y: 50 },
      ],
      [
        { x: 20, y: 50 },
        { x: 0, y: 50 },
      ],
      [
        { x: 0, y: 50 },
        { x: 0, y: 0 },
      ],
    ],
  },
]

export const testSection: TSectionReborn = {
  auds: testSectionAuds,
  corridor: [
    [
      { x: 20, y: 0 },
      { x: 40, y: 0 },
    ],
    [
      { x: 40, y: 0 },
      { x: 40, y: 100 },
    ],
    [
      { x: 40, y: 100 },
      { x: 20, y: 100 },
    ],
    [
      { x: 20, y: 100 },
      { x: 20, y: 0 },
    ],
  ],
  floor: 1,
  id: "uidsu-123jsa-weq-wwe21-werr",
}
