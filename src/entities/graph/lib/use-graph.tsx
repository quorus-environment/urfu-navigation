import { GraphDestination, TGraph } from "../model/interface"
import { useMemo } from "react"
import { Side, TCoords } from "../../../shared/model/geometry"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"

export const checkIfPointInGraph = (
  graphPoints: [number, number, number, number],
  pointCoords: [number, number],
) => {
  console.log(graphPoints, pointCoords)
  const list = [pointCoords[0], graphPoints[0], graphPoints[2]].sort(
    (first, second) => first - second,
  )
  const list2 = [pointCoords[1], graphPoints[1], graphPoints[3]].sort(
    (first, second) => first - second,
  )
  return list[1] === pointCoords[0] && list2[1] === pointCoords[1]
}

export const getResultPoint = (
  direction: Side,
  points: [number, number],
  height: number,
) => {
  switch (direction) {
    case Side.TOP:
      return { x: points[0], y: points[1] - height }
    case Side.BOTTOM:
      return { x: points[0], y: points[1] + height }
    case Side.LEFT:
      return { x: points[0] - height, y: points[1] }
    case Side.RIGHT:
      return { x: points[0] + height, y: points[1] }
  }
}

export const getEntryPoints = (
  entry: Side,
  coords: TCoords,
  width: number,
  height: number,
) => {
  switch (entry) {
    case Side.TOP:
      return {
        x: coords.x + width / 2,
        y: coords.y,
      }
    case Side.BOTTOM:
      return {
        x: coords.x + width / 2,
        y: coords.y + height,
      }
    case Side.LEFT:
      return {
        x: coords.x,
        y: coords.y + height / 2,
      }
    case Side.RIGHT:
      return {
        x: coords.x + width,
        y: coords.y + height / 2,
      }
  }
}

/**
 * Возвращает и регистрирует граф по основным свойствам
 *
 * @important ВСЕ ВХОДЯЩИЕ ПАРАМЕТРЫ ДОЛЖНЫ БЫТЬ КОНСТАНТНЫМИ
 * */
export const useGraph = (
  id: string,
  destination: GraphDestination,
  points: [number, number],
  direction: Side,
  height = 25,
  section: string,
  floor: number,
  neighbors: string[] = [],
) => {
  const { coloredGraph } = useGraphContext()
  const resultPoint: TCoords = useMemo(() => {
    return getResultPoint(direction, points, height)
  }, [direction, height, points])

  const isFilled = useMemo(() => {
    return !!coloredGraph.find((graphId) => graphId === id)
  }, [coloredGraph, id])
  const graph: TGraph = useMemo(
    () => ({
      destination,
      points: [...points, resultPoint.x, resultPoint.y],
      direction,
      height,
      neighbors,
      isFilled,
      id: id,
      section,
      floor,
    }),
    [
      destination,
      direction,
      floor,
      height,
      id,
      isFilled,
      neighbors,
      points,
      resultPoint.x,
      resultPoint.y,
      section,
    ],
  )

  return { graph }
}
