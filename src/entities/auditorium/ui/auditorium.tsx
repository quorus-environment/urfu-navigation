import React, { memo, useCallback, useContext, useMemo } from "react"
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
 * @param entryOffset - Отклонение входа от центра
 * @param id - id
 * */
const CAuditorium: React.FC<TAuditorium> = ({
  name,
  coords,
  entry,
  width,
  height,
  section,
  floor,
  entryOffset = 0,
  id,
}) => {
  // Получаем выбранные элементы
  const { startId, endId, setEndId, setStartId, setStartName, setEndName } =
    useContext(ChosenContext)
  const { coloredGraph } = useGraphContext()

  // Координаты текста (по центру)
  // Изначально крайняя верхняя-левая позиция ставится на центр и отнимается
  // половина от сторон, чтобы x и y подстроились под размеры текста
  const textCoords: TCoords = useMemo(() => {
    return { x: coords.x + width / 2 - 50, y: coords.y + height / 2 - 8 }
  }, [coords, width, height])

  // Вычисляем координаты входа
  const entryCoords = useEntryCoords(entry, coords, width, height, entryOffset)

  const onClick = useCallback(
    (startId: string | null) => {
      if (!startId) {
        setStartId(id || name)
        setStartName(name)
        return
      }
      if (id !== startId) {
        setEndId(id || name)
        setEndName(name)
      }
    },
    [id, setStartId, name, setStartName, setEndId, setEndName],
  )

  // Описание начальной и конечной точки
  const description = usePointsDeclaration(name)

  const { graph: auditoriumGraph } = useGraph(
    id || name,
    GraphDestination.AUDITORIUM,
    [entryCoords.x, entryCoords.y],
    entry,
    25,
    section,
    floor,
  )

  const color = useMemo(() => {
    if (startId === id) {
      return Colors.LightRed
    }
    if (endId === id) {
      return Colors.LightYellow
    }
    if (coloredGraph.includes(id || name)) {
      return Colors.LightGray
    }
  }, [coloredGraph, endId, id, name, startId])

  return (
    <Group
      onClick={() => onClick(startId)}
      onTap={() => onClick(startId)}
      globalCompositeOperation="destination-over"
    >
      <Circle
        width={6}
        height={6}
        fill="none"
        x={entryCoords.x}
        y={entryCoords.y}
      />
      <Rect
        width={width}
        x={coords.x}
        y={coords.y}
        height={height}
        fill={color}
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

export const Auditorium = memo(CAuditorium)
