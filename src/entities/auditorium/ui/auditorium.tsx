import React, { memo, useCallback, useEffect, useMemo } from "react"
import { Circle, Group, Line, Rect } from "react-konva"
import { TAuditorium, TAuditoriumReborn } from "../model/interface"
import { TCoords } from "../../../shared/model/geometry"
import { Graph } from "../../graph/ui/graph"
import { GraphDestination } from "../../graph/model/interface"
import { AuditoriumTitle } from "./auditorium-title"
import { useEntryCoords } from "../lib/use-entry-coords"
import { usePointsDeclaration } from "../lib/use-points-declaration"
import { useGraph } from "../../graph/lib/use-graph"
import { useChosenStore } from "../../../widgets/renderer/model/chosen/lib/use-chosen-store"
import { useGraphStore } from "../../../widgets/renderer/model/graph-context/lib/use-graph-store"
import { Colors } from "@quorus/quorus-ui-kit"

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
 * @param destination - Назначение
 * @param graphHeight - Назначение
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
  id,
  destination,
  entryOffset = 0,
  graphHeight = 25,
}) => {
  // Получаем выбранные элементы
  const {
    startId,
    setStartId,
    endId,
    setEndId,
    setEndName,
    setStartName,
    endName,
  } = useChosenStore()
  const { coloredGraph, setColoredGraph } = useGraphStore()

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
    graphHeight,
    section,
    floor,
  )

  const color = useMemo(() => {
    if (startId === id) {
      return Colors.LightRed
    }
    if (endId === id) {
      return Colors.LightGreen
    }
    if (coloredGraph.includes(id || name)) {
      return Colors.LightYellow
    }
    if (destination === GraphDestination.FOODCORT) {
      return Colors.LightOrange
    }
    if (
      destination === GraphDestination.OTHER ||
      destination === GraphDestination.LADDER
    ) {
      return Colors.LightGray
    }
    if (destination === GraphDestination.TOILET_WOMAN) {
      return Colors.LightPink
    }
    if (destination === GraphDestination.TOILET_MAN) {
      return Colors.LightBlue
    }
  }, [coloredGraph, destination, endId, id, name, startId])

  return (
    <Group
      onClick={() => onClick(startId)}
      onDblClick={() => {
        if (startId === name) {
          setStartId(endId)
          setStartName(endName)
          setEndName(null)
          setEndId(null)
          setColoredGraph([])
        }
      }}
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

export const ShapedAuditorium: React.FC<
  TAuditoriumReborn & { fill?: string }
> = ({ id, startPoint, entryPoint, section, vectors }) => {
  const { setStartId, setEndId, setStartAud, setEndAud, startId, endId } =
    useChosenStore()
  useEffect(() => {
    console.log(startId)
  })

  const colors = useMemo(() => {
    if (id === endId) {
      return Colors.LightGreen
    }
    if (id === startId) {
      return Colors.LightOrange
    }
    return "black"
  }, [endId, id, startId])
  return (
    <Group
      globalCompositeOperation="destination-over"
      onClick={() => {
        if (!startId) {
          setStartAud({ entryPoint, startPoint, vectors, section, id })
          setStartId(id || "")
        } else {
          setEndAud({ entryPoint, startPoint, vectors, section, id })
          setEndId(id || "")
        }
      }}
    >
      {entryPoint && (
        <Circle
          width={6}
          height={6}
          fill="none"
          x={startPoint.x + entryPoint?.x}
          y={startPoint.y + entryPoint?.y}
        />
      )}

      {vectors.map((v) => {
        return (
          <Line
            points={[
              v[0].x + startPoint.x,
              v[0].y + startPoint.y,
              v[1].x + startPoint.x,
              v[1].y + startPoint.y,
            ]}
            stroke={colors}
            strokeWidth={3}
            fillEnabled
            key={`${v[0]} ${v[1]}`}
          />
        )
      })}

      {/* <AuditoriumTitle */}
      {/*   title={name} */}
      {/*   x={textCoords.x} */}
      {/*   y={textCoords.y} */}
      {/*   description={description?.description} */}
      {/*   descriptionColor={description?.descriptionColor} */}
      {/* /> */}
    </Group>
  )
}

export const Auditorium = memo(CAuditorium)
