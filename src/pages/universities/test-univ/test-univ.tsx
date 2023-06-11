import { MapStage } from "../../../entities/map-stage/ui/map-stage"
import { Layer } from "react-konva"
import { testData } from "./test-data"
import { Section, TSection } from "../../../entities/section/section"

//test-floor
export const TestUniv = () => {
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {testData.map((section: TSection) => (
          <Section key={section.id} data={section} />
        ))}
      </Layer>
    </MapStage>
  )
}
