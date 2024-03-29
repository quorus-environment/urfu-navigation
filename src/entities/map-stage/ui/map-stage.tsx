import React, { useCallback, useEffect, useRef, useState } from "react"
import { Stage } from "react-konva"
import Konva from "konva"
import { mapConfig } from "../config"
import { Header } from "../../../widgets/header/ui/header"
import { FloorChosing } from "../../../shared/ui/chooseFloor/floorChosing"
import { findPaths } from "../../../shared/pathFinding/findPaths"
import { useGraphStore } from "../../../shared/stores/graph-context/lib/use-graph-store"
import { useTouchZooming } from "../lib/use-touch-zooming"
import { PopupButton } from "../../../shared/ui/popup-button/popup-button"
import { Closest } from "../../../shared/ui/doubleSearch/headerSearch"
import { findPathToDestination } from "../../../shared/pathFinding/LinkedListProcessing"
import { GraphDestination, TGraph } from "../../graph/model/interface"
import KonvaEventObject = Konva.KonvaEventObject
import { useChosenStore } from "../../../shared/stores/chosen/lib/use-chosen-store"

type TMapStageProps = {
  children: React.ReactNode
}

// todo: короче тут очень много повторения кода и было бы славно во-первых вынести это
//  все в отдельны файл и разбить это все по функциям
export const useGraphSelecting = (
  graph: TGraph[],
  setColoredGraph: (v: string[]) => void,
) => {
  const { startId, endId, setEndId, setEndName } = useChosenStore()
  return useCallback(() => {
    if (startId && endId) {
      const startGraph = graph.find((gr) => gr.id === startId)
      if (!startGraph) {
        return
      }
      if (endId === Closest.ClosestManToilet) {
        const pathTemp = findPathToDestination(
          startGraph,
          GraphDestination.TOILET_MAN,
          graph,
        )
        if (pathTemp?.length === 0) {
          return
        }
        const endAud = graph.find(
          (gr) => gr.id === pathTemp[pathTemp.length - 1],
        )
        if (!endAud) {
          return
        }
        setEndId(endAud?.id)
        setEndName(endAud.name || null)
      } else if (endId === Closest.ClosestWomanToilet) {
        const pathTemp = findPathToDestination(
          startGraph,
          GraphDestination.TOILET_WOMAN,
          graph,
        )
        if (pathTemp?.length === 0) {
          return
        }
        const endAud = graph.find(
          (gr) => gr.id === pathTemp[pathTemp.length - 1],
        )
        if (!endAud) {
          return
        }
        setEndId(endAud?.id)
        setEndName(endAud.name || null)
      } else {
        const path = findPaths(startId, endId, graph)
        setColoredGraph(path)
      }
    }
  }, [endId, graph, setColoredGraph, setEndId, setEndName, startId])
}

export const MapStage: React.FC<TMapStageProps> = ({ children }) => {
  const { startId, endId, setEndId } = useChosenStore()
  const { graph, setColoredGraph } = useGraphStore()

  const [isButtonShown] = useState(true)
  const [differentFloor, setDifferentFloor] = useState<number | null>(null)

  const [isDragging, setDragging] = useState(false)
  const stageRef = useRef<Konva.Stage>(null)
  const { setFloor, floor } = useChosenStore((st) => ({
    setFloor: st.setFloor,
    floor: st.floor,
  }))

  const { pinching, setIsPinching, handleTouchEnd, handleTouch } =
    useTouchZooming(stageRef)

  // todo: в отдельный хук
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) {
      return
    }
    stage.setPosition({
      x: window.innerWidth / 2 - 400,
      y: window.innerHeight / 2 - 450,
    })
    stage.height(window.innerHeight - 60)
    stage.scale({ x: 0.5, y: 0.5 })
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
    stage.scale({ x: newScale, y: newScale })

    // Получаем новое положение курсора
    const newPos = {
      x: pointerX - ((pointerX - stage.x()) / oldScale) * newScale,
      y: pointerY - ((pointerY - stage.y()) / oldScale) * newScale,
    }
    stage.position(newPos)
  }, [])

  const setNewAuditoriums = useGraphSelecting(graph, setColoredGraph)

  useEffect(() => {
    setNewAuditoriums()
  }, [endId, graph, setColoredGraph, setEndId, setNewAuditoriums, startId])

  // todo: в отдельный хук и отрефачить
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
