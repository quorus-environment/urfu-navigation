import React from "react"
import { Layer } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { Graph } from "../../entities/graph/ui/graph"

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

const neighborsGraph: TGraph[] = [
  {
    id: "cor_1",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: [],
    direction: Side.RIGHT,
    points: [425, 475, 575, 475],
  },
  {
    id: "cor_2",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: [],
    direction: Side.RIGHT,
    points: [575, 475, 725, 475],
  },
  {
    id: "cor_3",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: [],
    direction: Side.RIGHT,
    points: [725, 475, 875, 475],
  },
]

export const IritRtf: React.FC = () => {
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
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
        {neighborsGraph.map((graph, index) => (
          <Graph graph={graph} key={index} />
        ))}
      </Layer>
    </MapStage>
  )
}
