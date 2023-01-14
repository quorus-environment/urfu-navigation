import { Circle, Group, Line } from "react-konva"
import React, { memo, useMemo } from "react"
import { TGraph } from "../model/interface"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"
import { useSearchParams } from "react-router-dom"

const CGraph: React.FC<{ graph: TGraph }> = ({ graph }) => {
  const { coloredGraph } = useGraphContext()
  const [params] = useSearchParams()
  const color = useMemo(() => {
    if (params.get("dev") === "true") {
      return coloredGraph.includes(graph.id) ? "green" : "red"
    } else {
      return coloredGraph.includes(graph.id) ? "green" : undefined
    }
  }, [coloredGraph, params, graph.id])

  return (
    <Group
      globalCompositeOperation="destination-over"
      onClick={() => console.log(graph.id)}
    >
      <Circle width={7} height={7} x={graph.points[0]} y={graph.points[1]} />
      <Line strokeWidth={3} stroke={color} points={graph.points} />
      <Circle width={7} height={7} x={graph.points[2]} y={graph.points[3]} />
    </Group>
  )
}

export const Graph = memo(CGraph)
