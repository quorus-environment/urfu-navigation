import React from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "../widgets/header/ui/header"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf"
import "./app.css"
import { GraphProvider } from "../shared/providers/graph-context/ui/graph-provider"
import { ChooseFloor } from "../shared/ chooseFloor/chooseFloor"

/**
 * Основная компонента приложения
 *
 * */
export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <ChooseFloor links={["/", "/irit-rtf", "/link3", "/link4"]} size={64} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/irit-rtf"
          element={
            <GraphProvider>
              <IritRtf />
            </GraphProvider>
          }
        />
      </Routes>
    </div>
  )
}
