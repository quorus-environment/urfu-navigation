import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '../widgets/header/ui/header'
import { Main } from '../pages/main/main'

/**
 * Основная компонента приложения
 * todo: менюшка и роутер
 * @mock: Поставил ирит ртф для проверки канваса для себя
 * */
export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  )
}
