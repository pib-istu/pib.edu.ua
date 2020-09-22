// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Пробне ЗНО-2020"

import React from 'react'
import { WithSidebar } from 'components/Layout'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="item-page_blog">
        <div className="blog-item-header">
          <div className="date">09.12.2019</div><h2> <a href="/home/news/89-news-2019-12-09">
              Пробне ЗНО-2020</a>
          </h2>
          <div className="clear-both" />
        </div>
        <p>Шановні студенти!</p>
        <p>Надаємо загальну інформацію щодо пробного ЗНО-2020:</p>
        <p>
          <a href="/media/docs/news/news-2019-12-09/пробне-ЗНО-2020.pdf" className="highlight gold" style={{display: 'inline-block', padding: '20px'}} target="_blank">Порядок проведення пробного ЗНО-2020</a>
        </p>
      </div>
    </WithSidebar>
  )
}
