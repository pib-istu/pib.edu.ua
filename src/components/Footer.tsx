import React from 'react'

const CURRENT_YEAR = new Date().getFullYear()

export default () => {
  return (
    <>
      <div id="footer_upper">
        <div className="shadow">
          <div className="bg">
            <div className="wrapper">
              <div className="slot1">
                <div className="header">
                  <span className="text">Про ПІБ МНТУ</span>
                </div>
                <div className="content">
                  <p>Вищий навчальний заклад IV ступеня акредитації, підпорядкований Мiнiстерству освіти i науки, молоді та спорту України.</p>
                  <p>Місія університету: надання якісної вищої технічної, економічної, гуманітарної освіти, щоб гарантувати випускникам ефективну участь у громадській і професійній діяльності, розбудові незалежної України, підвищенні добробуту українського народу; формування загальнолюдських цінностей, збереження кращого вітчизняного досвіду вищої школи, традицій європейського гуманізму.</p>
                  <p className="last"><a className="link" href="/pib/about">Детальніше</a></p>
                </div>
              </div>
              <div className="vline" />
              <div className="slot2">
                <div className="header">
                  <span className="text">Партнери</span>
                </div>
                <div className="content">
                  <a href="http://www.cbs.poltava.ua" rel="nofollow" target="_blank" title="Полтавська міська ЦБС">
                    <img className="img_float_left" src="/assets/pib/img/ban_cbs-2.gif" alt="Полтавська міська ЦБС" />
                  </a>
                  <a href="http://libgonchar.org" rel="nofollow" target="_blank" title="Полтавська обласна бібліотека для юнацтва імені Олеся Гончара">
                    <img className="img_float_left" src="/assets/pib/img/ban_BidliotekaPOBU1-2.gif" alt="Полтавська обласна бібліотека для юнацтва імені Олеся Гончара" />
                  </a>
                  <a href="http://www.mon.gov.ua/ua/" rel="nofollow" target="_blank" title="Сайт Міністерства освіти і науки, молоді та спорту України">
                    <img className="img_float_left" src="/assets/pib/img/ban_minosvit.gif" alt="Міністерство освіти і науки, молоді та спорту України" />
                  </a>
                  <a href="http://iosvita.com.ua" rel="nofollow" target="_blank" title="Сайт системи Електронний вступ">
                    <img className="img_float_left" src="/assets/pib/img/ban_register.gif" alt="Система Еклектронний вступ" />
                  </a>
                  <a href="http://rabota.ua/полтава" rel="nofollow" target="_blank" title="Rabota.ua — работа в Полтаві">
                    <img className="img_float_left" src="/assets/pib/img/partner-rabouta-ua.png" alt="Rabota.ua — работа в Полтаві" width={129} />
                  </a>
                </div>
              </div>
              <div className="vline" />
              <div className="slot3">
                <div className="header">
                  <span className="text">Контакти</span>
                </div>
                <div className="content">
                  <p className="phone">(0532) 50-81-05<br />
                    (0532) 50-81-78
                  </p>
                  <p className="contact">36039 м. Полтава, вул. Сінна 7&nbsp;<a href="https://maps.google.com/maps?q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hl=en&ie=UTF8&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&z=15&iwloc=A" title="Показати ПІБ МНТУ на мапі" target="_blank"><img src="/assets/pib/img/footer_cont_mappin.png" alt="Показати ПІБ МНТУ на мапі" /></a></p>
                  <p className="contact"><a href="/contact/email">написати нам</a>&nbsp;|&nbsp;<a href="/contact/#req">реквізити</a></p>
                </div>
                <a target="_blank" href="https://next.privat24.ua/payments/form/{&quot;token&quot;:&quot;b1141b64-69ca-413c-8d76-1c5f9593f8d2&quot;}"><img src="/assets/pib/img/privat-pay2.png" style={{marginTop: '60px'}} alt="" /></a>
              </div>
              <div className="vline2" />
              <div className="vline2" />
              <div className="slot5">
                <div className="header">
                  <span className="text">Ми в мережі</span>
                </div>
                <div className="content">
                  <a className="fb" href="https://www.facebook.com/plt.business.mntu" target="_blank" title="ПІБ МНТУ в Facebook">ПІБ МНТУ в Facebook</a>
                  <a className="inst" href="https://instagram.com/plt_business_mntu?igshid=1qoeg2592v3se" target="_blank" title="ПІБ МНТУ в Instagram">ПІБ МНТУ в Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="footer_bottom">
        <div className="wrapper">
          <div className="copyright">
            <a className="pib" href="/">Полтавський інститут Бізнесу</a><br />
            © 2000-{CURRENT_YEAR}
          </div>
          <ul className="menu" id="footer_menu">
            <li className="item-164"><a href="/">Головна</a></li>
            <li className="item-165"><a href="/pib/benefits">Чому ПІБ МНТУ</a></li>
            <li className="item-172"><a href="/entrant/entrance">Вступ</a></li>
            <li className="item-167"><a href="/home/news">Останні новини</a></li>
            <li className="item-168"><a href="/entrant/faq">Часто запитують</a></li>
            <li className="item-166"><a href="/other/schedule">Розклад занять</a></li>
            <li className="item-170"><a href="/contact">Контакти</a></li>
            <li className="item-171"><a href="/pib/public-info">Публічна інформація</a></li>
            <li className="item-169"><a href="/other/gallery">Фотоархів</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
