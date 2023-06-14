import { MapStage } from "../../../entities/map-stage/ui/map-stage"
import { Layer } from "react-konva"
import { testData } from "./test-data"
import { Section, TSection } from "../../../entities/section/section"
import React, { useEffect } from "react"
import { useChosenStore } from "../../../shared/stores/chosen/lib/use-chosen-store"
import { useSearchParams } from "react-router-dom"
import Modal from "../../../shared/modal/modal"
import AuditoriumEditor from "../../../shared/auditoriumEditor/auditoriumEditor"

//test-floor
export const TestUniv = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const role = searchParams.get("role") || ""

  const {
    startAud,
    endAud,
    setStartAud,
    setEndAud,
    setEndId,
    setStartId,
    startId,
    endId,
  } = useChosenStore()
  useEffect(() => {
    //для сброса при клике на исходный кабинет
    if (startId === endId) {
      setStartAud(undefined)
      setEndAud(undefined)
      setEndId(null)
      setStartId(null)
    }
  }, [startAud, endAud, setStartAud, setEndAud])
  return (
    <>
      <MapStage>
        <Layer height={window.innerHeight - 60}>
          {testData.map((section: TSection) => (
            <Section key={section.id} data={section} />
          ))}
        </Layer>
      </MapStage>
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
