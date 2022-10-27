import React, { useEffect } from "react"
import { Layer } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side, TCoords } from "../../shared/model/geometry"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"
import { useGraphContext } from "../../shared/providers/graph-context/lib/use-graph-context"

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

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  useEffect(() => {
    const graphs = auditoriumsConfig.reduce((graph: TGraph[], config) => {
      let points: TCoords
      switch (config.entry) {
        case Side.TOP:
          points = { x: config.coords.x + config.width / 2, y: config.coords.y }
          break
        case Side.BOTTOM:
          points = {
            x: config.coords.x + config.width / 2,
            y: config.coords.y + config.height,
          }
          break
        case Side.LEFT:
          points = {
            x: config.coords.x,
            y: config.coords.y + config.height / 2,
          }
          break
        case Side.RIGHT:
          points = {
            x: config.coords.x + config.width,
            y: config.coords.y + config.height / 2,
          }
      }
      return [
        ...graph,
        {
          destination: GraphDestination.AUDITORIUM,
          height: 25,
          isFilled: true,
          neighbors: [],
          direction: config.entry,
          points: [points.x, points.y],
        } as TGraph,
      ]
    }, [])
    setGraphRegistry(graphs)
  }, [setGraphRegistry])
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
      </Layer>
    </MapStage>
  )
}
