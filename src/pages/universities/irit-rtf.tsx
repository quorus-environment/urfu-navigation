import React, { useContext, useEffect } from "react"
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
import { ChosenContext } from "../../shared/providers/chosen-context/ui/chosen-provider"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  const { floor } = useContext(ChosenContext)
  useEffect(() => {
    const audGraphs = getGraphsFromAuditoriums(auditoriumsConfig)
    setGraphRegistry([...neighborsGraph, ...audGraphs, ...configSectionsGraph])
  }, [setGraphRegistry])

  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {auditoriumsConfig
          .filter((aud) => aud.floor === floor)
          .map((aud) => (
            <Auditorium
              key={aud.name}
              name={aud.name}
              height={aud.height}
              width={aud.width}
              coords={aud.coords}
              entry={aud.entry}
              floor={aud.floor}
              destination={aud.destination}
              section={aud.section}
              neighbors={aud.neighbors}
              entryOffset={aud.entryOffset}
            />
          ))}
        {neighborsGraph
          .filter((gr) => gr.floor === floor)
          .map((graph, index) => (
            <Graph graph={graph} key={index} />
          ))}
        {walls
          .filter((wall) => wall.floor === floor)
          .map((wall) => {
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
