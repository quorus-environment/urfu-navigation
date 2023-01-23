import React, { useContext, useEffect } from "react"
import { Layer, Line } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { Graph } from "../../entities/graph/ui/graph"
import { useGraphContext } from "../../shared/providers/graph-context/lib/use-graph-context"
import { getGraphsFromAuditoriums } from "../../entities/auditorium/lib/get-graphs-from-auditoriums"
import { ChosenContext } from "../../shared/providers/chosen-context/ui/chosen-provider"
import { useIritRtfEntities } from "./use-irit-rtf-entities"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  const { floor } = useContext(ChosenContext)

  const {
    everyFloorSections,
    everyFloorWalls,
    everyFloorGraph,
    everyFloorAuds,
  } = useIritRtfEntities()

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
            <Auditorium key={aud.id} {...aud} />
          ))}
        {everyFloorGraph
          .filter((gr) => gr.floor === floor)
          .map((graph) => (
            <Graph graph={graph} key={graph.id + graph.height} />
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
