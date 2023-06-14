import { TCoords } from "../../../../shared/model/geometry"

// важно что все вектора рисуются против часовой
interface IGetEntry {
  position: "vertical" | "horizontal"
  corridorCoords: [TCoords, TCoords][] | undefined
  auditoriumCoords: [TCoords, TCoords][]
}
export const getEntryPointBySection = ({
  position,
  corridorCoords,
  auditoriumCoords,
}: IGetEntry): TCoords => {
  if (!corridorCoords || !auditoriumCoords) return { x: 0, y: 0 }
  if (position === "horizontal") {
    if (corridorCoords[0][1].y === auditoriumCoords[0][0].y)
      return {
        x: (auditoriumCoords[3][1].x + auditoriumCoords[3][0].x) / 2,
        y: auditoriumCoords[0][0].y,
      }
    else {
      return {
        x: (auditoriumCoords[0][0].x + auditoriumCoords[1][1].x) / 2,
        y: auditoriumCoords[0][1].y,
      }
    }
  } else {
    // if (corridorCoords[0][0].y > auditoriumCoords[0][0].y) {
    //   return {
    //     x: (auditoriumCoords[1][0].x + auditoriumCoords[1][1].x) / 2,
    //     y: auditoriumCoords[1][0].y,
    //   }
    // }
    if (corridorCoords[0][0].x === auditoriumCoords[3][0].x)
      return {
        x: auditoriumCoords[3][0].x,
        y: (auditoriumCoords[2][0].y + auditoriumCoords[2][1].y) / 2,
      }
    else {
      return {
        x: auditoriumCoords[0][0].x,
        y: (auditoriumCoords[0][0].y + auditoriumCoords[0][1].y) / 2,
      }
    }
  }
}
