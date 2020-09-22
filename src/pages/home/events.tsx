// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Розклад подій"

import React from 'react'
import { WithSidebar } from 'components/Layout'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="blog_blog">
        <div id="page-header">
          <h1 className="text">
            Розклад подій	</h1>
        </div>

        <div className="blog-item-header">
          <div className="date">11.12.2013</div><h2> <a href="/home/events/70-event-2013-12-11">
              Конференція на тему «Сучасні тенденції розвитку українського суспільства в ХXІ столітті: погляд молоді»</a>
          </h2>
          <div className="clear-both" />
        </div>
        <div className="blog-item-header">
              <div className="date">28.10.2013</div><h2> <a href="/home/events/71-event-2013-10-28">
                  Тиждень іноземної мови</a>
              </h2>
              <div className="clear-both" />
            </div>
      </div>
    </WithSidebar>
  )
}
