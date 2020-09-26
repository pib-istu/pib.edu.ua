import React from 'react'

export default () => {
  return (
    <div className="custom">
      <ul id="pib-course-actions">
        <li className="benefits button-overlay float-left">
          <a href="/pib/benefits" className="block unline">
            <span className="title">Чому ПІБ МНТУ</span><br />
            <span className="desc">Про наші ключові переваги</span>
          </a>
        </li>
        <li className="entrance button-overlay float-left">
          <a href="/entrant/entrance" className="block unline">
            <span className="title">Вступ до ПІБ МНТУ</span><br />
            <span className="desc">Про процес та умови вступу</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
