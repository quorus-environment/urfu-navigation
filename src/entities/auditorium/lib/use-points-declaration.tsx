import { useMemo } from "react"
import { useChosenStore } from "../../../shared/stores/chosen/lib/use-chosen-store"

export const usePointsDeclaration = (name: string) => {
  const { startId, endId } = useChosenStore((st) => ({
    startId: st.startId,
    endId: st.endId,
  }))
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
