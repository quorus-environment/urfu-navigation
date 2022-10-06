import React, { useCallback, useRef, useState } from "react"
import { Stage } from "react-konva"
import Konva from "konva"
import KonvaEventObject = Konva.KonvaEventObject

type TMapStageProps = {
  children: JSX.Element
}

export const MapStage: React.FC<TMapStageProps> = ({ children }) => {
  const [isDragging, setDragging] = useState(false)
  const stageRef = useRef<Konva.Stage>(null)

  const onWheel = useCallback((event: KonvaEventObject<WheelEvent>) => {
    event.evt.preventDefault()
    const stage = event.target.getStage()
    if (!stage) {
      return
    }
    // Получаем прошлое значение увеличения
    const oldScale = stage.scaleX()

    // Получаем предыдущее значение курсора
    const { x: pointerX, y: pointerY } = stage.getPointerPosition() || {
      x: 0,
      y: 0,
    }
    const mousePointTo = {
      x: (pointerX - stage.x()) / oldScale,
      y: (pointerY - stage.y()) / oldScale,
    }

    // Обновляем текущий скейл
    const newScale = event.evt.deltaY < 0 ? oldScale * 1.05 : oldScale * 0.95
    stageRef?.current?.scale({ x: newScale, y: newScale })

    // Получаем новое положение курсора
    const newPos = {
      x: pointerX - mousePointTo.x * newScale,
      y: pointerY - mousePointTo.y * newScale,
    }
    stageRef?.current?.position(newPos)
    stageRef?.current?.batchDraw()
  }, [])

  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth}
      style={{ cursor: isDragging ? "grabbing" : "default" }}
      draggable
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      height={window.innerHeight}
      onWheel={onWheel}
    >
      {children}
    </Stage>
  )
}
