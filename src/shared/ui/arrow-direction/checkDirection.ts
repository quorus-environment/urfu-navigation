import { Side } from "../../model/geometry"

export const checkDirection = (direction: Side) => {
  switch (direction) {
    case Side.TOP:
      return "rotate(0)"
    case Side.RIGHT:
      return "rotate(90)"
    case Side.BOTTOM:
      return "rotate(180)"
    case Side.LEFT:
      return "rotate(270)"
  }
}
