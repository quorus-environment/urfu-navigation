import { Text } from "react-konva"
import React from "react"

type TAuditoriumTitleProps = {
  title: string
  x: number
  y: number
  description?: string
  descriptionColor?: string
}

export const AuditoriumTitle: React.FC<TAuditoriumTitleProps> = ({
  title,
  x,
  y,
  description,
  descriptionColor = "gray",
}) => {
  return (
    <>
      <Text
        text={title}
        height={16}
        width={100}
        fontFamily={"Montserrat"}
        fontStyle={"bold"}
        x={x}
        y={y}
        fontSize={16}
        align={"center"}
      />
      {description && (
        <Text
          text={description}
          height={16}
          width={100}
          fill={descriptionColor}
          fontFamily={"Montserrat"}
          x={x}
          y={y + 16}
          fontSize={11}
          align={"center"}
        />
      )}
    </>
  )
}
