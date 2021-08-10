import React, { FC } from 'react';
import { EntranceSectionFooter } from './EntranceSectionFooter';

export const EntranceSection2: FC = () => {
  return (
    <div id="entrance-item3" className="entrance-wrap toggleDiv2 clear-both" style={{ display: 'none' }}>
      <ul>
        <li className="entrance-terms">
          <div className="list-steps">
            <div className="step float-left">2</div>
            <h2 className="block orange float-left"> Умови вступу:</h2>
          </div>
          <div className="content">
            <p>Випускники вищих навчальних закладів І-ІІ рівня акредитації, які бажають продовжити навчання за спорідненими спеціальностями в ПІБ МНТУ, зараховуються за результатами <span className="bold">фахового вступного випробування</span>.</p>
            <a className="divslide3 gold arrow-down" href="#" data-rel3="#entrance-spec">Споріднені спеціальності освітньо-кваліфікаційного рівня молодшого спеціаліста</a>
            <div id="entrance-spec" style={{ display: 'none' }}>
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
            <div id="entrance-comp3" style={{ display: 'none' }}>
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
            </ul>
            <p className="center">Паспорт, військовий квиток (свідоцтво) та документи, які надають право на пільги, абітурієнтами <span className="bold">подаються особисто</span></p>
          </div>
        </li>

        <EntranceSectionFooter />
      </ul>
    </div>
  )
}
