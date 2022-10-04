import React from "react"
import { Circle, Group, Rect, Text } from "react-konva"

type TAuditoriumProps = {
  name: string
  height: number
  width: number
  x: number
  y: number
}

export const Auditorium: React.FC<TAuditoriumProps> = ({ name, x, y, width, height }) => {
  return (
    <Group onClick={() => console.log(name)}>
      <Rect
        width={width}
        x={x}
        y={y}
        height={height}
        stroke={"black"}
        strokeWidth={3}
        strokeEnabled
      />
      <Text
        text={name}
        height={16}
        width={100}
        x={x + width / 2 - 50}
        y={y + height / 2 - 8}
        fontSize={16}
        align={"center"}
      />
      <Circle width={10} height={10} fill={"red"} x={x + 50} y={y + height} />
    </Group>
  )
}
