import { Circle, Group, Line } from "react-konva"
import React, { useMemo } from "react"
import { TGraph } from "../model/interface"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"

export const Graph: React.FC<{ graph: TGraph }> = ({ graph }) => {
  const { coloredGraph } = useGraphContext()
  const color = useMemo(
    () => (coloredGraph.includes(graph.id) ? "red" : undefined),
    [coloredGraph, graph.id],
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
