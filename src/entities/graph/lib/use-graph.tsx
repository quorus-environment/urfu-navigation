import { GraphDestination, TGraph } from "../model/interface"
import { useEffect, useMemo } from "react"
import { Side } from "../../../shared/model/geometry"
import { useGraphContext } from "../../../shared/providers/graph-context/lib/use-graph-context"

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
  isFilled = false,
  neighbors: TGraph[] = [],
) => {
  const { registerGraph } = useGraphContext()
  const graph: TGraph = useMemo(
    () => ({
      destination,
      points,
      direction,
      height,
      neighbors,
      isFilled,
    }),
    [],
  )
  useEffect(() => {
    registerGraph(graph)
  }, [graph])

  return { graph }
}
