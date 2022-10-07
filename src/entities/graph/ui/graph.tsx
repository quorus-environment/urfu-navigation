import { Circle, Group, Line } from "react-konva"
import React, { useMemo } from "react"
import { TGraph } from "../model/interface"
import { Side, TCoords } from "../../../shared/model/geometry"

export const Graph: React.FC<TGraph> = ({
  points,
  direction,
  height = 25,
  isFilled = false,
}) => {
  // Вторая точка графа по ее направлению и высоте
  const resultPoint: TCoords = useMemo(() => {
    switch (direction) {
      case Side.TOP:
        return { x: points[0], y: points[1] - height }
      case Side.BOTTOM:
        return { x: points[0], y: points[1] + height }
      case Side.LEFT:
        return { x: points[0] - height, y: points[1] }
      case Side.RIGHT:
        return { x: points[0] + height, y: points[1] }
    }
  }, [direction, points, height])

  const color = useMemo(() => (isFilled ? "red" : undefined), [isFilled])

  return (
    <Group globalCompositeOperation={"destination-over"}>
      <Circle width={7} height={7} fill={color} x={points[0]} y={points[1]} />
      <Line
        strokeWidth={3}
        stroke={color}
        points={[...points, resultPoint.x, resultPoint.y]}
      />
      <Circle
        width={7}
        height={7}
        fill={color}
        x={resultPoint.x}
        y={resultPoint.y}
      />
    </Group>
  )
}
