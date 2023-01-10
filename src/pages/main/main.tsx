import "./main.css"
import { MainMap } from "../../widgets/map/ui/map"
import { Institutes } from "./institutes-grid/institutes-grid"
import { MainPageHeader } from "../../widgets/header/ui/header"
import React from "react"

export function Main() {
  return (
    <>
      <MainPageHeader />
      <section className="main">
        <div className="main__map">
          <h2>Корпуса</h2>
          <MainMap />
        </div>
        <div>
          <h2>Институты</h2>
          <Institutes />
        </div>
      </section>
    </>
  )
}
