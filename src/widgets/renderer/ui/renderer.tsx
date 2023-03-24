import { MapStage } from "./map-stage/ui/map-stage"
import { Layer, Line } from "react-konva"
import { TAuditorium } from "../../../entities/auditorium/model/interface"
import { TGraph } from "../../../entities/graph/model/interface"
import { useChosenStore } from "../model/chosen/lib/use-chosen-store"
import { Auditorium } from "../../../entities/auditorium/ui/auditorium"
import React from "react"
import { Graph } from "../../../entities/graph/ui/graph"

export type Wall = {
  x: number
  y: number
  width: number
  height: number
  floor: number
}

export type RendererProperties = {
  walls: Wall[]
  cabs: TAuditorium[]
  graphs: TGraph[]
}

/**
 * Компонент рендеринга здания
 * Основная цель - уменьшить количество параметров необходимых для
 * полной реализации карты
 * */
export const Renderer: React.FC<RendererProperties> = ({
  walls,
  cabs,
  graphs,
}) => {
  // Получаем текущий этаж
  const floor = useChosenStore((st) => st.floor)
  return (
    <MapStage>
      <Layer height={window.innerHeight - 60}>
        {cabs
          .filter((aud) => aud.floor === floor)
          .map((aud) => (
            <Auditorium key={aud.id} {...aud} />
          ))}
        {graphs
          .filter((gr) => gr.floor === floor)
          .map((graph) => (
            <Graph graph={graph} key={graph.id + graph.height} />
          ))}
        {walls
          .filter((wall) => wall.floor === floor)
          .map((wall) => {
            return (
              <Line
                width={wall.width}
                stroke="black"
                strokeWidth={3}
                points={[
                  wall.x,
                  wall.y,
                  wall.x + wall.width,
                  wall.y + wall.height,
                ]}
                fill="black"
                key={wall.x + wall.y}
              />
            )
          })}
      </Layer>
    </MapStage>
  )
}
