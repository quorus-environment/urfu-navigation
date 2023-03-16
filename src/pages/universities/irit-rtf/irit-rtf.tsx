import React, { useEffect } from "react"
import { getGraphsFromAuditoriums } from "../../../entities/auditorium/lib/get-graphs-from-auditoriums"
import { useIritRtfEntities } from "./use-irit-rtf-entities"
import { useGraphStore } from "../../../shared/stores/graph-context/lib/use-graph-store"
import { Renderer } from "../../../entities/renderer/renderer"
import { useSearchParams } from "react-router-dom"
import Modal from "../../../shared/modal/modal"
import AuditoriumEditor from "../../../shared/auditoriumEditor/auditoriumEditor"

export const IritRtf: React.FC = () => {
  const { setGraphRegistry } = useGraphStore()
  const [searchParams, setSearchParams] = useSearchParams()
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
    <>
      <Renderer
        cabs={everyFloorAuds}
        graphs={everyFloorGraph}
        walls={everyFloorWalls}
      />
      {searchParams.get("role") === "admin" && searchParams.get("id") && (
        <Modal
          handleClose={() => {
            searchParams.delete("id")
            setSearchParams(searchParams)
          }}
          title="Auditorium Editor"
        >
          <AuditoriumEditor />
        </Modal>
      )}
    </>
  )
}
