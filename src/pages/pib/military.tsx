// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Військова кафедра"

import React from 'react'
import { WithSidebar } from 'components/Layout'
import ReadyBanner from 'components/ReadyBanner'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Військова кафедра </h1>
      </div>
      <a style={{}} className="thumbnail" href="/images/articles/military.jpg" rel="lightbox[11]" title="Студенти військової кафедри" target="_blank"><img src="/images/maverik/thumbs/images/articles/military-200pxx150.jpg" alt="Студенти військової кафедри" title="Студенти військової кафедри" width="200px" className="thumb float-left border first" height={150} /></a>
      <p style={{paddingTop: '12px'}}>Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової підготовки <a href="http://viti.kpi.ua/" target="_blank" className="external">Військового інституту телекомунікацій та інформатизації</a> Національного технічного університету України «Київський політехнічний інститут» організовано навчання за програмою підготовки офіцерів запасу.</p>
      <p className="clear-both">Навчання триває <span className="bold">два роки</span>.</p>
      <p>Після закінчення повного курсу військової підготовки наказом Міністра оборони України випускникам присвоюється військове звання <span className="bold">молодший лейтенант запасу</span>.</p>
      <div className="highlight military">
        <h3>Студентам до початку конкурсного відбору необхідно:</h3>
        <ul className="list-dots">
          <li>подати заяву на ім’я декана факультету (директора інституту) про бажання проходити військову підготовку;</li>
          <li>до заяви додати копію паспорта громадянина України ( перша сторінка), копію ідентифікаційного коду, копію приписного свідотства з відміткою про придатність до військової служби;</li>
          <li>пройти військово-лікарську комісію за місцем перебування на військовому обліку.</li>
        </ul>
        <p>Також рекомендовано ознайомитись з <a href="http://kpi.ua/vp" target="_blank" className="external gold unline">пам’яткою студенту військової підготовки</a></p>
      </div>
      <div className="thumb border float-right" style={{width: '250px'}}><a style={{}} className="thumbnail" href="/images/articles/military_loza.jpg" rel="lightbox[11]" title="Голова Факультету військової підготовки, полковник Лоза Олександр Михайлович" target="_blank"><img src="/images/maverik/thumbs/images/articles/military_loza-250pxx187.jpg" alt="Голова Факультету військової підготовки, полковник Лоза Олександр Михайлович" width="250px" className="thumb" height={187} /></a><span>Голова Факультету військової підготовки<br />полковник <strong>Лоза Олександр Михайлович</strong><span /></span></div>
      <p>ВІТІ НТУУ "КПІ" є структурним підрозділом Національного технічного університету України "КПІ" та здійснює набір на підготовку офіцерських кадрів за освітньо-кваліфікаційним рівнем <span className="bold">"бакалавр"</span>, <span className="bold">"спеціаліст"</span> та <span className="bold">"магістр"</span>.</p>
      <p>
        <span className="bold">Факультет очолює:</span> полковник Лоза Олександр Михайлович<br />
        <span className="bold">Адреса:</span> вул. Московська, 45/1 (кафедри 41, 42, 43), вул. Верхньоключова, 4 (кафедра 44, 45, 46,47, 48)<br />
        <span className="bold">Телефон:</span> 406-83-31 (черговий факультету)<br />
        <span className="bold">Офіційний сайт:</span> <a href="http://fvp.kpi.ua/" target="_blank" className="external gold unline">www.fvp.kpi.ua</a>
      </p>

      <ReadyBanner />
    </WithSidebar>
  )
}
