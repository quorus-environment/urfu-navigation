import { Circle, Group, Line } from "react-konva"
import React, { useMemo } from "react"
import { TGraph } from "../model/interface"
import { Side, TCoords } from "../../../shared/model/geometry"

export const Graph: React.FC<TGraph> = ({ points, direction, height = 25 }) => {
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
  }, [])
  return (
    <Group globalCompositeOperation={"destination-over"}>
      <Circle width={7} height={7} fill={"black"} x={points[0]} y={points[1]} />
      <Line
        strokeWidth={3}
        stroke={"black"}
        points={[...points, resultPoint.x, resultPoint.y]}
      />
      <Circle
        width={7}
        height={7}
        fill={"black"}
        x={resultPoint.x}
        y={resultPoint.y}
      />
    </Group>
  )
}
