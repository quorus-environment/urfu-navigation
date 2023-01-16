import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { Stage } from "react-konva"
import Konva from "konva"
import { mapConfig } from "../config"
import { ChosenContext } from "../../../shared/providers/chosen-context/ui/chosen-provider"
import { Header } from "../../../widgets/header/ui/header"
import { FloorChosing } from "../../../shared/ui/ chooseFloor/floorChosing"
import { findPaths } from "../../../shared/pathFinding/findPaths"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"
import { useTouchZooming } from "../lib/use-touch-zooming"
import KonvaEventObject = Konva.KonvaEventObject
import { PopupButton } from "../../../shared/ui/popup-button/popup-button"

type TMapStageProps = {
  children: React.ReactNode
}

export const MapStage: React.FC<TMapStageProps> = ({ children }) => {
  const { startId, endId, floor } = useContext(ChosenContext)
  const { graph, setColoredGraph } = useGraphContext()

  const [isButtonShown, _] = useState(true)
  const [differentFloor, setDifferentFloor] = useState<number | null>(null)

  const [isDragging, setDragging] = useState(false)
  const stageRef = useRef<Konva.Stage>(null)
  const { setFloor } = useContext(ChosenContext)

  const { pinching, setIsPinching, handleTouchEnd, handleTouch } =
    useTouchZooming(stageRef)

  useEffect(() => {
    stageRef.current?.setPosition({
      x: window.innerWidth / 2 - 400,
      y: window.innerHeight / 2 - 450,
    })
    stageRef.current?.height(window.innerHeight - 60)
    stageRef.current?.scale({ x: 0.5, y: 0.5 })
  }, [stageRef])

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

  useEffect(() => {
    if (startId && endId) {
      const path = findPaths(startId, endId, graph)
      setColoredGraph(path)
    }
  }, [endId, graph, setColoredGraph, startId])

  useEffect(() => {
    const startFloor = graph.find((gr) => gr.id === startId)?.floor
    const endFloor = graph.find((gr) => gr.id === endId)?.floor
    if (endFloor === startFloor) {
      setDifferentFloor(null)
    } else if (floor === startFloor) {
      setDifferentFloor(endFloor || null)
    } else if (floor === endFloor) {
      setDifferentFloor(startFloor || null)
    } else {
      setDifferentFloor(endFloor || null)
    }
  }, [endId, floor, graph, startId])

  return (
    <>
      <Header />
      <FloorChosing
        size={40}
        actions={[
          { label: "1", onClick: () => setFloor(1) },
          { label: "2", onClick: () => setFloor(2) },
          { label: "3", onClick: () => setFloor(3) },
          { label: "4", onClick: () => setFloor(4) },
        ]}
      />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        style={{ cursor: isDragging ? "grabbing" : "default" }}
        draggable={!pinching}
        onClick={(e) =>
          console.log("Mouse:", {
            x: Math.floor(e.currentTarget.getRelativePointerPosition().x),
            y: Math.floor(e.currentTarget.getRelativePointerPosition().y),
          })
        }
        onDragStart={() => setDragging(true)}
        onTouchEnd={handleTouchEnd}
        onDragEnd={() => setDragging(false)}
        onTouchMove={handleTouch}
        onWheel={onWheel}
        onTouchStart={(e) => setIsPinching(!!e.evt.touches[1])}
      >
        {children}
      </Stage>
      <PopupButton
        onClick={() => {
          if (differentFloor) {
            setFloor(differentFloor)
          }
        }}
        message={"Переместиться на " + differentFloor + " этаж"}
        isOpen={differentFloor ? isButtonShown : false}
      />
    </>
  )
}
