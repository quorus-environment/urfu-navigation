import React, { FC } from "react"
import "./MenuToggle.css"

interface MenuToggleProps {
  color?: string
  size?: number
}

export const MenuToggle: FC<MenuToggleProps> = ({
  color = "#9D9B98",
  size = 16,
}) => {
  return (
    <div>
      <div
        className="line"
        style={{
          backgroundColor: color,
          width: size,
          height: size / 5,
          marginBottom: size / 6.5,
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor: color,
          width: size,
          height: size / 5,
          marginBottom: size / 6.5,
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor: color,
          width: size,
          height: size / 5,
          marginBottom: size / 6.5,
        }}
      ></div>
    </div>
  )
}
