import React from "react"
import { Layer, Stage } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { TAuditorium } from "../../entities/auditorium/model/interface"

const auditoriumsConfig: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 245 },
    entry: { x: 75, y: 200 },
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 245 },
    entry: { x: 75, y: 200 },
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 245 },
    entry: { x: 75, y: 200 },
  },
  {
    name: "РИ-104",
    height: 200,
    width: 150,
    coords: { x: 800, y: 245 },
    entry: { x: 75, y: 200 },
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: { x: 75, y: 0 },
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: { x: 75, y: 0 },
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: { x: 75, y: 0 },
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: { x: 75, y: 0 },
  },
]

export const IritRtf: React.FC = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {auditoriumsConfig.map(({ name, coords, entry, height, width }) => (
          <Auditorium
            key={name}
            name={name}
            height={height}
            width={width}
            coords={coords}
            entry={entry}
          />
        ))}
      </Layer>
    </Stage>
  )
}
