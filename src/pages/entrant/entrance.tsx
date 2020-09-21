// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Абітурієнту"

import React, { useEffect } from 'react'

declare var jQuery: any

export default () => {
  useEffect(() => {
    jQuery(document).ready(function () {
      jQuery('.divslide2').bind('click', function(this: any) {
        if(jQuery(this).hasClass('active')) {
          // remove the active class
          jQuery(this).removeClass('active')
        }
        else {
          // remove the active class from all elements with active class
          jQuery('.divslide2.active').removeClass('active')
          // add active class to clicked element
          jQuery(this).addClass('active');
        }
      });
    });

    jQuery(document).ready(function () {
      jQuery('.divslide3').bind('click', function(this: any) {
        if(jQuery(this).hasClass('active')) {
          // remove the active class
          jQuery(this).removeClass('active')
        }
        else {
          // add active class to clicked element
          jQuery(this).addClass('active');
        }
      });
    });

    jQuery('.divslide2').showHide({
      speed: 500,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });

    jQuery('.divslide3').showHide({
      speed: 300,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });
  }, [])

  return (
    <>
      <div id="page-header">
        <h1 className="text">
          Вступ до ПІБ МНТУ </h1>
      </div>
      <div id="intro" className="entrance">
        <div className="illustration float-left" />
        <p>На даній сторінці ви зможете знайти детальну інформацію щодо вступу до ПІБ МНТУ, а саме: умови вступу, перелік документів, перелік предметів, з яких подаються сертифікати та іншу важливу для вас інформацію.</p>
      </div>
      <div className="list-steps clear-both">
        <span className="step float-left">1</span>
        <h2 className="orange float-left"> Будь-ласка, вкажіть випускником якого навчального закладу Ви є:</h2>
      </div>
      <ul className="entrance-type">
        <li className="item1">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item1"><b>Середніх загальноосвітніх навчальних закладів</b></a>
        </li>
        <li className="item3">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item3">Вищих навчальних закладів <b>І-ІІ рівня акредитації</b><br /> <span className="block">(якщо бажаєте продовжити навчання за спорідненими спеціальностями)</span></a>
        </li>
        <li className="item2">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item2">Вищих навчальних закладів <b>ІІІ-ІУ рівня акредитації</b></a>
        </li>
      </ul>
      <div id="entrance-item1" className="entrance-wrap toggleDiv2 clear-both" style={{display: 'none'}}>
        <ul>
          <li className="entrance-terms">
            <div className="list-steps">
              <div className="step float-left">2</div>
              <h2 className="block orange float-left"> Умови вступу:</h2>
            </div>
            <div className="content">
              <p>Особи, які здобули повну загальну середню освіту і бажають вступити до ПІБ МНТУ:</p>
              <div className="center"><p><span className="bold">подають документи, що підтверджують їх право брати участь у конкурсі за результатами зовнішнього незалежного оцінювання</span></p></div>
              <div className="center"><p><span className="italic">або</span></p></div>
              <div className="center"> <p><span className="bold">поступають за результатами вступних іспитів з конкурсних предметів в МНТУ</span></p></div>
              <div className="center"><p><span className="italic">за власним вибором</span>.</p></div>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-cert">Перелік конкурсних предметів / предметів, з яких можуть бути подані сертифікати</a>
              <div id="entrance-cert" style={{display: 'none'}}>
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
              <p style={{paddingTop: '15px'}}>Вступники мають право подавати сертифікат зовнішнього незалежного оцінювання, виданий у <span className="bold">2015</span> році.</p>
              <p>Звертаємо Вашу увагу на те, що законодавством України певним категоріям громадян надано право на <span className="bold italic">зарахування поза конкурсом</span>.</p>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-comp">Перелік осіб, які мають право на зарахування поза конкурсом</a>
              <div id="entrance-comp" style={{display: 'none'}}>
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
              <ul className="documents">
                <li>– Заяву на ім'я ректора із зазначенням обраної спеціальності та форми навчання<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">(заповнюється безпосередньо в приймальній комісії)</span></li>
                <li>– 6 фотокарток 3х4</li>
                <li>– Паспорт (дві копії 1, 2, 11 стор.)</li>
                <li>– Ідентифікаційний номер (дві копії)</li>
                <li>– Копію військового квитка (приписного свідоцтва)</li>
                <li>– Документ про освіту з додатком (оригінал та копія)</li>
                <li>– Сертифікат Українського центру оцінювання якості освіти</li>
              </ul>
              <p className="center">Паспорт, військовий квиток (свідоцтво) та документи, які надають право на пільги, абітурієнтами <span className="bold">подаються особисто</span></p>
              <h3 className="highlight orange">Особи, які мають право вступу без сертифікату (сертифікатів) зовнішнього незалежного оцінювання</h3>
              <p className="h3-highlight">особи із захворюваннями, зазначеними у <a href="http://zakon4.rada.gov.ua/laws/show/z0189-08" className="external">Переліку захворювань</a>, затвердженому наказом МОН та МОЗ України, мають право вступу <b>за результатами іспиту</b> і <b>подають документи</b>, які засвідчують їх право на це.</p>
            </div>
          </li>
          <li className="entrance-info">
            <div className="list-steps">
              <div className="step float-left">4</div>
              <h2 className="block orange float-left"> Додаткова інформація:</h2>
            </div>
            <div className="content">
              <ul>
                <li className="item1 float-left">
                  <a href="/media/docs/Правила%20прийому%20ПІБ%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПІБ МНТУ</a><br />
                  <a href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" className="gold external" target="_blank">Умови прийому МОН 2015</a>
                </li>
                <li className="item2 button-overlay float-left">
                  <a href="/entrant/faq" className="block unline">
                    <span className="title">Часто запитують</span><br />
                    <span className="desc">Відповіді на часті запитання</span>
                  </a>
                </li>
                <li className="item3 button-overlay float-left">
                  <a href="/pib/license" className="block unline">
                    <span className="title">Ліцензія та сертификати</span>
                  </a>
                </li>
                <li className="item4 button-overlay float-left">
                  <a href="/contact" className="block unline">
                    <span className="title">Є запитання?</span><br />
                    <span className="desc">Зв’яжіться з нами</span>
                  </a>
                </li>
              </ul>
              <p className="center clear-both">Найбільш активні студенти мають змогу отримати <span className="italic">пільги</span></p>
            </div>
          </li>
          <li className="entrance-apply">
            <a href="/entrant/apply" className="button-apply block indent">Подати заявку на вступ</a>
            <p className="center">або зателефонуйте до приймальної комісії за номером<br />
              <span className="orange bold">(0532) 50-81-05</span></p>
          </li>
        </ul>
      </div>
      <div id="entrance-item3" className="entrance-wrap toggleDiv2 clear-both" style={{display: 'none'}}>
        <ul>
          <li className="entrance-terms">
            <div className="list-steps">
              <div className="step float-left">2</div>
              <h2 className="block orange float-left"> Умови вступу:</h2>
            </div>
            <div className="content">
              <p>Випускники вищих навчальних закладів І-ІІ рівня акредитації, які бажають продовжити навчання за спорідненими спеціальностями в ПІБ МНТУ, зараховуються за результатами <span className="bold">фахового вступного випробування</span>.</p>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-spec">Споріднені спеціальності освітньо-кваліфікаційного рівня молодшого спеціаліста</a>
              <div id="entrance-spec" style={{display: 'none'}}>
                <p className="italic">Даний перелік містить напрями підготовки для прийому на навчання на другий курс (з нормативним терміном навчання на вакантні місця) осіб, які здобули освітньо-кваліфікаційний рівень молодшого спеціаліста, для здобуття освітньо-кваліфікаційного рівня бакалавра за умови вступу на споріднений напрям підготовки:</p>
                <table style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
                  <tbody><tr className="header">
                      <td className="spec last-left" colSpan={2}>Споріднені спеціальності освітньо-кваліфікаційного рівня молодшого спеціаліста</td>
                      <td className="bachelor">Напрями підготовки освітньо-кваліфікаційного рівня бакалавра</td>
                      <td className="course">Курс</td>
                      <td className="period">Термін навчання<br />
                        <span className="form">(денна&nbsp;форма)<br />(заочна&nbsp;форма)</span></td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.01020101</span> Фізичне виховання</td>
                      <td rowSpan={3} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={3}><span className="code">6.010203</span> Здоров'я людини</td>
                      <td rowSpan={3} className="course center">2</td>
                      <td rowSpan={3} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.12010102</span> Сестринська справа</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.12010101</span> Лікувальна справа</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.1210105</span> Акушерська справа</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.03050401</span> Економіка підприємства</td>
                      <td rowSpan={10} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={10}><span className="code">6.030503</span> Міжнародна економіка<br />
                        <span className="code">6.030508</span> Фінанси і кредит<br />
                        <span className="code">6.030509</span> Облік і аудит</td>
                      <td rowSpan={10} className="course center">2</td>
                      <td rowSpan={10} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050601</span> Прикладна статистика</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050201</span> Інформаційна діяльність підприємства</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050801</span> Фінанси і кредит</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050701</span> Маркетингова діяльність</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050802</span> Бухгалтерський облік</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03051001</span> Товарознавство та комерційна діяльність</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03050702</span> Комерційна діяльність</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.03051002</span> Організація заготівель і товарознавство с/г продукції</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.03050802</span> Оціночна діяльність</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.03040101</span> Правознавство</td>
                      <td rowSpan={2} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={2}><span className="code">6.030401</span> Правознавство</td>
                      <td rowSpan={2} className="course center">2</td>
                      <td rowSpan={2} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.03040102</span> Правоохоронна діяльність</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.03060101</span> Організація виробництва</td>
                      <td rowSpan={2} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={2}><span className="code">6.030601</span> Менеджмент</td>
                      <td rowSpan={2} className="course center">2</td>
                      <td rowSpan={2} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.03060102</span> Організація обслуговування на транспорті</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.04010101</span> Аналітичний контроль якості хімічних сполук</td>
                      <td rowSpan={10} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={10}><span className="code">6.040106</span> Екологія, охорона навколишнього середовища та збалансоване природокористування</td>
                      <td rowSpan={10} className="course center">2</td>
                      <td rowSpan={10} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010301</span> Пошук та розвідка геологічними методами</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010302</span> Пошук та розвідка геофізичними методами</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010303</span> Пошук та розвідка гідрогеологічними та інженерно-геологічними методами</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010304</span> Розвідування нафтових та газових родовищ</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010501</span> Метеорологічні та гідрологічні спостереження</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010502</span> Експлуатація та обслуговування гідрометеорологічних вимірювальних систем</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010503</span> Експлуатація метеорологічних радіолокаційних станцій</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.04010602</span> Прикладна екологія</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.04010601</span> Експлуатація апаратури контролю навколишнього природного середовища</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.05010101</span> Обслуговування програмних систем і комплексів</td>
                      <td rowSpan={4} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={4}><span className="code">6.050101</span> Комп’ютерні науки<br />
                        6.050103 Програмна інженерія</td>
                      <td rowSpan={4} className="course center">2</td>
                      <td rowSpan={4} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05010102</span> Обслуговування систем баз даних і знань</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05010201</span> Обслуговування ком’ютерних систем і мереж</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.05010301</span> Розробка програмного забезпечення</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.05030101</span> Відкрита розробка корисних копалин</td>
                      <td rowSpan={13} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={13}><span className="code">6.050304</span> Нафтогазова справа</td>
                      <td rowSpan={13} className="course center">2</td>
                      <td rowSpan={13} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030102</span> Підземна розробка корисних копалин</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030103</span> Експлуатація та ремонт гірничого електромеханічного обладнання та автоматичних пристроїв</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030104</span> Шахтне і підземне будівництво</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030105</span> Маркшейдерська справа</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030201</span> Механізація та автоматизація торфового виробництва</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030301</span> Збагачення корисних копалин</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030302</span> Обробка природного каменю</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030401</span> Експлуатація нафтових i газових свердловин</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030402</span> Випробування свердловин на нафту і газ</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030403</span> Експлуатація газонафтопроводів і газонафтосховищ</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05030106</span> Буріння свердловин</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.05030404</span> Обслуговування i ремонт обладнання нафтових i газових промислів</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5.05090101</span> Конструювання, виробництво та технічне обслуговування радіотехнічних пристроїв</td>
                      <td rowSpan={15} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="course-bachelor" rowSpan={15}><span className="code">6.050902</span> Радіоелектронні апарати</td>
                      <td rowSpan={15} className="course center">2</td>
                      <td rowSpan={15} className="period center">3 (3,5)<br />
                        2 (2,5)</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090102</span> Технічна експлуатація радіоелектронного устаткування повітряних суден</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090103</span> Технічна експлуатація наземних засобів радіоелектронного забезпечення польотів</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090104</span> Експлуатація радіотехнічних систем та пристроїв</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090201</span> Виробництво, обслуговування та ремонт електронної побутової апаратури</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090301</span> Монтаж, обслуговування і ремонт станційного обладнання електрозв'язку</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090302</span> Технічне обслуговуванняі і ремонт апаратури зв'язку та оргтехніки</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090303</span> Монтаж, обслуговування і ремонт обладнання лінійних споруд електрозв'язку та абоненських проїв</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090104</span> Виробництво апаратури автоматичного електрозв’язку</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090305</span> Обслуговування обладнання підприємств зв’язку</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090300</span> Монтаж, технічне обслуговування і ремонт обладнання радіозв’язку радіомовя та телебачення</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090307</span> Монтаж, обслуговування і ремонт систем зв’язку рухомої служби</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090308</span> Монтаж, обслуговування та експлуатація апаратних засобів інформатизації</td>
                    </tr>
                    <tr>
                      <td className="course-spec second"><span className="code">5.05090401</span> Організація та експлуатація поштового зв’язку</td>
                    </tr>
                    <tr>
                      <td className="course-spec second last"><span className="code">5.05090402</span> Монтаж, обслуговування і ремонт засобів механізації та автоматизації підприємств поштового зв’язку</td>
                    </tr>
                  </tbody></table>
                <p className="italic post">
                  * Інформація подана згідно з Правилами прийому 2014 року.
                </p>
              </div>
              <p className="after">Звертаємо Вашу увагу на те, що законодавством України певним категоріям громадян надано право на <span className="bold italic">зарахування поза конкурсом</span>.</p>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-comp3">Перелік осіб, які мають право на зарахування поза конкурсом</a>
              <div id="entrance-comp3" style={{display: 'none'}}>
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
              <ul className="documents">
                <li>– Заяву на ім'я ректора із зазначенням обраної спеціальності та форми навчання<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">(заповнюється безпосередньо в приймальній комісії)</span></li>
                <li>– 6 фотокарток 3х4</li>
                <li>– Паспорт (дві копії 1, 2, 11 стор.)</li>
                <li>– Ідентифікаційний номер (дві копії)</li>
                <li>– Копію військового квитка (приписного свідоцтва)</li>
                <li>– Документ про освіту з додатком (оригінал та копія)</li>
              </ul>
              <p className="center">Паспорт, військовий квиток (свідоцтво) та документи, які надають право на пільги, абітурієнтами <span className="bold">подаються особисто</span></p>
            </div>
          </li>
          <li className="entrance-info">
            <div className="list-steps">
              <div className="step float-left">4</div>
              <h2 className="block orange float-left"> Додаткова інформація:</h2>
            </div>
            <div className="content">
              <ul>
                <li className="item1 float-left">
                  <a href="/media/docs/Правила%20прийому%20ПІБ%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПІБ МНТУ</a><br />
                  <a href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" className="gold external" target="_blank">Умови прийому МОН 2015</a>
                </li>
                <li className="item2 button-overlay float-left">
                  <a href="/entrant/faq" className="block unline">
                    <span className="title">Часто запитують</span><br />
                    <span className="desc">Відповіді на часті запитання</span>
                  </a>
                </li>
                <li className="item3 button-overlay float-left">
                  <a href="/pib/license" className="block unline">
                    <span className="title">Ліцензія та сертификати</span>
                  </a>
                </li>
                <li className="item4 button-overlay float-left">
                  <a href="/contact" className="block unline">
                    <span className="title">Є запитання?</span><br />
                    <span className="desc">Зв’яжіться з нами</span>
                  </a>
                </li>
              </ul>
              <p className="center clear-both">Найбільш активні студенти мають змогу отримати <span className="italic">пільги</span></p>
            </div>
          </li>
          <li className="entrance-apply">
            <a href="/entrant/apply" className="button-apply block indent">Подати заявку на вступ</a>
            <p className="center">або зателефонуйте до приймальної комісії за номером<br />
              <span className="orange bold">(0532) 50-81-05</span></p>
          </li>
        </ul>
      </div>
      <div id="entrance-item2" className="entrance-wrap toggleDiv2 clear-both" style={{display: 'none'}}>
        <ul>
          <li className="entrance-terms">
            <div className="list-steps">
              <div className="step float-left">2</div>
              <h2 className="block orange float-left"> Умови вступу:</h2>
            </div>
            <div className="content">
              <p>ПІБ МНТУ приймає на третій курс осіб, які здобули базову або повну вищу освіту, для здобуття ступеня бакалавра за іншим напрямом підготовки у межах вакантних місць ліцензованого обсягу.</p>
              <p>Випускники вищих навчальних закладів IIІ-ІV рівня акредитації, які бажають навчатись в ПІБ МНТУ, зараховуються за результатами <span className="bold">фахового вступного випробування</span>.</p>
              <p style={{paddingTop: '15px'}}>Звертаємо Вашу увагу на те, що законодавством України певним категоріям громадян надано право на <span className="bold italic">зарахування поза конкурсом</span>.</p>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-comp2">Перелік осіб, які мають право на зарахування поза конкурсом</a>
              <div id="entrance-comp2" style={{display: 'none'}}>
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
              <ul className="documents">
                <li>– Заяву на ім'я ректора із зазначенням обраної спеціальності та форми навчання<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">(заповнюється безпосередньо в приймальній комісії)</span></li>
                <li>– 6 фотокарток 3х4</li>
                <li>– Паспорт (дві копії 1, 2, 11 стор.)</li>
                <li>– Ідентифікаційний номер (дві копії)</li>
                <li>– Копію військового квитка (приписного свідоцтва)</li>
                <li>– Документ про освіту з додатком (оригінал та копія)</li>
              </ul>
              <p className="center">Паспорт, військовий квиток (свідоцтво) та документи, які надають право на пільги, абітурієнтами <span className="bold">подаються особисто</span></p>
            </div>
          </li>
          <li className="entrance-info">
            <div className="list-steps">
              <div className="step float-left">4</div>
              <h2 className="block orange float-left"> Додаткова інформація:</h2>
            </div>
            <div className="content">
              <ul>
                <li className="item1 float-left">
                  <a href="/media/docs/Правила%20прийому%20ПІБ%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПІБ МНТУ</a><br />
                  <a href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" className="gold external" target="_blank">Умови прийому МОН 2015</a>
                </li>
                <li className="item2 button-overlay float-left">
                  <a href="/entrant/faq" className="block unline">
                    <span className="title">Часто запитують</span><br />
                    <span className="desc">Відповіді на часті запитання</span>
                  </a>
                </li>
                <li className="item3 button-overlay float-left">
                  <a href="/pib/license" className="block unline">
                    <span className="title">Ліцензія та сертификати</span>
                  </a>
                </li>
                <li className="item4 button-overlay float-left">
                  <a href="/contact" className="block unline">
                    <span className="title">Є запитання?</span><br />
                    <span className="desc">Зв’яжіться з нами</span>
                  </a>
                </li>
              </ul>
              <p className="center clear-both">Найбільш активні студенти мають змогу отримати <span className="italic">пільги</span></p>
            </div>
          </li>
          <li className="entrance-apply">
            <a href="/entrant/apply" className="button-apply block indent">Подати заявку на вступ</a>
            <p className="center">або зателефонуйте до приймальної комісії за номером<br />
              <span className="orange bold">(0532) 50-81-05</span></p>
          </li>
        </ul>
      </div>
    </>
  )
}
