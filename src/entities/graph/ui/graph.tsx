import { Circle, Group, Line } from "react-konva"
import React, { useMemo } from "react"
import { TGraph } from "../model/interface"

export const Graph: React.FC<{ graph: TGraph }> = ({ graph }) => {
  const color = useMemo(
    () => (graph.isFilled ? "red" : undefined),
    [graph.isFilled],
  )

  return (
    <Group globalCompositeOperation="destination-over">
      <Circle
        width={7}
        height={7}
        fill={color}
        x={graph.points[0]}
        y={graph.points[1]}
      />
      <Line strokeWidth={3} stroke={color} points={graph.points} />
      <Circle
        width={7}
        height={7}
        fill={color}
        x={graph.points[2]}
        y={graph.points[3]}
      />
    </Group>
  )
}
