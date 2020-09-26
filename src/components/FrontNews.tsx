import React from 'react'

export default () => {
  return (
    <div id="front_news_wrapper">
      <div className="slot1">
        <div className="header">
          <span className="text">Останні новини</span><a className="rss" href="/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw" title="Стрічка RSS">Стрічка RSS</a><span className="all"><a className="link" href="/home/news">архів новин</a></span>
        </div>
        <div className="content">
          <ul>
            <li className="ice-item">
              <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/104-news-2020-07-22"><span>Вибори Голови студентської ради міста Полтави</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/103-news-2020-07-21"><span>Проведення свята для дітей в реабілітаційному центрі з ураженнями нервової системи</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/102-news-2020-07-20"><span>Похід в Музей військових конфліктів</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/101-news-2020-07-19"><span>Захід до Міжнародного жіночого дня</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2019-12-09</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/89-news-2019-12-09"><span>Пробне ЗНО-2020</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2019-07-01</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/88-news-2019-07-01"><span>Висновок експертної комісії щодо акредитації за освітньо-кваліфікаційним рівнем «молодший спеціаліст...</span></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="vline" />

      <div className="slot2">
        <div className="header">
          <span className="text">Найближчі події</span><span className="all"><a className="link" href="/home/events">всі події</a></span>
        </div>
        <div className="content">
          <ul>
            <li className="ice-item">
              <span className="date news">2013-12-11</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/events/70-event-2013-12-11"><span>Конференція на тему «Сучасні тенденції розвитку українського суспільства в ХXІ столітті: погляд моло...</span></a>
            </li>
            <li className="ice-item">
              <span className="date news">2013-10-28</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/events/71-event-2013-10-28"><span>Тиждень іноземної мови</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
