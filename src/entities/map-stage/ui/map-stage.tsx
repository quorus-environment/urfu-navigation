import React, { useCallback, useContext, useRef, useState } from "react"
import { Stage } from "react-konva"
import Konva from "konva"
import KonvaEventObject = Konva.KonvaEventObject
import { mapConfig } from "../config"
import { ChosenContext } from "../../../shared/providers/chosen-context/ui/chosen-provider"
import { Header } from "../../../widgets/header/ui/header"
import { FloorChosing } from "../../../shared/ chooseFloor/floorChosing"

type TMapStageProps = {
  children: React.ReactNode
}

export const MapStage: React.FC<TMapStageProps> = ({ children }) => {
  const [isDragging, setDragging] = useState(false)
  const stageRef = useRef<Konva.Stage>(null)
  const { setFloor } = useContext(ChosenContext)

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

    // Обновляем текущий скейл
    const newScale =
      event.evt.deltaY < 0
        ? oldScale * mapConfig.zoomRatio
        : oldScale / mapConfig.zoomRatio
    stageRef?.current?.scale({ x: newScale, y: newScale })

    // Получаем новое положение курсора
    const newPos = {
      x: pointerX - ((pointerX - stage.x()) / oldScale) * newScale,
      y: pointerY - ((pointerY - stage.y()) / oldScale) * newScale,
    }
    stageRef?.current?.position(newPos)
  }, [])

  return (
    <>
      <Header />
      <FloorChosing
        size={40}
        actions={[
          { label: "1", onClick: () => setFloor(1) },
          { label: "2", onClick: () => setFloor(2) },
        ]}
      />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        style={{ cursor: isDragging ? "grabbing" : "default" }}
        draggable
        onClick={(e) =>
          console.log(
            "Mouse: ",
            e.evt.pageX,
            e.evt.pageY,
            "\nTarget:",
            e.target.x(),
            e.target.y(),
          )
        }
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        height={window.innerHeight - 60}
        onWheel={onWheel}
      >
        {children}
      </Stage>
    </>
  )
}
