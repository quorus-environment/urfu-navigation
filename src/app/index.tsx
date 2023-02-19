import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf"
import "./app.css"
import { findPathThroughSection } from "../shared/pathFinding/find-path-through-section"

/**
 * Основная компонента приложения
 *
 * */
export const App: React.FC = () => {
  console.log(
    findPathThroughSection(
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      {
        transition: "vertical",
        vectors: [
          [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          [
            { x: 1, y: 0 },
            { x: 1, y: 4 },
          ],
          [
            { x: 1, y: 4 },
            { x: 0, y: 4 },
          ],
          [
            { x: 0, y: 4 },
            { x: 0, y: 0 },
          ],
        ],
      },
    ),
  )
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/irit-rtf" element={<IritRtf />} />
      </Routes>
    </div>
  )
}
