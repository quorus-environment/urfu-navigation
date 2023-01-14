import React, { FC, ReactNode } from "react"
import Switch from "./switch-item.svg"
import "./directionCard.css"

interface directionCardProps {
  width?: number
  sign?: ReactNode
  title?: string
  subtitle?: string
}

export const DirectionCard: FC<directionCardProps> = ({
  sign,
  title,
  subtitle,
}) => {
  return (
    <div className="card-body">
      <div className="card-body__sign">{sign}</div>
      <div className="card-body__text text">
        <div className="text__title">{title}</div>
        <div className="text__subtitle">{subtitle}</div>
      </div>
      <div className="card-body__switch switch">
        <div className="switch__item">
          <img src={Switch} />
        </div>
        <div className="switch__item">
          <img src={Switch} />
        </div>
      </div>
    </div>
  )
}
