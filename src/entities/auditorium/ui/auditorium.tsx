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

  // Координаты тектса (по центру)
  // Изначально крайняя верхняя-левая позиция ставится на центр и отнимается
  // половина от сторон, чтобы x и y подстроились под размеры текста
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
    name !== startId && setEndId(name)
  }, [])

  return (
    <Group onClick={onClick} globalCompositeOperation={"destination-over"}>
      <Circle
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
        fill={
          startId === name
            ? "#ff000010"
            : endId === name
            ? "#ffff0030"
            : undefined
        }
        stroke={"black"}
        strokeWidth={3}
        strokeEnabled
      />
      <Text
        text={name}
        height={16}
        width={100}
        fontFamily={"Montserrat"}
        fontStyle={"bold"}
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
          fontFamily={"Montserrat"}
          x={textCoords.x}
          y={textCoords.y + 16}
          fontSize={11}
          align={"center"}
        />
      )}
      {endId === name && (
        <Text
          text={"Конечная точка"}
          height={16}
          width={100}
          fill={"gray"}
          fontFamily={"Montserrat"}
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
