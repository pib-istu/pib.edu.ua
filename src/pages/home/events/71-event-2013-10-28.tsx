// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Тиждень іноземної мови"

import React from 'react'
import { WithSidebar } from 'components/Layout'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="item-page_blog">
        <div id="page-header">
          <h1 className="text">
            Розклад подій	</h1>
        </div>
        <div className="blog-item-header">
          <div className="date">28.10.2013</div><h2> <a href="/home/events/71-event-2013-10-28">
              Тиждень іноземної мови</a>
          </h2>
          <div className="clear-both" />
        </div>
        Тиждень іноземної мови
        <p><b>Час:</b> щодня з 28.10.2013 по 01.11.2013</p>
        <p><b>Місце проведення:</b> <a href="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&aq=&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&ie=UTF8&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hnear=&ll=49.588236,34.539428&spn=0.009487,0.017939&z=15&iwloc=A">Полтавський інститут бізнесу</a></p>
        <h2>План заходів:</h2>
        <ul className="list-dots">
          <li><span className="text-dim">Понеділок</span> <span className="text-blue bold">28.10.2013</span> − Презентація груп на тему «Іноземні мови в нашому житті»</li>
          <li><span className="text-dim">Вівторок</span> <span className="text-blue bold">29.10.2013</span> − Стінгазети на тему «Короткий путівник по англомовним країнам»</li>
          <li><span className="text-dim">Середа</span> <span className="text-blue bold">30.10.2013</span> − Світ у 80-х <span className="text-dim">(відтворення реальності)</span></li>
          <li><span className="text-dim">Четвер</span> <span className="text-blue bold">31.10.2013</span> − «Брейн-ринг» <span className="text-dim">(5 команд по 6 чоловік)</span></li>
          <li><span className="text-dim">П'ятниця</span> <span className="text-blue bold">01.11.2013</span> − «Хелоуін»</li>
        </ul>
      </div>
    </WithSidebar>
  )
}
