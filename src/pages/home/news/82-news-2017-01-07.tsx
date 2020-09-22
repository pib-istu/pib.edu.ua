// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Запрошуемо студентів відвідати конференцію"

import React from 'react'
import { WithSidebar } from 'components/Layout'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="item-page_blog">
        <div className="blog-item-header">
          <div className="date">07.01.2017</div><h2> <a href="/home/news/82-news-2017-01-07">
              Запрошуемо студентів відвідати конференцію</a>
          </h2>
          <div className="clear-both" />
        </div>
        <p>До уваги студентів!</p>
        <p><strong>25 лютого 2017</strong> року відбудеться практична конференція на тему: «Можливості самореалізації молоді на прикладах успішних молодих людей».</p>
        <p>Студенти мають нагоду:</p>
        <ul className="list-dots">
          <li>почути історії досягнень найуспішніших молодих людей з практичними порадами і рекомендаціями;</li>
          <li>взяти участь у конкурсі «Мої досягнення», призовий фонд якого складає <strong>20 000 грн.</strong></li>
        </ul>
        <p>Детальна інформація на <a href="https://allprices.com.ua/conference/" target="_blank">сайті конференції</a>.</p>
      </div>
    </WithSidebar>
  )
}
