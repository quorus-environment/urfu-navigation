import React, { FC } from "react"
import "./menu-toggle.css"
import { menuToggleColor } from "../ui-constants/ui-constants"

interface MenuToggleProps {
  color?: string
  size?: number
}

export const MenuToggle: FC<MenuToggleProps> = ({
  color = menuToggleColor,
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
