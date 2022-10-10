import { useMemo } from "react"
import { Side, TCoords } from "../../../shared/model/geometry"

// Хук для получения координат по параметрам аудитории
export const useEntryCoords = (
  entry: Side,
  coords: TCoords,
  width: number,
  height: number,
) => {
  return useMemo(() => {
    switch (entry) {
      case Side.TOP:
        return { x: coords.x + width / 2, y: coords.y }
      case Side.BOTTOM:
        return { x: coords.x + width / 2, y: coords.y + height }
      case Side.LEFT:
        return { x: coords.x, y: coords.y + height / 2 }
      case Side.RIGHT:
        return { x: coords.x + width, y: coords.y + height / 2 }
    }
  }, [coords, width, entry, height])
}
