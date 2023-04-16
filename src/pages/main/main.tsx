import "./main.css"
import { Institutes } from "./institutes-grid/institutes-grid"
import { MainPageHeader } from "../../widgets/header/ui/header"
import React, { Suspense } from "react"
import { Button } from "@quorus/quorus-ui-kit"

const MainMap = React.lazy(() => import("../../widgets/map/ui/map"))

export function Main() {
  return (
    <>
      <MainPageHeader />
      <section className="main">
        <div className="main__map">
          <h2>Корпуса</h2>
          <Suspense fallback="Загрузка">
            <MainMap />
          </Suspense>
        </div>
        <div>
          <h2>Институты</h2>
          <Institutes />
        </div>
      </section>
    </>
  )
}
