import { FC, useEffect, useMemo, useState } from "react"
import { TCoords } from "../../../shared/model/geometry"
import { testSection } from "../test/config-test"
import { useChosenStore } from "../../../shared/stores/chosen/lib/use-chosen-store"
import {
  findPathThroughSection,
  RectangleVector,
} from "../../../shared/pathFinding/find-path-through-section"
import { MapStage } from "../../../entities/map-stage/ui/map-stage"
import { Layer, Line } from "react-konva"
import { ShapedAuditorium } from "../../../entities/auditorium/ui/auditorium"
import {
  parseToCorrData,
  testUniv,
  testUnivUpdated,
} from "../../../shared/constants"

export const NewTest: FC = () => {
  const [path, setPath] = useState<[TCoords, TCoords][]>()
  const { offices, hallways } = useMemo(
    () => parseToCorrData(testUniv),
    [testUniv],
  )
  const sections = testSection
  const { startAud, endAud } = useChosenStore()
  useEffect(() => {
    if (startAud?.entryPoint && endAud?.entryPoint) {
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
  console.log(parseToCorrData(testUniv))
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {/* {sections.auds.map((aud) => { */}
        {/*   return <ShapedAuditorium key={aud.id} {...aud} /> */}
        {/* })} */}
        {offices.map((aud) => {
          return <ShapedAuditorium key={aud.id} {...aud} />
        })}
        <ShapedAuditorium
          vectors={hallways[0].coords as [TCoords, TCoords][]}
          fill="green"
          startPoint={{
            x: 471,
            y: 53,
          }}
          section="123123"
        />
        <ShapedAuditorium
          vectors={hallways[1].coords as [TCoords, TCoords][]}
          fill="green"
          startPoint={{
            x: 343,
            y: 721,
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
