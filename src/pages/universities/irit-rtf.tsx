import React, { useEffect } from "react"
import { Layer } from "react-konva"
import { Auditorium } from "../../entities/auditorium/ui/auditorium"
import { MapStage } from "../../entities/map-stage/ui/map-stage"
import { Graph } from "../../entities/graph/ui/graph"
import { useGraphContext } from "../../shared/providers/graph-context/lib/use-graph-context"
import { getGraphsFromAuditoriums } from "../../entities/auditorium/lib/get-graphs-from-auditoriums"
import { neighborsGraph, sectionsGraph } from "./config-default"
import { auditoriumsConfig } from "./config-irit-rtf"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphContext()
  useEffect(() => {
    const audGraphs = getGraphsFromAuditoriums(auditoriumsConfig)
    setGraphRegistry([...neighborsGraph, ...audGraphs, ...sectionsGraph])
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
      </Layer>
    </MapStage>
  )
}
