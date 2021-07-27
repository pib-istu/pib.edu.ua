import React from 'react'

export default () => {
  return (
    <>
      <div id="header_logo">
        <a className="link" href="/" title="На головну"><img className="img_float_left" src="/assets/pib/img/header_logo.png" alt="ПІБ МНТУ" /></a> <br />
        <span className="title"><a className="link" href="/" title="На головну">Полтавський інститут Бізнесу</a></span><span className="title_sub"><a className="link" href="/" title="На головну">Міжнародний науково-технічний університет імені академіка Юрія Бугая</a></span>
      </div>
      <div id="header_contact">
        <a className="header_contact_mail" href="mailto:info@pib.edu.ua" rel="#header_mail_box" title="Написати нам">Написати нам</a> <span className="header_contact_phone_smaller">(0532)</span> <span className="header_contact_phone">50-81-05</span>
      </div>
    </>
  )
}
