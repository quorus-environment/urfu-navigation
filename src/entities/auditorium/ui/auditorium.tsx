import React, { useCallback, useContext, useMemo } from "react"
import { Circle, Group, Rect, Text } from "react-konva"
import { TAuditorium } from "../model/interface"
import { Side, TCoords } from "../../../shared/model/geometry"
import { Graph } from "../../graph/ui/graph"
import { GraphDestination } from "../../graph/model/interface"
import { ChosenContext } from "../../../shared/providers/chosenContext/ui/chosen-provider"

/**
 * компонент аудитории: пока это просто квадратик с названием и входом, дальше будем расширять до
 * геометрического описания
 * @param entry - Описание координат входа Не должен быть больше ширины и/или высоты
 * @param coords - Описание координат начальной точки
 * @param name - Название аудитории
 * @param height - Высота
 * @param width - Ширина
 * */
export const Auditorium: React.FC<TAuditorium> = ({
  name,
  coords,
  entry,
  width,
  height,
}) => {
  // Получаем выбранные элементы
  const { startId, endId, setEndId } = useContext(ChosenContext)

  // Изначально крайняя верхняя-левая позиция ставится на центр и отнимается половина от сторон,
  // чтобы x и y подстроились под размеры текста
  const textCoords: TCoords = useMemo(() => {
    return { x: coords.x + width / 2 - 50, y: coords.y + height / 2 - 8 }
  }, [])

  // Вычисляем координаты входа
  const entryCoords: TCoords = useMemo(() => {
    switch (entry) {
      case Side.TOP:
        return { x: coords.x + width / 2, y: coords.y }
      case Side.BOTTOM:
        return { x: coords.x + width / 2, y: coords.y + height }
      case Side.LEFT:
        return { x: coords.x, y: coords.y + height / 2 }
      case Side.RIGHT:
        return { x: coords.x + width, y: coords.y + height / 2 }
    }
  }, [])

  // Колбек при нажатии
  const onClick = useCallback(() => {
    setEndId(name)
  }, [])

  return (
    <Group
      onClick={onClick}
      globalCompositeOperation={endId === name ? undefined : "destination-over"}
    >
      <Circle
        globalCompositeOperation={"source-over"}
        width={10}
        height={10}
        fill={"red"}
        x={entryCoords.x}
        y={entryCoords.y}
      />
      <Rect
        width={width}
        x={coords.x}
        y={coords.y}
        height={height}
        fill={endId === name ? "#ffff0030" : undefined}
        stroke={"black"}
        strokeWidth={3}
        strokeEnabled
      />
      <Text
        text={name}
        height={16}
        width={100}
        x={textCoords.x}
        y={textCoords.y}
        fontSize={16}
        align={"center"}
      />
      {startId === name && (
        <Text
          text={"Вы здесь"}
          height={16}
          width={100}
          fill={"red"}
          x={textCoords.x}
          y={textCoords.y + 16}
          fontSize={11}
          align={"center"}
        />
      )}
      <Graph
        destination={GraphDestination.AUDITORIUM}
        points={[entryCoords.x, entryCoords.y]}
        direction={entry}
      />
    </Group>
  )
}
