// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Розклад занять"

import React from 'react'
import { WithSidebar } from 'components/Layout'
import Schedule from 'components/Schedule'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Розклад занять </h1>
      </div>
      <p>Тут Ви можете завжди знайти останній розклад занять для Вашого курсу</p>
      <h2>Розклад занять:</h2>

      <Schedule />
    </WithSidebar>
  )
}
