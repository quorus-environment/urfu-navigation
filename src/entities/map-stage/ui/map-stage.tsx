import React, { useState } from "react"
import { Stage } from "react-konva"

type TMapStageProps = {
  children: JSX.Element
}

export const MapStage: React.FC<TMapStageProps> = ({ children }) => {
  const [isDragging, setDragging] = useState(false)
  return (
    <Stage
      width={window.innerWidth}
      style={{ cursor: isDragging ? "grabbing" : "default" }}
      draggable
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      height={window.innerHeight}
    >
      {children}
    </Stage>
  )
}
