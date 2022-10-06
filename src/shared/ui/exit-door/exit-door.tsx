import React, { FC } from "react"

interface ExitDoorProps {
  color?: string
  size?: number
}

export const ExitDoor: FC<ExitDoorProps> = ({ color = "black", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.9375 0.9375H6.5625V3.75H7.5V0.9375V0H6.5625H0.9375H0V0.9375V14.0625V15H0.9375H6.5625H7.5V14.0625V11.25H6.5625V14.0625H0.9375V0.9375Z"
        fill={color}
      />
      <path
        d="M14.5597 8.46593C14.8343 8.19135 14.8343 7.74615 14.5597 7.47157L10.085 2.99691C9.81044 2.72232 9.36524 2.72232 9.09066 2.99691C8.81607 3.27149 8.81607 3.71669 9.09066 3.99127L13.0681 7.96875L9.09066 11.9462C8.81607 12.2208 8.81607 12.666 9.09066 12.9406C9.36524 13.2152 9.81044 13.2152 10.085 12.9406L14.5597 8.46593ZM2.8125 8.67188L14.0625 8.67187V7.26562L2.8125 7.26562V8.67188Z"
        fill={color}
      />
    </svg>
  )
}
