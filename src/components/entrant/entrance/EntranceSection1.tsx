import React, { FC } from 'react';
import { EntranceSectionFooter } from './EntranceSectionFooter';

const CURRENT_YEAR = new Date().getFullYear();

export const EntranceSection1: FC = () => {
  return (
    <div id="entrance-item1" className="entrance-wrap toggleDiv2 clear-both" style={{ display: 'none' }}>
      <ul>
        <li className="entrance-terms">
          <div className="list-steps">
            <div className="step float-left">2</div>
            <h2 className="block orange float-left">Умови вступу:</h2>
          </div>

          <div className="content">
            <p>Особи, які здобули повну загальну середню освіту і бажають вступити до ПІБ МНТУ:</p>

            <div className="center"><p><span className="bold">подають документи, що підтверджують їх право брати участь у конкурсі за результатами зовнішнього незалежного оцінювання</span></p></div>
            <div className="center"><p><span className="italic">або</span></p></div>
            <div className="center"> <p><span className="bold">поступають за результатами вступних іспитів з конкурсних предметів в МНТУ</span></p></div>
            <div className="center"><p><span className="italic">за власним вибором</span>.</p></div>

            <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-cert">Перелік конкурсних предметів / предметів, з яких можуть бути подані сертифікати</a>

            <div id="entrance-cert" style={{ display: 'none' }}>
              <table style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr className="header">
                    <td className="course">
                      Напрями підготовки
                    </td>
                    <td className="item">
                      Сертифікати ЗНО
                    </td>
                    <td className="score">
                      Мінімальна кількість балів*
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={3} className="course">
                      <span className="code">6.010203 </span>Здоров’я людини/фізична реабілітація
                    </td>
                    <td className="item proDISABLEDfile">
                      1. Українська мова та література
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      2. Біологія
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      3. Творчий конкурс
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={3} className="course">
                      <span className="code">6.030508 </span>Фінанси і кредит
                    </td>
                    <td className="item proDISABLEDfile">
                      1. Українська мова та література
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      2. Математика
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      3. Географія
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={3} className="course">
                      <span className="code">6.030509 </span>Облік і аудит
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item proDISABLEDfile">
                      2. Математика
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      3. Історія
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={3} className="course">
                      <span className="code">6.030401 </span>Правознавство
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item proDISABLEDfile">
                      2. Історія України
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      3. Іноземна мова
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={3} className="course">
                      <span className="code">6.030601 </span>Менеджмент
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      2. Історія
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item proDISABLEDfile">
                      3. Іноземна мова
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={3} className="course">
                      <span className="code">6.040106 </span>Екологія, охорона навколишнього середовища та збалансоване природокористування
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      2. Біологія
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item proDISABLEDfile">
                      3. Математика
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={3} className="course">
                      <span className="code">6.050902 </span>Радіоелектронні апарати
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      2. Історія України
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item proDISABLEDfile">
                      3. Хімія
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={3} className="course last-left">
                      <span className="code">6.050103 </span>Програмна інженерія
                    </td>
                    <td className="item">
                      1. Українська мова та література
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      2. Іноземна мова
                    </td>
                    <td className="score">
                      100
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item proDISABLEDfile">
                      3. Фізика
                    </td>
                    <td className="score proDISABLEDfile">
                      100
                    </td>
                  </tr>
                </tbody></table>
              <p className="center italic">
                * — мінімальна кількість балів для допуску до участі в конкурсі або зарахування на навчання поза конкурсом, за співбесідою
              </p>
            </div>

            <p style={{ paddingTop: '15px' }}>Вступники мають право подавати сертифікат зовнішнього незалежного оцінювання, виданий у <span className="bold">{CURRENT_YEAR}</span> році.</p>
            <p>Звертаємо Вашу увагу на те, що законодавством України певним категоріям громадян надано право на <span className="bold italic">зарахування поза конкурсом</span>.</p>

            <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-comp">Перелік осіб, які мають право на зарахування поза конкурсом</a>

            <div id="entrance-comp" style={{ display: 'none' }}>
              <ul className="entrance-comp list-dots">
                <li>особи, яким відповідно до Закону України «Про статус ветеранів війни, гарантії їх соціального захисту» надане таке право;</li>
                <li>інваліди I та II груп та діти-інваліди віком до 18 років, яким не протипоказане навчання за обраним напрямом, відповідно до Закону України «Про основи соціальної захищеності інвалідів в Україні»;</li>
                <li>особи, яким відповідно до Закону України «Про статус і соціальний захист громадян, які постраждали внаслідок Чорнобильської катастрофи» надане таке право;</li>
                <li>особи, яким відповідно до Закону України «Про підвищення престижності шахтарської праці» надане таке право;</li>
                <li>члени збірних команд України, які брали участь у міжнародних олімпіадах, перелік яких визначений центральним органом виконавчої влади у сфері освіти і науки;</li>
                <li>чемпіони і призери Олімпійських і Параолімпійських ігор — за спеціальностями в галузі фізичної культури та спорту.</li>
              </ul>
            </div>
          </div>
        </li>

        <li className="entrance-documents">
          <div className="list-steps">
            <div className="step float-left">3</div>
            <h2 className="block orange float-left">Перелік документів, що необхідно надати:</h2>
          </div>

          <div className="content">
            <ul className="list-dots">
              <li>Заяву на ім'я ректора із зазначенням обраної спеціальності та форми навчання<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">(заповнюється безпосередньо в приймальній комісії)</span></li>
              <li>6 фотокарток 3х4</li>
              <li>Паспорт (дві копії 1, 2, 11 стор.)</li>
              <li>Ідентифікаційний номер (дві копії)</li>
              <li>Копію військового квитка (приписного свідоцтва)</li>
              <li>Документ про освіту з додатком (оригінал та копія)</li>
              <li>Сертифікат Українського центру оцінювання якості освіти</li>
            </ul>

            <p className="center">Паспорт, військовий квиток (свідоцтво) та документи, які надають право на пільги, абітурієнтами <span className="bold">подаються особисто</span></p>

            <h3 className="highlight orange">Особи, які мають право вступу без сертифікату (сертифікатів) зовнішнього незалежного оцінювання</h3>

            <p className="h3-highlight">особи із захворюваннями, зазначеними у <a href="http://zakon4.rada.gov.ua/laws/show/z0189-08" className="external">Переліку захворювань</a>, затвердженому наказом МОН та МОЗ України, мають право вступу <b>за результатами іспиту</b> і <b>подають документи</b>, які засвідчують їх право на це.</p>
          </div>
        </li>

        <EntranceSectionFooter />
      </ul>
    </div>
  )
}
