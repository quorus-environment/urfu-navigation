import { useContext, useMemo } from "react"
import { ChosenContext } from "../../../shared/providers/chosen-context/ui/chosen-provider"

export const usePointsDeclaration = (name: string) => {
  const { startId, endId } = useContext(ChosenContext)
  // Получаем описание в зависимости от того начальная или конечная эта ауд.
  return useMemo(() => {
    if (startId === name) {
      return {
        description: "Вы здесь",
        descriptionColor: "red",
      }
    }
    if (endId === name) {
      return {
        description: "Конечная точка",
        descriptionColor: "gray",
      }
    }
    return null
  }, [startId, endId, name])
}
