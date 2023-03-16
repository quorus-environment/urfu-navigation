import { TCoords } from "../model/geometry"

export type RectangleVector = [
  [TCoords, TCoords],
  [TCoords, TCoords],
  [TCoords, TCoords],
  [TCoords, TCoords],
]

export type TCorridor = {
  vectors: RectangleVector
  transition: "vertical" | "horizontal"
}

// Координата - высота к линии
function getDistance(
  linePointA: TCoords,
  linePointB: TCoords,
  perpendicularStartPoint: TCoords,
) {
  const x1 = linePointA.x,
    y1 = linePointA.y,
    x2 = linePointB.x,
    y2 = linePointB.y,
    x3 = perpendicularStartPoint.x,
    y3 = perpendicularStartPoint.y
  const px = x2 - x1,
    py = y2 - y1,
    dAB = px * px + py * py
  const u = ((x3 - x1) * px + (y3 - y1) * py) / dAB
  const x = x1 + u * px,
    y = y1 + u * py
  return { x, y } //this is D
}

function findCenter(segment: [TCoords, TCoords]): TCoords {
  return {
    x: (segment[0].x + segment[1].x) / 2,
    y: (segment[0].y + segment[1].y) / 2,
  }
}

function findCorridorBySection(corridor: TCorridor): [TCoords, TCoords] {
  const firstVector =
    corridor.transition === "vertical"
      ? corridor.vectors[0]
      : corridor.vectors[1]
  const secondVector =
    corridor.transition === "vertical"
      ? corridor.vectors[2]
      : corridor.vectors[3]

  const firstCenter = findCenter(firstVector)
  const secondCenter = findCenter(secondVector)

  return [firstCenter, secondCenter]
}

export function findPathThroughSection(
  startPoint: TCoords,
  endPoint: TCoords,
  corridor: TCorridor,
) {
  const middleLine = findCorridorBySection(corridor)
  const firstDistance = getDistance(middleLine[0], middleLine[1], startPoint)
  const secondDistance = getDistance(middleLine[0], middleLine[1], endPoint)
  return { secondDistance, firstDistance, middleLine }
  // найти серединную диагональ
  //  вертикал - находим центр 1 и 3 вектора
  //  берем центр 1 и проводим отрезок до центра 3 -- отрезок коридора
  //
  // найти высоту от точки начала и точки концац до этого отрезка
  //
  // проводим отрезок от второй координаты вектора высоты точки старта до второй координаты высоты точки конца
  //
  // отрисовываем их
}
