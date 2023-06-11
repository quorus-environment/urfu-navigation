import { Group, Line } from "react-konva"
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

  const { startAud, endAud } = useChosenStore()
  useEffect(() => {
    if (startAud?.entryPoint && endAud?.entryPoint && corridor.length === 4) {
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
          vectors: corridor as RectangleVector,
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
        return <TestShapedAud key={uuid()} {...aud} />
      })}
      {/* {corridor} */}
      <TestShapedAud strokeWidth={0.5} fill="black" vectors={corridor} />
      {/* {path} */}
      {path?.map((v) => (
        <Line
          key={uuid()}
          points={v.map((coords) => [coords.x, coords.y]).flat()}
          stroke="red"
        />
      ))}
    </Group>
  )
}
