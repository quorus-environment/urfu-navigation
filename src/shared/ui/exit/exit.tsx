import React, { FC } from "react"

interface ExitProps {
  size?: number
  color?: string
  strokeWidth?: number
  onClick?: () => void
}

export const Exit: FC<ExitProps> = ({
  size = 14,
  color = "black",
  strokeWidth = 2,
  onClick,
}) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12L1 1M12.4142 1L1.41421 12"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
