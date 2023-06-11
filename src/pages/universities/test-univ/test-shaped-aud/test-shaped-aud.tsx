import React, { useEffect, useMemo } from "react"
import { v1 as uuid } from "uuid"
import { useChosenStore } from "../../../../shared/stores/chosen/lib/use-chosen-store"
import { Colors } from "../../../../shared/constants"
import { Group, Line, Rect } from "react-konva"
import { TAuditorium } from "../../../../entities/section/section"

export const TestShapedAud: React.FC<
  Partial<TAuditorium> & { fill?: string; strokeWidth?: number }
> = ({ id, fill, strokeWidth = 1, startPoint, section, vectors }) => {
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

        if (!startId) {
          setStartAud({ startPoint, startPoint, vectors, section, id })
          setStartId(String(id) || "")
        } else {
          setEndAud({ startPoint, startPoint, vectors, section, id })
          setEndId(String(id) || "")
        }
      }}
    >
      {vectors && startPoint && (
        <Rect
          x={Number(startPoint?.x)}
          y={Number(startPoint?.y)}
          width={Math.floor(Math.abs(vectors[1][1].x - vectors[1][0].x))}
          height={Math.floor(Math.abs(vectors[0][1].y - vectors[0][0].y))}
          fill={colors}
          stroke="black"
          strokeWidth={1}
        ></Rect>
      )}
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
