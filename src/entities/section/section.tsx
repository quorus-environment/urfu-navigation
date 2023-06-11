import { Group, Layer, Line, Text } from "react-konva"
import { FC, useEffect, useState } from "react"
import { TCoords } from "../../shared/model/geometry"
import { v1 as uuid } from "uuid"
import { ShapedAuditorium } from "../auditorium/ui/auditorium"
import { TestShapedAud } from "../../pages/universities/test-univ/test-shaped-aud/test-shaped-aud"
import {
  findPathThroughSection,
  RectangleVector,
} from "../../shared/pathFinding/find-path-through-section"
import { useChosenStore } from "../../shared/stores/chosen/lib/use-chosen-store"

type TNeighbor = {
  id: number
  neighbor_id: number
  section_id: number
  pub_date: string
}

export type TAuditorium = {
  id: number
  vectors: [TCoords, TCoords][]
  startPoint: { x: string; y: string }
  section: number
}

export type TSection = {
  id: number
  auds: TAuditorium[]
  corridor: [TCoords, TCoords][]
  position: "ver" | "hr"
  floor: string
  neighbors: TNeighbor[]
}

interface ISection {
  data: TSection
}

export const Section: FC<ISection> = ({
  data: { auds, floor, neighbors, id, position, corridor },
}) => {
  const [path, setPath] = useState<[TCoords, TCoords][]>()

  const { startAud, endAud, startId, endId } = useChosenStore()
  console.log(startAud, endAud, "!!!")
  useEffect(() => {
    if (!startId && !endId) setPath([])
  }, [startId, endId])

  console.log(path)
  useEffect(() => {
    if (startAud?.entryPoint && endAud?.entryPoint && corridor.length === 4) {
      const path = findPathThroughSection(
        {
          x: startAud?.entryPoint.x,
          y: startAud?.entryPoint.y,
        },
        {
          x: endAud?.entryPoint.x,
          y: endAud?.entryPoint.y,
        },
        {
          //переворачиваем тк в алгоритме рисовка происходит по часовой стрелке
          vectors: [...corridor].reverse() as RectangleVector,
          transition: position === "ver" ? "vertical" : "horizontal",
        },
      )
      setPath([
        [
          {
            x: startAud?.entryPoint.x,
            y: startAud?.entryPoint.y,
          },
          path.firstDistance,
        ],
        [path.firstDistance, path.secondDistance],
        [
          path.secondDistance,
          {
            x: endAud?.entryPoint.x,
            y: endAud?.entryPoint.y,
          },
        ],
      ])
    }
  }, [
    endAud,
    endAud?.entryPoint,
    endAud?.startPoint.x,
    endAud?.startPoint.y,
    corridor,
    startAud,
    startAud?.entryPoint,
    startAud?.startPoint.x,
    startAud?.startPoint.y,
  ])
  return (
    <Group>
      {/* {auditoriums} */}
      {auds.map((aud) => {
        return (
          <TestShapedAud
            position={position === "ver" ? "vertical" : "horizontal"}
            corridor={corridor}
            sectionId={id}
            key={uuid()}
            {...aud}
          />
        )
      })}
      {/* {corridor} */}
      <TestShapedAud
        sectionId={id}
        position={position === "ver" ? "vertical" : "horizontal"}
        strokeWidth={0.5}
        fill="black"
        vectors={corridor}
      />
      {/* {path} (условия проверки на то что обе аудитории находятся в одной секции) */}
      {startAud?.id === id &&
        endAud?.id === id &&
        path?.map((v, i) => (
          <Line
            key={uuid()}
            points={v.map((coords) => [coords.x, coords.y]).flat()}
            stroke="green"
          />
        ))}
    </Group>
  )
}
