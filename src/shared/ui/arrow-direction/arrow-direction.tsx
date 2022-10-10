import React, { FC, useMemo } from "react"
import { Side } from "../../model/geometry"
import "./arrow-direction.css"
import { checkDirection } from "./checkDirection"

interface arrowDirectionProps {
  size?: number
  direction?: Side
}

export const ArrowDirection: FC<arrowDirectionProps> = ({
  size,
  direction = Side.TOP,
}) => {
  const deg = useMemo(() => checkDirection(direction), [direction])
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={deg}
    >
      <path
        d="M16.4142 0.585787C15.6332 -0.195262 14.3668 -0.195262 13.5858 0.585786L0.857864 13.3137C0.0768151 14.0948 0.076815 15.3611 0.857864 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585787ZM13 2L13 32L17 32L17 2L13 2Z"
        fill="black"
      />
    </svg>
  )
}
