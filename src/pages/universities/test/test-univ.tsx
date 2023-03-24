import { testSection } from "./config-test"
import { MapStage } from "../../../widgets/renderer/ui/map-stage/ui/map-stage"
import { Layer, Line } from "react-konva"
import { ShapedAuditorium } from "../../../entities/auditorium/ui/auditorium"
import { useChosenStore } from "../../../widgets/renderer/model/chosen/lib/use-chosen-store"
import { useEffect, useState } from "react"
import {
  findPathThroughSection,
  RectangleVector,
} from "../../../features/path-finding/find-path-through-section"
import { TCoords } from "../../../shared/model/geometry"

export const TestUniv: React.FC = () => {
  const [path, setPath] = useState<[TCoords, TCoords][]>()

  const sections = testSection
  const { startAud, endAud } = useChosenStore()
  useEffect(() => {
    if (
      startAud?.entryPoint &&
      endAud?.entryPoint &&
      sections.corridor.length === 4
    ) {
      const path = findPathThroughSection(
        {
          x: startAud?.startPoint.x + startAud?.entryPoint.x,
          y: startAud?.entryPoint.y + startAud?.startPoint.y,
        },
        {
          x: endAud?.startPoint.x + endAud?.entryPoint.x,
          y: endAud?.entryPoint.y + endAud?.startPoint.y,
        },
        {
          vectors: sections.corridor as RectangleVector,
          transition: "vertical",
        },
      )
      setPath([
        [
          {
            x: startAud?.startPoint.x + startAud?.entryPoint.x,
            y: startAud?.entryPoint.y + startAud?.startPoint.y,
          },
          path.firstDistance,
        ],
        [path.firstDistance, path.secondDistance],
        [
          path.secondDistance,
          {
            x: endAud?.startPoint.x + endAud?.entryPoint.x,
            y: endAud?.entryPoint.y + endAud?.startPoint.y,
          },
        ],
      ])
    }
  }, [
    endAud,
    endAud?.entryPoint,
    endAud?.startPoint.x,
    endAud?.startPoint.y,
    sections.corridor,
    startAud,
    startAud?.entryPoint,
    startAud?.startPoint.x,
    startAud?.startPoint.y,
  ])
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {sections.auds.map((aud) => {
          return <ShapedAuditorium key={aud.id} {...aud} />
        })}
        <ShapedAuditorium
          vectors={sections.corridor}
          fill="green"
          startPoint={{
            x: 0,
            y: 0,
          }}
          section="123123"
        />
        {path?.map((v) => (
          <Line
            key={`${v[0].x}`}
            points={v.map((coords) => [coords.x, coords.y]).flat()}
            stroke="black"
          />
        ))}
      </Layer>
    </MapStage>
  )
}
