import React, { useContext, useEffect, useMemo } from "react"
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
import {
  auditoriumsConfigSecond,
  configSectionsGraphSecond,
  neighborsGraphSecond,
  wallsSecond,
} from "./config-irit-rtf-second"
import {
  auditoriumsConfigThird,
  configSectionsGraphThird,
  neighborsGraphThird,
  wallsThird,
} from "./config-irit-rtf-third"
import {
  auditoriumsConfigFourth,
  configSectionsGraphFourth,
  neighborsGraphFourth,
  wallsFourth,
} from "./config-irit-rtf-fourth"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  const { floor } = useContext(ChosenContext)

  console.log(floor)

  // Конфигурация аудиторий стен и графов
  const everyFloorAuds = useMemo(() => {
    return [
      ...auditoriumsConfigSecond,
      ...auditoriumsConfig,
      ...auditoriumsConfigThird,
      ...auditoriumsConfigFourth,
    ]
  }, [])

  const everyFloorWalls = useMemo(() => {
    return [...walls, ...wallsSecond, ...wallsThird, ...wallsFourth]
  }, [])

  const everyFloorGraph = useMemo(() => {
    return [
      ...neighborsGraphSecond,
      ...neighborsGraph,
      ...neighborsGraphThird,
      ...neighborsGraphFourth,
    ]
  }, [])

  const everyFloorSections = useMemo(() => {
    return [
      ...configSectionsGraph,
      ...configSectionsGraphSecond,
      ...configSectionsGraphThird,
      ...configSectionsGraphFourth,
    ]
  }, [])

  useEffect(() => {
    const audGraphs = getGraphsFromAuditoriums(everyFloorAuds)
    setGraphRegistry([...everyFloorGraph, ...audGraphs, ...everyFloorSections])
  }, [everyFloorAuds, everyFloorGraph, everyFloorSections, setGraphRegistry])

  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {everyFloorAuds
          .filter((aud) => aud.floor === floor)
          .map((aud) => (
            <Auditorium
              key={aud.id}
              id={aud.id}
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
        {everyFloorGraph
          .filter((gr) => gr.floor === floor)
          .map((graph, index) => (
            <Graph graph={graph} key={index} />
          ))}
        {everyFloorWalls
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
