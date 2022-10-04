import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '../widgets/header/ui/header'
import { Main } from '../pages/main/main'
import { IritRtf } from '../pages/universities/irit-rtf'

/**
 * Основная компонента приложения
 * todo: менюшка
 * */
export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/irit-rtf' element={<IritRtf />} />
      </Routes>
    </>
  )
}
