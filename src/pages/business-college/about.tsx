import { WithSidebar } from 'components/Layout'
// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Бізнес-коледж"

import React from 'react'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={false}>
      <div id="page-header">
        <h1 className="text">
          Полтавський бізнес-коледж </h1>
      </div>
      <div className="other-wrapper pib-college">
        <div id="intro" className="pib-college">
          <div className="illustration float-left" />
          <p className="center first">Полтавський бізнес-коледж Міжнародного науково-технічного університету імені академіка Юрія Бугая</p>
          <p className="center invite bold light">запрошує на навчання випускників 9-х, 11-х класів</p>
          <p className="info"><span className="light bold uppercase">Освітньо-кваліфікаційний рівень:</span> молодший спеціаліст.</p>
          <p><span className="light bold uppercase">Форма навчання:</span> денна.</p>
        </div>
        <div id="benefits">
          <h2 className="bold orange">Наші переваги:</h2>
          <ul className="list-dots float-left">
            <li><span className="bold">престижний диплом</span><br />диплом столичного університету на доступних
              фінансових умовах</li>
            <li><span className="bold">зручна форма оплати за навчання</span><br />плата вноситься щомісячно,
              договір укладається на весь період навчання</li>
          </ul>
          <div className="highlight blue float-left center"><p>випускники коледжу зараховуються</p><p className="bold light uppercase">без вступних іспитів</p><p>на ІІ курс Міжнародного науково-технічного університету імені академіка Юрія Бугая</p></div>
        </div>
      </div>
      <div className="clear-both" />
      <div className="other-wrapper">
        <a id="courses" />
        <h1 className="pib highlight center orange uppercase">Спеціальності коледжу:</h1>
        <div className="pib-courses-wrapper">
          <div className="clear-both" />
          <ul className="pib-courses">
            <li className="item1">
              <a href="/business-college/courses/course-college-law" className="block unline"><span className="course float-left block"><span className="orange">081 Право</span></span><span className="course-desc float-left block">
                  <p>Юрист - це одна з найбільш поширених, необхідних і високооплачуваних професій у цивілізованому суспільстві. Кожному потрібен свій юрист, як і свій лікар.</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item1">
              <a href="/business-college/courses/course-college-physical-education-and-sport" className="block unline"><span className="course float-left block"><span className="orange">017 Фізична культура і спорт</span></span><span className="course-desc float-left block">
                  <p>«Фізичне виховання» - складова частина системи загального виховання; спеціально організований процес, спрямований на зміцнення здоров'я і загартування організму людини, гармонійний розвиток її функцій і фізичних можливостей, формування важливих рухових здібностей, навичок і вмінь.</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item3">
              <a href="/business-college/courses/course-college-it" className="block unline"><span className="course float-left block"><span className="orange">121 Інженерія програмного забезпечення</span></span><span className="course-desc float-left block">
                  <p>Інженерія програмного забезпечення – спеціальність, спрямована на розробку програмних систем, які працюють надійно та ефективно, вартість розробки та супроводу яких є доступною, і які задовольняють вимогам, висунутим до них замовниками. Сьогодні фахівці з інженерії програмного забезпечення є найбільш затребуваними на ринку праці серед інших фахівців з інформаційних технологій, вони приймають участь у розробці вітчизняних і міжнародних програмних проектів, і мають достойну оплату своєї праці. Попит на фахівців з інженерії програмного забезпечення у майбутньому буде тільки зростати!</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item10">
              <a href="/business-college/courses/course-college-petroleum-engineering-and-technology" className="block unline"><span className="course float-left block"><span className="orange">185 Нафтогазова інженерія та технології</span></span><span className="course-desc float-left block"><p>Жодна сировина не викликає стільки хвилювань та не приносить стільки прибутків, як нафта та газ, які є головними енергоносіями. Уміння використовувати ці ключові продукти та їх запаси, тримати в руках ниточки бізнесу у цих напрямках, визначає шлях до економічного процвітання та вибору політичної і економічної стратегії держави.</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item5">
              <a href="/business-college/courses/course-college-finance" className="block unline"><span className="course float-left block"><span className="orange">072 Фінанси, банківська справа та страхування</span></span><span className="course-desc float-left block">
                  <p>Галузь діяльності фінансиста - планування та управління фінансовими потоками. Головне завдання фінансиста - планувати, куди вкласти гроші; кому, в кого і скільки позичити; які акції придбати і як вигідно продати свої; вміти раціонально розпоряджатися коштами, знаходити шляхи зменшення витрат і збільшення прибутку, ефективно управляти прибутком і рентабельністю, здійснювати фінансовий контроль; обирати ефективні форми розрахунків та умови платежів; орієнтуватися в оподаткуванні, вміти захищати заощадження від інфляції.</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item6">
              <a href="/business-college/courses/course-college-accountancy" className="block unline"><span className="course float-left block"><span className="orange">071 Облік і оподаткування</span></span><span className="course-desc float-left block"><p>В сучасних умовах облік і аудит - інструменти управління, підвищення ефективності господарювання, оскільки забезпечують власників і управлінців, фахівців інформацією про економічні процеси і явища, ресурси та ефективність їх використання у всіх секторах економіки.</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
            <li className="item7">
              <a href="/business-college/courses/course-college-management" className="block unline"><span className="course float-left block"><span className="orange">073 Менеджмент</span></span><span className="course-desc float-left block">
                  <p>Підготовка студентів за спеціальністю «Менеджмент» здійснюється для виконання ними в майбутньому організаційно-управлінської, комерційної, аналітичної та науково-дослідної діяльності в галузі менеджменту, маркетингу, соціальної активізації праці в умовах конкуренції та ринкових відносин в підприємствах різних форм господарювання</p>
                  <span className="gold underline arrow-gold">Дізнатися більше</span></span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="clear-both" />
      <div className="other-wrapper">
        <div id="ready-apply" className="highlight">
          <div className="header bold float-left">
            Вже вирішив?<br />
            Подай заявку на вступ в режимі онлайн!
          </div>
          <div className="apply float-left">
            <a href="/entrant/apply" className="button-apply block indent">Подати заявку на вступ</a>
          </div>
        </div>
      </div>
    </WithSidebar>
  )
}
