import React, { useEffect } from "react"
import { Layer, Line } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { Graph } from "../../entities/graph/ui/graph"
import { getGraphsFromAuditoriums } from "../../entities/auditorium/lib/get-graphs-from-auditoriums"
import { useIritRtfEntities } from "./use-irit-rtf-entities"
import { useChosenStore } from "../../shared/stores/chosen/lib/use-chosen-store"
import { useGraphStore } from "../../shared/stores/graph-context/lib/use-graph-store"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphStore()
  const floor = useChosenStore((st) => st.floor)

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
