// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Чому ПІБ МНТУ"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Наукоа діяльність
        </h1>
      </div>

      <br />

      <ul className="list-dots">
        <li>
          <a
            href="/media/docs/pib/activity/2020-05-21-Актуальні-проблеми-розвитку-сучасної-науки.pdf"
            className="gold
            external"
            target="_blank"
          >
            АКТУАЛЬНІ ПРОБЛЕМИ РОЗВИТКУ СУЧАСНОЇ НАУКИ - 21 травня 2020 року
          </a>
        </li>
      </ul>
    </WithSidebar>
  )
}
