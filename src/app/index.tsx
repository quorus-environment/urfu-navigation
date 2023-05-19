import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf/irit-rtf"
import "./app.css"
import { findPathThroughSection } from "../shared/pathFinding/find-path-through-section"
import { TestUniv } from "../pages/universities/test/test-univ"
import { SignInPage } from "../processes/auth/authorization/sign-in-page"
import { RegistrationPage } from "../processes/auth/registration/registration-page"
import { NewTest } from "../pages/universities/new-test/new-test"

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
        <Route path="/test" element={<TestUniv />} />
        <Route path="/new" element={<NewTest />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </div>
  )
}
