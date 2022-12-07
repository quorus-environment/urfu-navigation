import { useContext } from "react"
import { GraphContext } from "../ui/graph-provider"

/** Скорее всего дохера использовать будем, так что добавлю такую штуку*/
export const useGraphContext = () => {
  return useContext(GraphContext)
}
