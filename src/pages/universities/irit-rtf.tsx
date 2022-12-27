import React, { useEffect } from "react"
import { Layer, Line } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { Graph } from "../../entities/graph/ui/graph"
import { useGraphContext } from "../../shared/providers/graph-context/lib/use-graph-context"
import { getGraphsFromAuditoriums } from "../../entities/auditorium/lib/get-graphs-from-auditoriums"
import {
  auditoriumsConfig,
  configSectionsGraph,
  neighborsGraph,
  walls,
} from "./config-irit-rtf"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  useEffect(() => {
    const audGraphs = getGraphsFromAuditoriums(auditoriumsConfig)
    setGraphRegistry([...neighborsGraph, ...audGraphs, ...configSectionsGraph])
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
            entryOffset={aud.entryOffset}
          />
        ))}
        {neighborsGraph.map((graph, index) => (
          <Graph graph={graph} key={index} />
        ))}
        {walls.map((wall) => {
          return (
            <Line
              width={wall.width}
              stroke="black"
              strokeWidth={3}
              points={[
                wall.x,
                wall.y,
                wall.x + wall.width,
                wall.y + wall.height,
              ]}
              fill="black"
              key={wall.x + wall.y}
            />
          )
        })}
      </Layer>
    </MapStage>
  )
}
