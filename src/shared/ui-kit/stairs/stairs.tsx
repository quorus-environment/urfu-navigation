import React, { FC, useMemo } from "react"
import { Side } from "../../model/geometry"
import "./stairs.css"

interface stairsProps {
  size?: number
  direction?: Side
}

export const Stairs: FC<stairsProps> = ({
  size = 30,
  direction = Side.LEFT,
}) => {
  const deg = useMemo(
    () => (direction === Side.TOP ? "rotate(270)" : "rotate(0)"),
    [direction],
  )
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={deg}
    >
      <path
        d="M29.5 15.7647V25.5M29.5 25.5L19.3684 28M29.5 25.5L13.8421 15.7647V9.26471H7.52632V2H2"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
