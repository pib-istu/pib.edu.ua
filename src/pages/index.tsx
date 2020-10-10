import React from 'react'
import FrontOpinions from 'components/FrontOpinions'
import FrontNews from 'components/FrontNews'
import FrontPhotos from 'components/FrontPhotos'

export default () => {
  return (
    <>
      <link rel="stylesheet" href="/modules/mod_icetabs/themes/default-white/assets/style.css" />
      <link rel="stylesheet" href="/modules/mod_icetabs/themes/default-black/assets/style.css" />

      <div id="front_main_wrapper">
        <ul className="front_promo">
          <li><a className="slot_1" href="/pib/benefits/#anchor1"><span className="front_promo_title_double">Якість та<br />
                досвід</span><br />
              <span className="front_promo_sub">Успішно надаємо якісну освіту вже понад 20-ть років</span></a>
          </li>
          <li><a className="slot_2" href="/pib/benefits/#anchor2"><span className="front_promo_title_double">Диплом<br />
                міжнародного зразка</span><br />
              <span className="front_promo_sub">Відкрийте для себе шлях закордон з дипломом МНТУ</span></a>
          </li>
          <li><a className="slot_3" href="/pib/benefits/#anchor3"><span className="front_promo_title_double">Професіоналізм</span><br />
              <span className="front_promo_sub">Ми знаємо як зробити так, щоб наші випускники стали найкращими</span></a>
          </li>
        </ul>
        <div id="front_info">
          <h1 className="title block center">«Почни життя з якісної освіти!»</h1>
          <p>Успішна кар'єра починається з якісного навчання. Всіх наших випускників об'єднує їх одна досягнута Мета: Висока зарплата, Високий рівень життя, Комфорт, Безпека!</p>
          <p>Забезпечення всіх умов для здобуття молоддю якісної освіти є одним із пріоритетів нашого університету!</p>
          <p>Є чудовий вислів у В. О. Сухомлинського : «Ми маємо справу з найскладнішим, неоціненним, найдорожчим, що є у житті - з людиною. Від нас, від нашого вміння, майстерності, мистецтва, мудрості залежить її життя, здоров’я, розум, характер, воля, громадянське й інтелектуальне обличчя».</p>
          <p>Головна мета ПІБ МНТУ - створити умови для розвитку та самореалізації кожної особистості як громадянина України, формувати покоління, здатне навчатися впродовж життя, створювати й розвивати цінності громадянського суспільства.<br />
            А це можливо лише при умові якісної освіти.
          </p>
          <p>Ви зараз знаходитесь на надзвичайно важливому етапі вашого самостійного життя - виборі майбутньої професії.</p>
          <a className="button block" href="/pib/about" title="Дізнатися більше про ПІБ МНТУ">Дізнатися більше про ПІБ МНТУ</a>
          <p className="bold italic">Тож зробіть правильний вибір!<br />
            Обирайте навчання в Полтавському інституті бізнесу<br />
            Міжнародного науково-технічного університету імені академіка Юрія Бугая!<br />
          </p>
        </div>
      </div>

      <FrontOpinions />

      <div id="front_action">
        <div id="front_action_wrapper">
          <div className="slot1">
            <a className="title" href="/pib#courses">Спеціальності</a> <span role="presentation" className="icon"></span>
            <p>Пропонуємо <span className="bold">6 спеціальностей</span>, за якими здійснюється підготовка фахівців у ПІБ МНТУ</p>
            <a className="button" href="/pib#courses">Ознайомитись</a>
          </div>
          <div className="slot2">
            <a className="title" href="/other/juridical-help">Юридична допомога</a> <span role="presentation" className="icon"></span>
            <p>Потрібна юридична допомога, але ви не маєте змоги звернутися за платною допомогою? Скористайтеся послугами безкоштовної юридичної студентської клініки!</p>
            <a className="button" href="/other/juridical-help">Детальніше</a>
          </div>
          <div className="slot3">
            <a className="title" href="/entrant/apply">Бажаєш вчитися?</a><br className="clear-both" />
            <a role="presentation"  className="icon">Подати заявку на вступ до ПІБ МНТУ</a>
            <p>Зацікавились ПІБ МНТУ?<br />Дякуємо за вибір нашого ВУЗу!<br />Розпочніть свій процес вступу до ПІБ МНТУ прямо зараз, в режимі онлайн:</p>
            <a className="link" href="/entrant/entrance">Вступ до ПІБ МНТУ</a><span className="arrow">&nbsp;»</span><a className="button" href="/entrant/apply">Подати заявку на вступ</a>
          </div>
        </div>
      </div>

      <div id="front_news">
        <FrontNews />
        <FrontPhotos />
      </div>
  </>
)}
