import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf/irit-rtf"
import "./app.css"
import { TestUniv } from "../pages/universities/test/test-univ"

/**
 * Основная компонента приложения
 * */
export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/irit-rtf" element={<IritRtf />} />
        <Route path="/test" element={<TestUniv />} />
      </Routes>
    </div>
  )
}
