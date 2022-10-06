import React, { FC, useMemo } from "react"
import "./Institute.css"

interface InstituteProps {
  size?: number
  title?: string
}

export const Institute: FC<InstituteProps> = ({ size = 24, title = "" }) => {
  const fontSize = useMemo(() => {
    return size ? size / 1.5 : 16
  }, [size])
  return (
    <div>
      <div
        className="institute"
        style={{
          width: size,
          height: size,
          fontSize: fontSize,
        }}
      >
        {title}
      </div>
    </div>
  )
}
