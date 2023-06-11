import { MapStage } from "../../../entities/map-stage/ui/map-stage"
import { Layer } from "react-konva"
import { testData } from "./test-data"
import { Section, TSection } from "../../../entities/section/section"
import { useEffect } from "react"
import { useChosenStore } from "../../../shared/stores/chosen/lib/use-chosen-store"

//test-floor
export const TestUniv = () => {
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
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {testData.map((section: TSection) => (
          <Section key={section.id} data={section} />
        ))}
        {/* <Section key={testData[0].id} data={testData[0]} />  */}
      </Layer>
    </MapStage>
  )
}
