import React, { FC } from "react"
import "./round-button.css"

interface ButtonProps {
  color?: string
  size?: number
}
export const RoundButton: FC<ButtonProps> = ({
  color = "black",
  size = 24,
}) => {
  return (
    <div
      className="outter"
      style={{ width: size, height: size, border: "solid 1.5px " + color }}
    >
      <div
        className="inner"
        style={{
          width: size / 1.5,
          height: size / 1.5,
          backgroundColor: color,
        }}
      ></div>
    </div>
  )
}
