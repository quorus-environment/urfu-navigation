import { TGraph } from "../../entities/graph/model/interface"
import { createLinkedListPath, unwrapLinkedList } from "./LinkedListProcessing"
import { findPathsInSection } from "./findPathsInSection"

export function findPathOnFloor(
  startGraph: TGraph | undefined,
  endGraph: TGraph | undefined,
  startGraphId: string,
  endGraphId: string,
  graphRegistry: TGraph[],
): string[] {
  const resultPath: string[] = []
  if (startGraph?.section && endGraph?.section) {
    const sectionPathLL = createLinkedListPath(
      startGraph?.section,
      endGraph?.section,
      graphRegistry,
    )
    // Список секций, через которые нужно пройти включая начальную и конечную
    const sectionPath = unwrapLinkedList(sectionPathLL)
    for (let i = 0; i < sectionPath.length - 1; i++) {
      const sectionId = sectionPath[i]
      const nextSectionId = sectionPath[i + 1]
      // Ищем turnover, который соединяет текущую секцию со следующей
      const turnoverToNextSection = graphRegistry.find(
        (gr) =>
          gr.linkedSection?.includes(nextSectionId) && gr.section === sectionId,
      )
      if (turnoverToNextSection?.id) {
        const pathToTurnoverLL = createLinkedListPath(
          startGraphId,
          turnoverToNextSection?.id,
          graphRegistry,
        )
        // Ищем путь до этого turnover и добавляем в итоговый путь
        const pathToTurnover = unwrapLinkedList(pathToTurnoverLL)
        resultPath.push(...pathToTurnover)
      }
      const turnoverInNewSection = graphRegistry.find(
        (gr) =>
          gr.linkedSection?.includes(sectionId) && gr.section === nextSectionId,
      )
      // Записываем последний turnover, который станет точкой старта
      if (turnoverInNewSection?.id) {
        startGraphId = turnoverInNewSection?.id
      }
    }
    // Записываем путь в последней секции
    if (startGraphId) {
      const pathToEndGraph = findPathsInSection(
        startGraphId,
        endGraphId,
        graphRegistry,
      )
      resultPath.push(...pathToEndGraph)
    }
    console.log(resultPath)
  }
  return resultPath
}
