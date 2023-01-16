import { useMemo } from "react"
import { Side, TCoords } from "../../../shared/model/geometry"

// Хук для получения координат по параметрам аудитории
export const useEntryCoords = (
  entry: Side,
  coords: TCoords,
  width: number,
  height: number,
  entryOffset = 0,
) => {
  return useMemo(() => {
    switch (entry) {
      case Side.TOP:
        return { x: coords.x + width / 2 + entryOffset, y: coords.y }
      case Side.BOTTOM:
        return { x: coords.x + width / 2 + entryOffset, y: coords.y + height }
      case Side.LEFT:
        return { x: coords.x, y: coords.y + height / 2 + entryOffset }
      case Side.RIGHT:
        return { x: coords.x + width, y: coords.y + height / 2 + entryOffset }
    }
  }, [entry, coords.x, coords.y, width, entryOffset, height])
}
