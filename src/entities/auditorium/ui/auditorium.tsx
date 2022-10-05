import React, { useMemo } from "react"
import { Circle, Group, Rect, Text } from "react-konva"
import { TAuditorium } from "../model/interface"
import { Side, TCoords } from "../../../shared/model/geometry"

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
  const textCoords: TCoords = useMemo(() => {
    // Изначально крайняя верхняя-левая позиция ставится на центр и отнимается половина от сторон,
    // чтобы x и y подстроились под размеры текста
    return { x: coords.x + width / 2 - 50, y: coords.y + height / 2 - 8 }
  }, [])

  const entryCoords: TCoords = useMemo(() => {
    switch (entry) {
      case Side.TOP:
        return { x: coords.x + width / 2, y: coords.y + height }
      case Side.BOTTOM:
        return { x: coords.x + width / 2, y: coords.y }
      case Side.RIGHT:
        return { x: coords.x + width, y: coords.y + height / 2 }
      case Side.LEFT:
        return { x: coords.x, y: coords.y + height / 2 }
    }
  }, [])

  return (
    <Group onClick={() => console.log(name)}>
      <Rect
        width={width}
        x={coords.x}
        y={coords.y}
        height={height}
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
      <Circle
        width={10}
        height={10}
        fill={"red"}
        x={coords.x + entryCoords.x}
        y={coords.y + entryCoords.y}
      />
    </Group>
  )
}
