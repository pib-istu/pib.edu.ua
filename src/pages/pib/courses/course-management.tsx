// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Менеджмент"

import React from 'react'
import { WithSidebar } from 'components/Layout'
import ReadyBanner from 'components/ReadyBanner'
import ReadyBanner2 from 'components/ReadyBanner2'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Менеджмент </h1>
      </div>
      <div id="pib-spec">
        <ul className="course">
          <li className="course float-left bold center">напрям:</li>
          <li className="desc float-left center">Менеджмент</li>
        </ul>
        <ul className="spec">
          <li className="top_course_image_wrapper"><img src="/../templates/pib/img/universal_pictures/4.jpg" /></li>
        </ul>
        <div className="clear-both" />
        <p className="first"><span className="bold">Підготовка студентів за спеціальністю «Менеджмент» </span>здійснюється для виконання ними в майбутньому організаційно-управлінської, комерційної, аналітичної та науково-дослідної діяльності в галузі менеджменту, маркетингу, соціальної активізації праці в умовах конкуренції та ринкових відносин в підприємствах різних форм господарювання</p>
        <h2 className="dashed bg gold">Сучасний менеджер здатний виконувати ряд виробничих функцій:</h2>
        <ul className="list-dots">
          <li>управлінець, наділений владою, що керує великим колективом людей;</li>
          <li>лідер, спроможний вести за собою підлеглих, використовуючи свій авторитет, високий професіоналізм, позитивні емоції;</li>
          <li>людина, яка має певні комунікативні здібності, що постійно встановлює контакти з партнерами і владою, що успішно переборює внутрішні і зовнішні конфлікти;</li>
          <li>людина, яка наділена стратегічним мисленням, може формувати цілі, основні види діяльності та напрямок «основного удару», визначати союзників і супротивників, власні переваги та напрямок їх використання;</li>
          <li>новатор, що розуміє роль науки в сучасних умовах, що вміє оцінити і без зволікання впровадити у виробництво той або інший винахід або раціоналізаторську пропозицію;</li>
          <li>людина, яка має високий рівень культури, чесна, рішуча за характером й у той же час розважлива. В практичному менеджменті не аби яке значення набуває терпимість, розуміння, що не всі люди однакові;</li>
          <li>вихователь, що володіє високими моральними якостями, спроможний створити колектив і спрямовувати його розвиток, формувати організаційну культуру організації.</li>
        </ul>
      </div>

      <ReadyBanner2 />
      <ReadyBanner />
    </WithSidebar>
  )
}
