import React, { useCallback, useContext, useEffect, useMemo } from "react"
import { Circle, Group, Rect } from "react-konva"
import { TAuditorium } from "../model/interface"
import { TCoords } from "../../../shared/model/geometry"
import { Graph } from "../../graph/ui/graph"
import { GraphDestination } from "../../graph/model/interface"
import { ChosenContext } from "../../../shared/providers/chosen-context/ui/chosen-provider"
import { AuditoriumTitle } from "./auditorium-title"
import { useEntryCoords } from "../lib/use-entry-coords"
import { Colors } from "../../../shared/constants"
import { usePointsDeclaration } from "../lib/use-points-declaration"
import { useGraph } from "../../graph/lib/use-graph"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"
import { findPaths } from "../../../find-path"

/**
 * компонент аудитории: пока это просто квадратик с названием и входом, дальше будем расширять до
 * геометрического описания
 * @param entry - Описание координат входа Не должен быть больше ширины и/или высоты
 * @param coords - Описание координат начальной точки
 * @param name - Название аудитории
 * @param height - Высота
 * @param width - Ширина
 * @param section - Секция
 * @param floor - Этаж
 * */
export const Auditorium: React.FC<TAuditorium> = ({
  name,
  coords,
  entry,
  width,
  height,
  section,
  floor,
}) => {
  // Получаем выбранные элементы
  const { startId, endId, setEndId, setStartId } = useContext(ChosenContext)
  const { graph, setColoredGraph } = useGraphContext()

  useEffect(() => {
    if (startId && endId) {
      const path = findPaths(startId, endId, graph)
      setColoredGraph(path)
    }
  }, [endId, graph, setColoredGraph, startId])

  // Координаты текста (по центру)
  // Изначально крайняя верхняя-левая позиция ставится на центр и отнимается
  // половина от сторон, чтобы x и y подстроились под размеры текста
  const textCoords: TCoords = useMemo(() => {
    return { x: coords.x + width / 2 - 50, y: coords.y + height / 2 - 8 }
  }, [coords, width, height])

  // Вычисляем координаты входа
  const entryCoords = useEntryCoords(entry, coords, width, height)

  const onClick = useCallback(() => {
    if (!startId) {
      setStartId(name)
      return
    }
    if (name !== startId) {
      setEndId(name)
    }
  }, [startId, name, setStartId, setEndId])

  // Описание начальной и конечной точки
  const description = usePointsDeclaration(name)

  const { graph: auditoriumGraph } = useGraph(
    name,
    GraphDestination.AUDITORIUM,
    [entryCoords.x, entryCoords.y],
    entry,
    25,
    section,
    floor,
  )

  return (
    <Group onClick={onClick} globalCompositeOperation="destination-over">
      <Circle
        width={10}
        height={10}
        fill="red"
        x={entryCoords.x}
        y={entryCoords.y}
      />
      <Rect
        width={width}
        x={coords.x}
        y={coords.y}
        height={height}
        fill={
          startId === name
            ? Colors.LightRed
            : endId === name
            ? Colors.LightYellow
            : undefined
        }
        stroke="black"
        strokeWidth={3}
        strokeEnabled
      />
      <AuditoriumTitle
        title={name}
        x={textCoords.x}
        y={textCoords.y}
        description={description?.description}
        descriptionColor={description?.descriptionColor}
      />
      <Graph graph={auditoriumGraph} />
    </Group>
  )
}
