import { TCoords } from "../../../shared/model/geometry"
import { RefObject, useCallback, useRef, useState } from "react"
import Konva from "konva"
import KonvaEventObject = Konva.KonvaEventObject
import Stage = Konva.Stage

export function getCenter(p1: TCoords, p2: TCoords) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  }
}
export function getDistance(p1: TCoords, p2: TCoords) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

export const useTouchZooming = (ref: RefObject<Stage>) => {
  const [pinching, setIsPinching] = useState(false)
  const lastCenter = useRef<TCoords | null>(null)
  const lastDist = useRef(0)

  const handleTouch = useCallback(
    (e: KonvaEventObject<TouchEvent>) => {
      e.evt.preventDefault()
      const touch1 = e.evt.touches[0]
      const touch2 = e.evt.touches[1]
      const stage = ref.current
      if (touch1 && touch2 && stage !== null) {
        const p1 = {
          x: touch1.clientX,
          y: touch1.clientY,
        }
        const p2 = {
          x: touch2.clientX,
          y: touch2.clientY,
        }

        if (!lastCenter.current) {
          lastCenter.current = getCenter(p1, p2)
          return
        }
        const newCenter = getCenter(p1, p2)

        const dist = getDistance(p1, p2)

        if (!lastDist.current) {
          lastDist.current = dist
        }

        // local coordinates of center point
        const pointTo = {
          x: (newCenter.x - stage.x()) / stage.scaleX(),
          y: (newCenter.y - stage.y()) / stage.scaleX(),
        }

        const scale = stage.scaleX() * (dist / lastDist.current)

        stage.scaleX(scale)
        stage.scaleY(scale)

        // calculate new position of the stage
        const dx = newCenter.x - lastCenter.current?.x
        const dy = newCenter.y - lastCenter.current?.y

        const newPos = {
          x: newCenter.x - pointTo.x * scale + dx,
          y: newCenter.y - pointTo.y * scale + dy,
        }

        stage.position(newPos)
        stage.batchDraw()

        lastDist.current = dist
        lastCenter.current = newCenter
      }
    },
    [ref],
  )

  const handleTouchEnd = useCallback(() => {
    lastCenter.current = null
    lastDist.current = 0
    setIsPinching(false)
  }, [])

  return { handleTouchEnd, handleTouch, pinching, setIsPinching }
}
