import React from "react"
import { Circle, Group, Rect, Text } from "react-konva"

type TAuditoriumProps = {
  name: string
  height: number
  width: number
  coords: {
    x: number
    y: number
  }
  entry: {
    x: number
    y: number
  }
}

export const Auditorium: React.FC<TAuditoriumProps> = ({
  name,
  coords,
  entry,
  width,
  height,
}) => {
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
        x={coords.x + width / 2 - 50}
        y={coords.y + height / 2 - 8}
        fontSize={16}
        align={"center"}
      />
      <Circle
        width={10}
        height={10}
        fill={"red"}
        x={coords.x + entry.x}
        y={coords.y + entry.y}
      />
    </Group>
  )
}
