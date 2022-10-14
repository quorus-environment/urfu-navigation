import { Circle, Group, Line } from "react-konva"
import React, { useMemo } from "react"
import { TGraph } from "../model/interface"
import { Side, TCoords } from "../../../shared/model/geometry"

export const Graph: React.FC<{ graph: TGraph }> = ({ graph }) => {
  // Вторая точка графа по ее направлению и высоте
  const resultPoint: TCoords = useMemo(() => {
    switch (graph.direction) {
      case Side.TOP:
        return { x: graph.points[0], y: graph.points[1] - graph.height }
      case Side.BOTTOM:
        return { x: graph.points[0], y: graph.points[1] + graph.height }
      case Side.LEFT:
        return { x: graph.points[0] - graph.height, y: graph.points[1] }
      case Side.RIGHT:
        return { x: graph.points[0] + graph.height, y: graph.points[1] }
    }
  }, [graph])

  const color = useMemo(
    () => (graph.isFilled ? "red" : undefined),
    [graph.isFilled],
  )

  return (
    <Group globalCompositeOperation={"destination-over"}>
      <Circle
        width={7}
        height={7}
        fill={color}
        x={graph.points[0]}
        y={graph.points[1]}
      />
      <Line
        strokeWidth={3}
        stroke={color}
        points={[...graph.points, resultPoint.x, resultPoint.y]}
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
