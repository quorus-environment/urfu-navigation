import React from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "../widgets/header/ui/header"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf"
import "./app.css"
import { GraphProvider } from "../shared/providers/graph-context/ui/graph-provider"
/**
 * Основная компонента приложения
 * */
export const App: React.FC = () => {
  return (
    <GraphProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/irit-rtf" element={<IritRtf />} />
        </Routes>
      </div>
    </GraphProvider>
  )
}
