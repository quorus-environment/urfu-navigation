import { GraphDestination, TGraph } from "../../graph/model/interface"
import { getEntryPoints, getResultPoint } from "../../graph/lib/use-graph"
import { TAuditorium } from "../model/interface"

export const graphFromAuditorium = (auditoriumsConfig: TAuditorium[]) => {
  return auditoriumsConfig.reduce((graph: TGraph[], config) => {
    const points = getEntryPoints(
      config.entry,
      config.coords,
      config.width,
      config.height,
    )
    const resPoints = getResultPoint(config.entry, [points.x, points.y], 25)
    return [
      ...graph,
      {
        id: config.name,
        destination: GraphDestination.AUDITORIUM,
        height: 25,
        neighbors: [],
        direction: config.entry,
        points: [points.x, points.y, resPoints.x, resPoints.y],
      } as TGraph,
    ]
  }, [])
}
