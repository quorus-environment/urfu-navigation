import { GraphDestination, TGraph } from "../model/interface"
import { useMemo } from "react"
import { Side } from "../../../shared/model/geometry"

/**
 * Возвращает и регистрирует граф по основным свойствам
 *
 * @important ВСЕ ВХОДЯЩИЕ ПАРАМЕТРЫ ДОЛЖНЫ БЫТЬ КОНСТАНТНЫМИ
 * */
export const useGraph = (
  destination: GraphDestination,
  points: [number, number],
  direction: Side,
  height = 25,
  isFilled = true,
  neighbors: TGraph[] = [],
) => {
  const graph: TGraph = useMemo(
    () => ({
      destination,
      points,
      direction,
      height,
      neighbors,
      isFilled,
    }),
    [destination, direction, height, isFilled, neighbors, points],
  )

  return { graph }
}
