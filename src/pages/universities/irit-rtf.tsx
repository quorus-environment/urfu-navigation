import React from "react"
import { Layer } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { Graph } from "../../entities/graph/ui/graph"
import { MapStage } from "../../entities/map-stage/ui/map-stage"

const auditoriumsConfig: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-104",
    height: 200,
    width: 150,
    coords: { x: 800, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: Side.TOP,
  },
]

export const IritRtf: React.FC = () => {
  return (
    <MapStage>
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
        <Graph points={[350, 475]} direction={Side.RIGHT} height={600} />
      </Layer>
    </MapStage>
  )
}
