import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf/irit-rtf"
import "./app.css"
import { TestUniv } from "../pages/universities/test/test-univ"
import { SignIn } from "../pages/sign-in/ui/sign-in"

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
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  )
}
