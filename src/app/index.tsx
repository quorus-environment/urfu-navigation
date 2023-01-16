import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf"
import "./app.css"
import { GraphProvider } from "../shared/providers/graph-context/ui/graph-provider"
import { ChosenProvider } from "../shared/providers/chosen-context/ui/chosen-provider"

/**
 * Основная компонента приложения
 *
 * */
export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/irit-rtf"
          element={
            <GraphProvider>
              <ChosenProvider>
                <IritRtf />
              </ChosenProvider>
            </GraphProvider>
          }
        />
      </Routes>
    </div>
  )
}
