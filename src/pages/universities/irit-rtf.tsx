import React from "react"
import { Layer, Stage } from "react-konva"
import { Auditorium } from "../../shared/map-providers/auditorium"

export const IritRtf: React.FC = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Auditorium name={"РИ-101"} height={200} width={150} x={350} y={245} />
        <Auditorium name={"РИ-102"} height={200} width={150} x={500} y={245} />
      </Layer>
    </Stage>
  )
}
