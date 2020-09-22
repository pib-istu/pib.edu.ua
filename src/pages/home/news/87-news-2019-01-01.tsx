// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - ЗНО-2019"

import React from 'react'
import { WithSidebar } from 'components/Layout'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="item-page_blog">
        <div className="blog-item-header">
          <div className="date">01.01.2019</div><h2> <a href="/home/news/87-news-2019-01-01">
              ЗНО-2019</a>
          </h2>
          <div className="clear-both" />
        </div>
        <p>Шановні студенти!</p>
        <p>Надаємо загальну інформацію щодо ЗНО-2019.</p>
        <p>
          <a href="/media/docs/news/news-2019-01-01/ЗНО-2019.pdf" className="highlight gold" style={{display: 'inline-block', padding: '20px'}} target="_blank">Порядок проведення ЗНО-2019</a>
        </p>
        <p>Корисні посилання:</p>
        <ul className="list-dots">
          <li><a href="/media/docs/news/news-2019-01-01/прес-реліз.pdf" className="gold external" target="_blank">Прес-реліз</a></li>
          <li><a href="http://testportal.gov.ua" className="gold external" target="_blank">Український центр оцінювання якості освіти</a></li>
          <li><a href="https://zno-kharkiv.org.ua" className="gold external" target="_blank">Харківський регіональний центр оцінювання якості</a></li>
        </ul>
      </div>
    </WithSidebar>
  )
}
