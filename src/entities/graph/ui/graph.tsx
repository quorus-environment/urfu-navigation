import { Circle, Group, Line } from "react-konva"
import React from "react"
import { TGraph } from "../model/interface"

export const Graph: React.FC<TGraph> = ({ points }) => {
  return (
    <Group>
      <Circle width={7} height={7} fill={"black"} x={points[0]} y={points[1]} />
      <Line strokeWidth={3} stroke={"black"} points={points} />
      <Circle width={7} height={7} fill={"black"} x={points[2]} y={points[3]} />
    </Group>
  )
}
