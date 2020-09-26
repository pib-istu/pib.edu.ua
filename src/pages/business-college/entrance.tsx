// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Вступ до коледжу"

import React, { useEffect } from 'react'
import { WithSidebar } from 'components/WithSidebar'

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
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Вступ до коледжу </h1>
      </div>
      <div id="intro" className="entrance">
        <div className="illustration float-left" />
        <p>На даній сторінці ви зможете знайти детальну інформацію щодо вступу до Полтавського бізнес-коледжу, а саме: умови вступу, перелік документів, перелік предметів, з яких подаються сертифікати та іншу важливу для вас інформацію.</p>
      </div>
      <div className="list-steps clear-both">
        <span className="step float-left">1</span>
        <h2 className="orange float-left"> Будь-ласка, вкажіть випускником якого навчального закладу Ви є:</h2>
      </div>
      <ul className="entrance-type">
        <li className="item1">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item1"><b> Випускник 9 класу</b>, <small>який отримав базову загальну середню освіту</small></a>
        </li>
        <li className="item2">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item2"><b>Випускник 11 класу</b>, <small>який отримав повну загальну середню освіту</small></a>
        </li>
        <li className="item3">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item3"><b>Випускник ПТНЗ</b>, <small>який отримав диплом кваліфікованого робітника</small><br /> <span className="block">(якщо бажаєте продовжити навчання за спорідненими спеціальностями)</span></a>
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
              <p>Особи які здобули базову загальну середню освіту і бажають вступити до Полтавського бізнес-коледжу <b>здають вступні випробування</b>:</p>
              <table style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr className="header">
                    <td className="course">
                      Спеціальність
                    </td>
                    <td className="item">
                      Вступні іспити
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={2} className="course">
                      Бухгалтерський облік
                    </td>
                    <td className="item proDISABLEDfile">
                      1. Українська мова (диктант)
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item">
                      2. Історія України
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={2} className="course">
                      Розробка програмного забезпечення
                    </td>
                    <td className="item proDISABLEDfile">
                      1. Українська мова (диктант)
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item">
                      2. Математика
                    </td>
                  </tr>
                  <tr className="first">
                    <td rowSpan={2} className="course">
                      Фізичне виховання
                    </td>
                    <td className="item">
                      1. Українська мова (диктант)
                    </td>
                  </tr>
                  <tr className="first">
                    <td className="item proDISABLEDfile">
                      2. Творчий конкурс
                    </td>
                  </tr>
                  <tr className="second">
                    <td rowSpan={4} className="course">
                      Організація виробництва
                    </td>
                    <td className="item">
                      1. Українська мова (диктант)
                    </td>
                  </tr>
                  <tr className="second">
                    <td className="item proDISABLEDfile">
                      2. Математика
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </li>
          <li className="entrance-documents">
            <div className="list-steps">
              <div className="step float-left">3</div>
              <h2 className="block orange float-left">Перелік документів, що необхідно надати:</h2>
            </div>
            <div className="content">
              <ul className="documents">
                <li>– Заяву на ім'я директора із зазначенням обраної спеціальності<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">(заповнюється безпосередньо в приймальній комісії)</span></li>
                <li>– 6 фотокарток 3х4</li>
                <li>– Свідоцтво про народження (дві копії)</li>
                <li>– Ідентифікаційний номер (дві копії)</li>
                <li>– Документ про освіту з додатком (оригінал та копія)</li>
              </ul>
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
                  <a href="/media/docs/Правила%20прийому%20ПБК%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПБК МНТУ</a><br />
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
              <p>Особи, які здобули повну загальну середню освіту і бажають вступити до Полтавського бізнес-коледжу:</p>
              <div className="center"><p><span className="bold">подають документи, що підтверджують їх право брати участь у конкурсі за результатами зовнішнього незалежного оцінювання</span></p></div>
              <div className="center"><p><span className="italic">або</span></p></div>
              <div className="center"> <p><span className="bold">поступають за результатами вступних іспитів з конкурсних предметів в МНТУ</span></p></div>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-cert">Перелік конкурсних предметів / предметів, з яких можуть бути подані сертифікати</a>
              <div id="entrance-cert" style={{display: 'none'}}>
                <table style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
                  <tbody>
                    <tr className="header">
                      <td className="course">
                        Спеціальність
                      </td>
                      <td className="item">
                        Сертифікати ЗНО
                      </td>
                      <td className="score">
                        Мінімальна кількість балів*
                      </td>
                    </tr>
                    <tr className="first">
                      <td rowSpan={2} className="course">
                        Бухгалтерський облік
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
                        2. Історія України
                      </td>
                      <td className="score">
                        100
                      </td>
                    </tr>
                    <tr className="second">
                      <td rowSpan={2} className="course">
                        Розробка програмного забезпечення
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
                    <tr className="first">
                      <td rowSpan={2} className="course">
                        Фізичне виховання
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
                        2. Творчий конкурс
                      </td>
                      <td className="score proDISABLEDfile">
                        100
                      </td>
                    </tr>
                    <tr className="second">
                      <td rowSpan={2} className="course">
                        Організація виробництва
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
                        2. Математика
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
            </div>
          </li>
          <li className="entrance-documents">
            <div className="list-steps">
              <div className="step float-left">3</div>
              <h2 className="block orange float-left">Перелік документів, що необхідно надати:</h2>
            </div>
            <div className="content">
              <ul className="documents">
                <li>– Заяву на ім'я директора із зазначенням обраної спеціальності<br />
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
                  <a href="/media/docs/Правила%20прийому%20ПБК%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПБК МНТУ</a><br />
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
              <p>Випускники професійно-технічних навчальних закладів, які бажають продовжити навчання за спорідненими професіями в Полтавському бізнес-коледжі, зараховуються за результатами <b>фахового вступного випробування</b>.</p>
              <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-spec">Споріднені професії кваліфікованого робітника</a>
              <div id="entrance-spec" style={{display: 'none'}}>
                <p className="italic">Перелік спеціальностей для прийому на навчання на перший (зі скороченим терміном навчання) або другий курс (з нормативним терміном навчання на вакантні місця) осіб, які здобули освітньо-кваліфікаційний рівень кваліфікованого робітника, для здобуття освітньо-кваліфікаційного рівня молодшого спеціаліста за спорідненою спеціальністю:</p>
                <table style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
                  <tbody><tr className="header">
                      <td className="spec last-left" colSpan={2}>Споріднені професії кваліфікованого робітника (професійні назви робіт)</td>
                      <td className="bachelor">Спеціальності освітньо-кваліфікаційного рівня молодшого спеціаліста</td>
                      <td className="course">Курс</td>
                      <td className="period">Термін навчання</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">4121</span> Обліковець з реєстрації бухгалтерських даних</td>
                      <td rowSpan={27} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td rowSpan={27} className="course-bachelor"><span className="code">5.03050901</span> Бухгалтерський облік</td>
                      <td rowSpan={27} className="course center">2</td>
                      <td rowSpan={27} className="period center">1 рік<br />
                        10 місяців</td>
                    </tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Конторський службовець</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Касир (на підприємстві, в установі, організації)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Конторський службовець (бухгалтерія)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Нарядник</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Рахівник</td></tr>
                    <tr><td className="course-spec second"><span className="code">4190</span> Табельник</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Таксувальник</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Контролер-касир</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Касир торговельного залу</td></tr>
                    <tr><td className="course-spec second"><span className="code">9411</span> Комірник</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Касир багажний</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Касир товарний</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Обліковець бухгалтерських даних</td></tr>
                    <tr><td className="course-spec second"><span className="code">4211</span> Касир квитковий</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Конторський (офісний) службовець (бухгалтерія)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор комп’ютерного набору</td></tr>
                    <tr><td className="course-spec second"><span className="code">3432</span> Конторський (офісний) службовець (страхування)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Конторський (офісний) службовець (аудит)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Конторський (офісний) службовець (каса)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4121</span> Конторський (офісний) службовець (розрахунок собівартості)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4122</span> Конторський (офісний) службовець (боргові зобов’язання)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4122</span> Конторський (офісний) службовець (застава та іпотека)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4122</span> Конторський (офісний) службовець (інвестиції)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4122</span> Конторський (офісний) службовець (кредит)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4122</span> Конторський (офісний) службовець (оцінка вартості)</td></tr>
                    <tr><td className="course-spec second last"><span className="code">4122</span> Конторський (офісний) службовець (статистика)</td></tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">6131</span> Робітник фермерського господарства</td>
                      <td rowSpan={23} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td rowSpan={23} className="course-bachelor"><span className="code">5.03060101</span> Організація виробництва</td>
                      <td rowSpan={23} className="course center">2</td>
                      <td rowSpan={23} className="period center">1 рік<br />
                        10 місяців</td>
                    </tr>
                    <tr><td className="course-spec second"><span className="code">6131</span> Фермер</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор комп’ютерного набору</td></tr>
                    <tr><td className="course-spec second"><span className="code">4131</span> Приймальник сільськогосподарської продукції та сировини</td></tr>
                    <tr><td className="course-spec second"><span className="code">4144</span> Діловод</td></tr>
                    <tr><td className="course-spec second"><span className="code">4115</span> Секретар</td></tr>
                    <tr><td className="course-spec second"><span className="code">4115</span> Секретар керівника</td></tr>
                    <tr><td className="course-spec second"><span className="code">4222</span> Продавець</td></tr>
                    <tr><td className="course-spec second"><span className="code">4222</span> Адміністратор</td></tr>
                    <tr><td className="course-spec second"><span className="code">4222</span> Адміністратор залу</td></tr>
                    <tr><td className="course-spec second"><span className="code">5230</span> Продавець</td></tr>
                    <tr><td className="course-spec second"><span className="code">5220</span> Продавець не продуктових товарів</td></tr>
                    <tr><td className="course-spec second"><span className="code">4222</span> Адміністратор черговий</td></tr>
                    <tr><td className="course-spec second"><span className="code">9141</span> Консьєрж референта</td></tr>
                    <tr><td className="course-spec second"><span className="code">4111</span> Стенографіст</td></tr>
                    <tr><td className="course-spec second"><span className="code">4115</span> Секретар-стенографіст</td></tr>
                    <tr><td className="course-spec second"><span className="code">4115</span> Секретар-друкарка</td></tr>
                    <tr><td className="course-spec second"><span className="code">4115</span> Секретар незрячого фахівця</td></tr>
                    <tr><td className="course-spec second"><span className="code">4141</span> Оброблювач інформаційного матеріалу</td></tr>
                    <tr><td className="course-spec second"><span className="code">4143</span> Коректор (коригування текстів)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4143</span> Кодифікатор</td></tr>
                    <tr><td className="course-spec second"><span className="code">4111</span> Друкарка</td></tr>
                    <tr><td className="course-spec second last"><span className="code">4115</span> Асистент референта</td></tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">5132</span> Молодша медична ссестра з догляду за хворими</td>
                      <td rowSpan={5} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td rowSpan={5} className="course-bachelor"><span className="code">5.01020101</span> Фізичне виховання</td>
                      <td rowSpan={5} className="course center">2</td>
                      <td rowSpan={5} className="period center">1 рік<br />
                        10 місяців</td>
                    </tr>
                    <tr><td className="course-spec second"><span className="code">5133</span> Соціальний робітник</td></tr>
                    <tr><td className="course-spec second"><span className="code">6152</span> Інструктор із спортивного рибальства</td></tr>
                    <tr><td className="course-spec second"><span className="code">5149</span> Інструктор тиру (малокаліберного, пневматичного)</td></tr>
                    <tr><td className="course-spec second last"><span className="code">7129.2</span> Ремонтувальник площинних спортивних споруд</td></tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                    <tr>
                      <td className="course-spec second first"><span className="code">8290.2</span> Оператор електронно-обчислювальних та обчислювальних машин</td>
                      <td rowSpan={13} className="arrow">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td rowSpan={13} className="course-bachelor"><span className="code">5.05010301</span> Розробка програмного забезпечення</td>
                      <td rowSpan={13} className="course center">2</td>
                      <td rowSpan={13} className="period center">1 рік<br />
                        10 місяців</td>
                    </tr>
                    <tr><td className="course-spec second"><span className="code">4113</span> Оператор з обробки інформації та програмного забезпечення</td></tr>
                    <tr><td className="course-spec second"><span className="code">4114</span> Оператор з уведення даних в ЕОМ (ОМ)</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор комп’ютерного набору</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор комп’ютерної верстки</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор інформаційно-комунікаційних мереж</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Оператор копіювальних та розмножувальних машин</td></tr>
                    <tr><td className="course-spec second"><span className="code">7241,2</span> Електромеханік з ремонту та обслуговування устаткування інформаційних систем</td></tr>
                    <tr><td className="course-spec second"><span className="code">7241</span> Електромеханік з ремонту та обслуговування лічильно-обчислювальних машин</td></tr>
                    <tr><td className="course-spec second">Електромеханік з ремонту та обслуговування комп’ютерної техніки</td></tr>
                    <tr><td className="course-spec second"><span className="code">4141</span> Оброблювач інформаційного матеріалу</td></tr>
                    <tr><td className="course-spec second"><span className="code">4112</span> Укладальник тексту</td></tr>
                    <tr><td className="course-spec second last"><span className="code">4112</span> Шифрувальник</td></tr>
                    <tr>
                      <td colSpan={6} className="spacer" />
                    </tr>
                  </tbody></table>
                <p className="italic post">
                  * Інформація подана згідно з Правилами прийому до Полтавського бізнес-коледжу ПВНЗ «Міжнародний науково-технічний університет імені академіка Юрія Бугая» в 2015 році
                </p>
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
                <li>– Заяву на ім'я директора із зазначенням обраної спеціальності<br />
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
                  <a href="/media/docs/Правила%20прийому%20ПБК%20МНТУ.pdf?v1" className="gold external" target="_blank">Правила прийому ПБК МНТУ</a><br />
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
    </WithSidebar>
  )
}
