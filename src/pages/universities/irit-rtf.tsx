import React, { useEffect } from "react"
import { Layer } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { Graph } from "../../entities/graph/ui/graph"
import { useGraphContext } from "../../shared/providers/graph-context/lib/use-graph-context"
import { getGraphsFromAuditoriums } from "../../entities/auditorium/lib/get-graphs-from-auditoriums"

const auditoriumsConfig: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-105"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-106", "cor_2"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_2", "РИ-107", "cor_3"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-101"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-102", "cor_2"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_2", "РИ-103", "cor_3"],
    floor: 1,
    section: 1,
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_3"],
    floor: 1,
    section: 1,
  },
]

const neighborsGraph: TGraph[] = [
  {
    id: "cor_1",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-102", "РИ-101", "РИ-105", "РИ-106", "cor_2"],
    direction: Side.RIGHT,
    points: [425, 475, 575, 475],
    section: 1,
    floor: 1,
  },
  {
    id: "cor_2",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-103", "РИ-102", "РИ-107", "РИ-106", "cor_1", "cor_3"],
    direction: Side.RIGHT,
    points: [575, 475, 725, 475],
    section: 1,
    floor: 1,
  },
  {
    id: "cor_3",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-108", "РИ-103", "РИ-107"],
    direction: Side.RIGHT,
    points: [725, 475, 875, 475],
    section: 1,
    floor: 1,
  },
]

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  useEffect(() => {
    const audGraphs = getGraphsFromAuditoriums(auditoriumsConfig)
    setGraphRegistry([...neighborsGraph, ...audGraphs])
  }, [setGraphRegistry])
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {auditoriumsConfig.map((aud) => (
          <Auditorium
            key={aud.name}
            name={aud.name}
            height={aud.height}
            width={aud.width}
            coords={aud.coords}
            entry={aud.entry}
            floor={aud.floor}
            section={aud.section}
            neighbors={aud.neighbors}
          />
        ))}
        {neighborsGraph.map((graph, index) => (
          <Graph graph={graph} key={index} />
        ))}
      </Layer>
    </MapStage>
  )
}
