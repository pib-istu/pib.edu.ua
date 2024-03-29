// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Екологія"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'
import ReadyBanner from 'components/ReadyBanner'
import ReadyBanner2 from 'components/ReadyBanner2'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Екологія, охорона навколишнього середовища та збалансоване природо... </h1>
      </div>
      <div id="pib-spec">
        <ul className="course">
          <li className="course float-left bold center">напрям:</li>
          <li className="desc float-left center">Екологія</li>
        </ul>
        <ul className="spec">
          <li className="top_course_image_wrapper"><img src="/../assets/pib/img/universal_pictures/5.jpg" /></li>
        </ul>
        <div className="clear-both" />
        <p className="first">Екологічні проблеми, серед яких охорона природи і здоров'я людей, постають одними з найсуттєвіших на сучасному етапі розвитку людського суспільства. Беручи до уваги стан екології та тенденції розвитку економіки України, можна констатувати зростаючу актуальність розв'язання цих проблем.</p>
        <p>Завдання, які виникають у зв'язку з цим, різноманітні і складні. На сьогодні комплексний характер цих задач обумовлює характер освіти спеціалістів, які їх розв'язують. Проблеми, пов'язані з екологією, належать до різних, іноді навіть не споріднених площин знань (техніка, математика, хімія, медицина, економіка, ґрунтознавство, біологія, геологія, право та інші). Підготовка універсальних спеціалістів навряд чи можлива. Однак можлива і доцільна підготовка таких спеціалістів, які володіли б високим рівнем гуманітарних і технічних знань, системним підходом до вирішення екологічних завдань.</p>
        <p>Студенти крім загальної, технічної та екологічної підготовки, поглиблено знайомляться з сучасними методами і засобами експлуатації і проектування різноманітних очисних споруд. Випускники цієї спеціалізації можуть виконувати функції екологів, інженерів-екологів, працівників екологічних держінспекцій, інженерів-проектувальників і експлуатаційників очисного обладнання тощо.</p>
        <h2 className="dashed bg gold">Випускники можуть працювати в таких установах:</h2>
        <ul className="list-dots">
          <li>Підприємства, що оцінюють рівень забруднення та здійснюють контроль якості різних компонентів навколишнього середовища (водного та повітряного простору, ґрунтів), а також продуктів харчування;</li>
          <li>Організації, що здійснюють постійний моніторинг стану навколишнього середовища;</li>
          <li>Підприємства з екологічно-небезпечними технологіями;</li>
          <li>Науково-дослідні установи;</li>
          <li>Природоохоронні організації;</li>
          <li>Муніципальні структури;</li>
        </ul>
        <h2 className="dashed bg gold">Посади, які може займати:</h2>
        <ul className="list-dots items list1 float-left">
          <li>Начальник відділу техногенно-екологічної безпеки;</li>
          <li>Соціологія</li>
          <li>Начальник відділу охорони навколишнього середовища;</li>
          <li>Інспектор з охорони природи;</li>
          <li>Начальник лабораторії з охорони навколишнього середовища;</li>
          <li>Інженер з охорони навколишнього середовища;</li>
          <li>Головний технолог з природоохоронних робіт;</li>
          <li>Інженер з охорони природних екосистем;</li>
          <li>Інженер з охорони та захисту лісу;</li>
          <li>Інженер з охорони тваринного світу;</li>
        </ul>
        <ul className="list-dots items list2 float-left">
          <li>Екологічний аудитор;</li>
          <li>Експерт з екології;</li>
          <li>Лаборант хімічного аналізу;</li>
          <li>Лаборант з аналізу газів та пилу;</li>
          <li>Молодший науковий співробітник (агрономія, зоотехнія, лісівництво, природно-заповідна справа);</li>
          <li>Технік-еколог;</li>
          <li>Фахівець з екологічної освіти;</li>
          <li>Фахівець з економічного моделювання екологічних систем;</li>
          <li>Фахівець з рекреації;</li>
          <li>Фахівець з управління природокористуванням.</li>
        </ul>
      </div>

      <ReadyBanner2 />
      <ReadyBanner />
    </WithSidebar>
  )
}
