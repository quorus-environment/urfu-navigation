import React from "react"
import { Layer, Stage } from "react-konva"
import { Auditorium } from "../../shared/map-providers/auditorium"

export const IritRtf: React.FC = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Auditorium
          name={"РИ-101"}
          height={200}
          width={150}
          coords={{ x: 350, y: 245 }}
          entry={{ x: 75, y: 200 }}
        />
        <Auditorium
          name={"РИ-102"}
          height={200}
          width={150}
          coords={{ x: 500, y: 245 }}
          entry={{ x: 75, y: 200 }}
        />
        <Auditorium
          name={"РИ-103"}
          height={200}
          width={150}
          coords={{ x: 650, y: 245 }}
          entry={{ x: 75, y: 200 }}
        />
        <Auditorium
          name={"РИ-104"}
          height={200}
          width={150}
          coords={{ x: 800, y: 245 }}
          entry={{ x: 75, y: 200 }}
        />
        <Auditorium
          name={"РИ-105"}
          height={200}
          width={150}
          coords={{ x: 350, y: 500 }}
          entry={{ x: 75, y: 0 }}
        />
        <Auditorium
          name={"РИ-106"}
          height={200}
          width={150}
          coords={{ x: 500, y: 500 }}
          entry={{ x: 75, y: 0 }}
        />
        <Auditorium
          name={"РИ-107"}
          height={200}
          width={150}
          coords={{ x: 650, y: 500 }}
          entry={{ x: 75, y: 0 }}
        />
        <Auditorium
          name={"РИ-108"}
          height={200}
          width={150}
          coords={{ x: 800, y: 500 }}
          entry={{ x: 75, y: 0 }}
        />
      </Layer>
    </Stage>
  )
}
