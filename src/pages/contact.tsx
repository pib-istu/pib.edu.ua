import { WithSidebar } from 'components/WithSidebar'
// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Контакти"

import React from 'react'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={false}>
      <div id="page-header">
        <h1 className="text">
          Контакти </h1>
      </div>
      <div className="other-wrapper contacts">
        <div id="contacts-top" className="float-left">
          <div className="header first gold">Адреса:</div>
          <div className="adress bold center"><a href="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&aq=&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&ie=UTF8&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hnear=&ll=49.588236,34.539428&spn=0.009487,0.017939&z=15&iwloc=A" target="_blank" title="показати на мапі" className="highlight">36039, м. Полтава, вул. Сінна,7</a></div>
          <div className="header second gold">Телефон:</div>
          <div className="phone orange center bold">
            <span className="city-code">(0532)</span> 50-81-78<br />
            <span className="second">50-81-05</span>
          </div>
          <div className="header third gold">Факс:</div>
          <div className="fax center bold"><span className="city-code">(0532)</span> 50-81-79</div>
          <style dangerouslySetInnerHTML={{__html: "\n      .drop-element { display: none; }\n    " }} />
          <div className="email center"><span className="highlight">
              <a href="mailto:info@pib.edu.ua" className="gold">
                info@pib.edu.ua</a>
            </span></div>
        </div>
        <div className="float-right">
          <div className="thumb border">
            <iframe width={419} height={341} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&aq=&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&ie=UTF8&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hnear=&ll=49.588236,34.539428&spn=0.009487,0.017939&z=15&iwloc=A&output=embed" />
            <span><a href="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&aq=&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&ie=UTF8&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hnear=&ll=49.588236,34.539428&spn=0.009487,0.017939&z=15&iwloc=A" className="external gold underline italic">показати на мапі</a></span>
          </div>
        </div>
        <div className="clear-both" />
        <ul id="contacts-other">
          <li className="item1 float-left">
            <h2 className="dashed gold">Відділи ПІБ МНТУ</h2>
            <table width={388} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Приймальня ректора:</td>
                  <td className="td2 center">50-81-78, 50-81-79</td>
                </tr>
                <tr className="first">
                  <td className="td1">Бухгалтерія:</td>
                  <td className="td2 center">50-81-04</td>
                </tr>
                <tr className="second">
                  <td className="td1">Відділ кадрів:</td>
                  <td className="td2 center">50-81-03</td>
                </tr>
                <tr className="first">
                  <td className="td1">Навчальний відділ:</td>
                  <td className="td2 center">61-08-92</td>
                </tr>
                <tr className="second">
                  <td className="td1">Бібліотека:</td>
                  <td className="td2 center">50-67-83</td>
                </tr>
                <tr className="first">
                  <td className="td1">Приймальна комісія:</td>
                  <td className="td2 center">50-81-05</td>
                </tr>
              </tbody></table>
          </li>
          <li className="item2 float-left">
            <h2 className="dashed gold">Години праці</h2>
            <table width={320} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Понеділок‑Четверг:</td>
                  <td className="td2 center bold">8:30 <span className="dim">–</span> 17:30</td>
                </tr>
                <tr className="first">
                  <td className="td1">П`ятниця:</td>
                  <td className="td2 center bold">8:30 <span className="dim">–</span> 16:30</td>
                </tr>
                <tr className="second">
                  <td className="td1">Субота, Неділя:</td>
                  <td className="td2 center bold"><span className="dim">Вихідний</span></td>
                </tr>
              </tbody></table>
            <p className="center"><span className="bold dim">Обідня перерва:</span> 12:00 <span className="dim">–</span> 13:00</p>
          </li>
          <li className="item3 float-left">
            <a id="req" /><h2 className="dashed gold">Реквізити</h2>
            <table width={388} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Назва організації:</td>
                  <td className="td2">ПІБ МНТУ</td>
                </tr>
                <tr className="first">
                  <td className="td1">Юридична адреса:</td>
                  <td className="td2">36039, м. Полтава, вул. Сінна, 7</td>
                </tr>
                <tr className="second">
                  <td className="td1">Телефон:</td>
                  <td className="td2">(0532) 50-81-04 </td>
                </tr>
                <tr className="first">
                  <td className="td1">Код ЄДРПОУ:</td>
                  <td className="td2">25733656</td>
                </tr>
              </tbody></table>
            <p className="center">Дізнатися інші реквізити можливо в <span className="bold">бухгалтерії</span> за телефоном <span className="bold">50-81-04</span></p>
          </li>
          <li className="item4 float-left">
            <h2 className="dashed gold">Ректор ПІБ МНТУ</h2>
            <p>Лавриненко Сергій Іванович<br />Контактний телефон: 50-81-78</p>
            <img src="/images/pib_rector_lsi.jpg" alt="Лавриненко Сергій Іванович" style={{maxWidth: '100%'}} />
          </li>
          <li className="item4 float-left" style={{paddingRight: '40px'}}>
            <h2 className="dashed gold">Прийом платежів (для студентів інституту)</h2>
            <p>Ви можете здійснити платіж за навчання в будь-якому філіалі банку <a href="https://online.ukrsibbank.com/ibank/" className="gold external" target="_blank">«Укрсиббанк»</a> або <a href="http://old.privatbank.ua/info/index1.stm?fileName=d6_6_1_1ar.html" className="gold external" target="_blank">«ПриватБанк»</a> за наступними реквізитами:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Назва організації:</td>
                  <td className="td2">ПІБ МНТУ</td>
                </tr>
                <tr className="first">
                  <td className="td1">Юридична адреса:</td>
                  <td className="td2">36039, м. Полтава, вул. Сінна, 7</td>
                </tr>
                <tr className="second">
                  <td className="td1">Код ЄДРПОУ:</td>
                  <td className="td2">25733656</td>
                </tr>
                <tr className="first">
                  <td className="td1">П.І.Б:</td>
                  <td className="td2">П.І.Б студента (повністю), група</td>
                </tr>
                <tr className="second">
                  <td className="td1">Призначення платежу:</td>
                  <td className="td2">за навчання</td>
                </tr>
              </tbody></table>
            <p className="last">Для банку <a href="https://online.ukrsibbank.com/ibank/" className="gold external" target="_blank">«Укрсиббанк»</a>:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Р\р:</td>
                  <td className="td2">UA913510050000026000236957700</td>
                </tr>
                <tr className="first">
                  <td className="td1">МФО:</td>
                  <td className="td2">351005</td>
                </tr>
              </tbody></table>
            <p className="last">Для банку <a href="http://old.privatbank.ua/info/index1.stm?fileName=d6_6_1_1ar.html" className="gold external" target="_blank">«ПриватБанк»</a>:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Р\р:</td>
                  <td className="td2">UA163314010000026006173764001</td>
                </tr>
                <tr className="first">
                  <td className="td1">МФО:</td>
                  <td className="td2">331401</td>
                </tr>
              </tbody></table>
          </li>
          <li className="item4 float-left">
            <h2 className="dashed gold">Прийом платежів (для студентів колледжу)</h2>
            <p>Ви можете здійснити платіж за навчання в будь-якому філіалі банку <a href="https://online.ukrsibbank.com/ibank/" className="gold external" target="_blank">«Укрсиббанк»</a> або <a href="http://old.privatbank.ua/info/index1.stm?fileName=d6_6_1_1ar.html" className="gold external" target="_blank">«ПриватБанк»</a> за наступними реквізитами:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Назва організації:</td>
                  <td className="td2">ПІБ МНТУ</td>
                </tr>
                <tr className="first">
                  <td className="td1">Юридична адреса:</td>
                  <td className="td2">36039, м. Полтава, вул. Сінна, 7</td>
                </tr>
                <tr className="second">
                  <td className="td1">Код ЄДРПОУ:</td>
                  <td className="td2">25733656</td>
                </tr>
                <tr className="first">
                  <td className="td1">П.І.Б:</td>
                  <td className="td2">П.І.Б студента (повністю), група</td>
                </tr>
                <tr className="second">
                  <td className="td1">Призначення платежу:</td>
                  <td className="td2">за навчання</td>
                </tr>
              </tbody></table>
            <p className="last">Для банку <a href="https://online.ukrsibbank.com/ibank/" className="gold external" target="_blank">«Укрсиббанк»</a>:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Р\р:</td>
                  <td className="td2">UA383510050000026002591683900</td>
                </tr>
                <tr className="first">
                  <td className="td1">МФО:</td>
                  <td className="td2">351005</td>
                </tr>
              </tbody></table>
            <p className="last">Для банку <a href="http://old.privatbank.ua/info/index1.stm?fileName=d6_6_1_1ar.html" className="gold external" target="_blank">«ПриватБанк»</a>:</p>
            <table width={430} style={{ border: 0 }} cellSpacing={0} cellPadding={0}>
              <tbody><tr className="second">
                  <td className="td1">Р\р:</td>
                  <td className="td2">UA133314010000026004054611554</td>
                </tr>
                <tr className="first">
                  <td className="td1">МФО:</td>
                  <td className="td2">331401</td>
                </tr>
              </tbody></table>
          </li>
        </ul>
      </div>
    </WithSidebar>
  )
}
