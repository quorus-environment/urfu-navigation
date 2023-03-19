import { useMemo } from "react"
import {
  auditoriumsConfigSecond,
  configSectionsGraphSecond,
  neighborsGraphSecond,
  wallsSecond,
} from "./config-irit-rtf-second"
import {
  auditoriumsConfig,
  configSectionsGraph,
  neighborsGraph,
  walls,
} from "./config-irit-rtf"
import {
  auditoriumsConfigThird,
  configSectionsGraphThird,
  neighborsGraphThird,
  wallsThird,
} from "./config-irit-rtf-third"
import {
  auditoriumsConfigFourth,
  configSectionsGraphFourth,
  neighborsGraphFourth,
  wallsFourth,
} from "./config-irit-rtf-fourth"

export const useIritRtfEntities = () => {
  // Конфигурация аудиторий стен и графов
  const everyFloorAuds = useMemo(() => {
    return [
      ...auditoriumsConfigSecond,
      ...auditoriumsConfig,
      ...auditoriumsConfigThird,
      ...auditoriumsConfigFourth,
    ]
  }, [])

  const everyFloorWalls = useMemo(() => {
    return [...walls, ...wallsSecond, ...wallsThird, ...wallsFourth]
  }, [])

  const everyFloorGraph = useMemo(() => {
    return [
      ...neighborsGraphSecond,
      ...neighborsGraph,
      ...neighborsGraphThird,
      ...neighborsGraphFourth,
    ]
  }, [])

  const everyFloorSections = useMemo(() => {
    return [
      ...configSectionsGraph,
      ...configSectionsGraphSecond,
      ...configSectionsGraphThird,
      ...configSectionsGraphFourth,
    ]
  }, [])

  return {
    everyFloorAuds,
    everyFloorGraph,
    everyFloorWalls,
    everyFloorSections,
  }
}
