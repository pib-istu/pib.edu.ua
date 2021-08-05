// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Фінанси, банківська справа та страхування"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'
import ReadyBanner from 'components/ReadyBanner'
import ReadyBanner2 from 'components/ReadyBanner2'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Фінанси, банківська справа та страхування </h1>
      </div>
      <div id="pib-spec">
        <ul className="course">
          <li className="course float-left bold center">напрям:</li>
          <li className="desc float-left center">Фінанси, банківська справа та страхування</li>
        </ul>
        <ul className="spec">
          <li className="top_course_image_wrapper"><img src="/../assets/pib/img/universal_pictures/2.jpg" /></li>
        </ul>
        <div className="clear-both" />
        <p className="first">Галузь діяльності фінансиста - планування та управління фінансовими потоками. Головне завдання фінансиста - планувати, куди вкласти гроші; кому, в кого і скільки позичити; які акції придбати і як вигідно продати свої; вміти раціонально розпоряджатися коштами, знаходити шляхи зменшення витрат і збільшення прибутку, ефективно управляти прибутком і рентабельністю, здійснювати фінансовий контроль; обирати ефективні форми розрахунків та умови платежів; орієнтуватися в оподаткуванні, вміти захищати заощадження від інфляції.</p>
        <h2 className="dashed bg gold">Спеціальність «Фінанси, банківська справа та страхування» надає знання, необхідні в сферах:</h2>
        <ul className="list-dots">
          <li>державних і муніципальних фінансів, податків;</li>
          <li>банківської і страхової справи, грошового обігу;</li>
          <li>фінансового менеджменту, фінансових ринків, у т.ч. міжнародних;</li>
          <li>оцінки вартості бізнесу, аудиту;</li>
          <li>фінансового посередництва (інвестиційних компаній, пенсійних фондів, довірчих товариств, кредитних спілок, лізингових компаній, факторингу, лотерей, ломбардів, операцій з нерухомим майном, фінансування будівництва житла);</li>
          <li>валютних операцій, біржової діяльності;</li>
          <li>фінансів підприємств, корпоративної власності;</li>
          <li>організаційно-управлінській, науково-дослідній та освітній.</li>
        </ul>
        <p className="first">Спеціаліст за фахом «Фінанси, банківська справа та страхування» готовий до професійної роботи у фінансових органах державного, регіонального і муніципального рівнів, банках, біржах, страхових компаніях, інвестиційних фондах, економічних службах підприємств і організацій всіх форм власності, на посадах, що вимагають вищої економічної освіти.</p>
      </div>

      <ReadyBanner2 />
      <ReadyBanner />
    </WithSidebar>
  )
}
