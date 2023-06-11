import React, { useEffect, useMemo } from "react"
import { v1 as uuid } from "uuid"
import { useChosenStore } from "../../../../shared/stores/chosen/lib/use-chosen-store"
import { Colors } from "../../../../shared/constants"
import { Group, Line, Rect, Text } from "react-konva"
import { TAuditorium } from "../../../../entities/section/section"
import { getEntryPoints } from "../../../../entities/graph/lib/use-graph"
import { getEntryPointBySection } from "../utils/helpers"
import { TCoords } from "../../../../shared/model/geometry"

export const TestShapedAud: React.FC<
  Partial<TAuditorium> & {
    fill?: string
    strokeWidth?: number
    corridor?: [TCoords, TCoords][]
    sectionId: number
    position: "vertical" | "horizontal"
  }
> = ({
  id,
  position,
  fill,
  corridor,
  startPoint,
  strokeWidth = 1,
  section,
  sectionId,
  vectors,
}) => {
  const { setStartId, setEndId, setStartAud, setEndAud, startId, endId } =
    useChosenStore()
  const colors = useMemo(() => {
    if (String(id) === endId) {
      return Colors.LightGreen
    }
    if (String(id) === startId) {
      return Colors.LightOrange
    }
    return "white"
  }, [endId, id, startId])
  return (
    <Group
      globalCompositeOperation="destination-over"
      onClick={() => {
        if (!vectors || !section || !id) return
        const start = vectors[0][0]
        const entryPoint = vectors[1][0]
        if (!startId) {
          setStartAud({
            entryPoint: getEntryPointBySection({
              position: position,
              auditoriumCoords: vectors,
              corridorCoords: corridor,
            }),
            startPoint: start,
            vectors: vectors,
            section,
            id: sectionId,
          })
          setStartId(String(id) || "")
        } else {
          setEndAud({
            entryPoint: getEntryPointBySection({
              position: position,
              auditoriumCoords: vectors,
              corridorCoords: corridor,
            }),
            startPoint: start,
            vectors: vectors,
            section,
            id: sectionId,
          })
          setEndId(String(id) || "")
        }
      }}
    >
      {vectors && startPoint && (
        <Group>
          <Rect
            x={Number(startPoint?.x)}
            y={Number(startPoint?.y)}
            width={Math.floor(Math.abs(vectors[1][1].x - vectors[1][0].x))}
            height={Math.floor(Math.abs(vectors[0][1].y - vectors[0][0].y))}
            stroke="black"
            fill={colors}
            name={String(id)}
            strokeWidth={1}
          ></Rect>
          <Text
            fontSize={10}
            fill="black"
            x={Number(startPoint?.x)}
            y={Number(startPoint?.y)}
            text={String(id)}
          />
        </Group>
      )}
      {/* { для коридора } */}
      {!startPoint &&
        vectors?.map((v) => {
          return (
            <Line
              points={[v[0].x, v[0].y, v[1].x, v[1].y]}
              stroke="black"
              strokeWidth={strokeWidth}
              key={uuid()}
            />
          )
        })}
    </Group>
  )
}
