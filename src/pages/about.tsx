import React, { useEffect } from 'react'

declare var $: any
declare var IceSlideShow: any
declare var Fx: any

export default () => {
  useEffect(() => {
    const _lofmain = $('icetabs92');
    const object = new IceSlideShow(_lofmain.getElement('.ice-main-wapper'),
                    _lofmain.getElement('.ice-navigator-outer .ice-navigator'),
                    _lofmain.getElement('.ice-navigator-outer'),
                    {
                      fxObject:{
                      transition:Fx.Transitions.Sine.easeInOut,
                      duration:700},
                      mainItemSelector: 'div.ice-main-item',
                      interval:8000,
                      direction :'vrup',
                      navItemHeight:74,
                      navItemWidth:322,
                      navItemsDisplay:5,
                      navPos:'right'
                    });
        object.start(1, _lofmain.getElement('.preload'));
  }, [])

  useEffect(() => {
    var _lofmain = $('icetabs107');
    var object = new IceSlideShow(_lofmain.getElement('.ice-main-wapper'),
                  _lofmain.getElement('.ice-navigator-outer .ice-navigator'),
                  _lofmain.getElement('.ice-navigator-outer'),
                  {
                    fxObject:{
                    transition:Fx.Transitions.Sine.easeOut,
                    duration:700},
                    mainItemSelector: 'div.ice-main-item',
                    interval:10000,
                    direction :'hrright',
                    navItemHeight:100,
                    navItemWidth:290,
                    navItemsDisplay:3,
                    navPos:'0'
                  });
      object.registerButtonsControl('click', {next:_lofmain.getElement('.ice-next'),previous:_lofmain.getElement('.ice-previous')});
      object.start(1, _lofmain.getElement('.preload'));
  }, [])

  return (
    <div>
      <div id="fb-root" className=" fb_reset">
        <div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}>
          <div />
        </div>
      </div>

      <div style={{display: 'none'}}>
        <img src="/templates/pib/img/b/a/front_sub_button.jpg" alt="" />
        <img src="/templates/pib/img/b/a/header_pseudo_search_button.png" alt="" />
        <img src="/templates/pib/img/b/f/front_sub_input.jpg" alt="" />
        <img src="/templates/pib/img/b/f/header_pseudo_search_input.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_bottom_sl.jpg" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_fb.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_twitter.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_vk.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_1.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_2.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_3.png" alt="" />
        <img src="/templates/pib/img/b/h/front_info_button.png" alt="" />
        <img src="/templates/pib/img/b/h/front_news_rss.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_sub_button.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_sub_input.jpg" alt="" />
        <img src="/templates/pib/img/b/h/header_mail.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_schedule.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search_button.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search_input.png" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot1.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot2.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot3.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot4.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot5.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot6.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_news_photo.png" alt="" />
        <img src="/templates/pib/img/b/front_op_ar_left.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_op_ar_left.jpg" alt="" />
        <img src="/templates/pib/img/b/front_op_ar_right.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_op_ar_right.jpg" alt="" />
      </div>

      <div id="front_header">
        <div id="header_pseudo">
          <div className="wrapper">
            <a className="schedule divslide" style={{float: 'right', marginRight: '100px'}} href="#" rel="#header_pseudo_schedule_box" title="Розклад занять">Розклад занять</a>
          </div>
        </div>
        <div id="front_header_wrapper">
          <div id="header_logo">
            <a className="link" href="/" title="На головну"><img className="img_float_left" src="/templates/pib/img/header_logo.png" alt="ПІБ МНТУ" /></a> <br />
            <span className="title"><a className="link" href="/" title="На головну">Полтавський інститут Бізнесу</a></span><span className="title_sub"><a className="link" href="/" title="На головну">Міжнародний науково-технічний університет імені академіка Юрія Бугая</a></span>
          </div>
          <div id="header_contact">
            <a className="header_contact_mail" href="mailto:info@pib.edu.ua" rel="#header_mail_box" title="Написати нам">Написати нам</a> <span className="header_contact_phone_smaller">(0532)</span> <span className="header_contact_phone">50-81-05</span>
          </div>
          <div className="icemegamenu" id="menu_header">
            <ul id="icemegamenu">
              <li id="iceMenu_101" className="iceMenuLiLevel_1 parent active">
                <a href="https://pib.edu.ua/" className="icemega_active iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Головна</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_179" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_137" className="iceMenuLiLevel_2"><a href="/home/news" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Новини</span></a></li>
                        <li id="iceMenu_138" className="iceMenuLiLevel_2"><a href="/home/events" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Розклад подій</span></a></li>
                        <li id="iceMenu_139" className="iceMenuLiLevel_2"><a href="/home/reviews" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Відгуки</span></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_102" className="iceMenuLiLevel_1 parent">
                <a href="/pib" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">ПІБ МНТУ</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_180" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_140" className="iceMenuLiLevel_2 parent">
                          <a href="/pib" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Напрями та спеціалізації</span></a>
                          <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                            <li>
                              <div style={{float: 'left', width: '280px'}} className="iceCols">
                                <ul>
                                  <li id="iceMenu_185" className="iceMenuLiLevel_3"><a href="/pib/courses/course-law" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Право</span></a></li>
                                  <li id="iceMenu_224" className="iceMenuLiLevel_3"><a href="/pib/courses/course-psychology" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Психологія</span></a></li>
                                  <li id="iceMenu_226" className="iceMenuLiLevel_3"><a href="/pib/courses/course-petroleum-engineering-and-technology" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</span></a></li>
                                  <li id="iceMenu_191" className="iceMenuLiLevel_3"><a href="/pib/courses/course-it" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</span></a></li>
                                  <li id="iceMenu_223" className="iceMenuLiLevel_3"><a href="/pib/courses/course-radio-electronic" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Телекомунікації та радіотехніка</span></a></li>
                                  <li id="iceMenu_225" className="iceMenuLiLevel_3"><a href="/pib/courses/course-public-management-and-administration" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Публічне управління та адміністрування</span></a></li>
                                  <li id="iceMenu_187" className="iceMenuLiLevel_3"><a href="/pib/courses/course-health" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Фізична терапія, ерготерапія</span></a></li>
                                  <li id="iceMenu_188" className="iceMenuLiLevel_3"><a href="/pib/courses/course-finance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</span></a></li>
                                  <li id="iceMenu_192" className="iceMenuLiLevel_3"><a href="/pib/courses/course-accountancy" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Облік і оподаткування</span></a></li>
                                  <li id="iceMenu_201" className="iceMenuLiLevel_3"><a href="/pib/courses/course-management" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Менеджмент</span></a></li>
                                  <li id="iceMenu_190" className="iceMenuLiLevel_3"><a href="/pib/courses/course-ecology" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Екологія</span></a></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li id="iceMenu_147" className="iceMenuLiLevel_2"><a href="/pib/military" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Військова кафедра</span></a></li>
                        <li id="iceMenu_148" className="iceMenuLiLevel_2"><a href="/pib/about" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Про ПІБ МНТУ</span></a></li>
                        <li id="iceMenu_149" className="iceMenuLiLevel_2"><a href="/pib/benefits" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Чому ПІБ МНТУ</span></a></li>
                        <li id="iceMenu_151" className="iceMenuLiLevel_2"><a href="/pib/license" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Ліцензія та сертифікати</span></a></li>
                        <li id="iceMenu_193" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_103" className="iceMenuLiLevel_1 parent">
                <a href="/entrant" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Абітурієнту</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_181" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_152" className="iceMenuLiLevel_2 parent">
                          <a href="/entrant/entrance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Вступ до ПІБ МНТУ</span></a>
                          <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                            <li>
                              <div style={{float: 'left', width: '280px'}} className="iceCols">
                                <ul>
                                  <li id="iceMenu_155" className="iceMenuLiLevel_3"><a href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Умови прийому МОН</span></a></li>
                                  <li id="iceMenu_183" className="iceMenuLiLevel_3"><a href="/media/docs/ПП ПІБ зі змінами 2020 (2).pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Правила прийому ПІБ МНТУ</span></a></li>
                                  <li id="iceMenu_233" className="iceMenuLiLevel_3"><a href="/media/docs/dod3.pdf?v1" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Перелік конкурсних предметів ПІБ 2020</span></a></li>
                                  <li id="iceMenu_236" className="iceMenuLiLevel_3"><a href="/media/docs/ПП ПІБ зі змінами 2020 (2).pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Перелік документiв для вступу ПІБ 2020</span></a></li>
                                  <li id="iceMenu_251" className="iceMenuLiLevel_3"><a href="/media/docs/Рекомендові списки Денна.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 07.09.2020 (121 Iнженерiя програмного забезпечення)</span></a></li>
                                  <li id="iceMenu_252" className="iceMenuLiLevel_3"><a href="/media/docs/Рекомендовані списки Заочна.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 07.09.2020 (071 Облiк i оподаткування)</span></a></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li id="iceMenu_156" className="iceMenuLiLevel_2"><a href="/entrant/faq" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Часто запитують</span></a></li>
                        <li id="iceMenu_175" className="iceMenuLiLevel_2"><a href="/entrant/list" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Рейтинговий список вступників</span></a></li>
                        <li id="iceMenu_176" className="iceMenuLiLevel_2"><a href="/entrant/apply" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Подати заявку на вступ</span></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_146" className="iceMenuLiLevel_1 parent">
                <a href="/business-college" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Бізнес-коледж</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_162" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_218" className="iceMenuLiLevel_2 parent">
                          <a href="/business-college" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Спеціальності</span></a>
                          <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                            <li>
                              <div style={{float: 'left', width: '280px'}} className="iceCols">
                                <ul>
                                  <li id="iceMenu_202" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-physical-education-and-sport" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Фізична культура і спорт</span></a></li>
                                  <li id="iceMenu_227" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-law" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Право</span></a></li>
                                  <li id="iceMenu_228" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-accountancy" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Облік і оподаткування</span></a></li>
                                  <li id="iceMenu_229" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-finance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</span></a></li>
                                  <li id="iceMenu_230" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-management" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Менеджмент</span></a></li>
                                  <li id="iceMenu_231" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-it" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</span></a></li>
                                  <li id="iceMenu_232" className="iceMenuLiLevel_3"><a href="/business-college/courses/course-college-petroleum-engineering-and-technology" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</span></a></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li id="iceMenu_173" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_220" className="iceMenuLiLevel_2"><a href="/business-college" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Про коледж</span></a></li>
                        <li id="iceMenu_221" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_219" className="iceMenuLiLevel_2 parent">
                          <a href="/business-college/entrance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Вступ до коледжу</span></a>
                          <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                            <li>
                              <div style={{float: 'left', width: '280px'}} className="iceCols">
                                <ul>
                                  <li id="iceMenu_234" className="iceMenuLiLevel_3"><a href="/media/docs/dod3pbk.pdf?v2" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Перелік конкурсних предметів ПБК 2020</span></a></li>
                                  <li id="iceMenu_238" className="iceMenuLiLevel_3"><a href="/media/docs/dod4.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Перелік документiв для вступу ПБК 2020</span></a></li>
                                  <li id="iceMenu_235" className="iceMenuLiLevel_3"><a href="/media/docs/Правила%20прийому%20ПБК%20МНТУ.pdf?v1" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Правила прийому ПБК МНТУ</span></a></li>
                                  <li id="iceMenu_240" className="iceMenuLiLevel_3"><a href="/media/docs/Рейтинг_1.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Рейтинговий список від 23.07.2020 (017 Фізична культура і спорт)</span></a></li>
                                  <li id="iceMenu_241" className="iceMenuLiLevel_3"><a href="/media/docs/Рейтинг_3.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Рейтинговий список від 23.07.2020 (073 Менеджмент)</span></a></li>
                                  <li id="iceMenu_242" className="iceMenuLiLevel_3"><a href="/media/docs/Рейтинг_2.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Рейтинговий список від 23.07.2020 (121 Інженерія програмного забезпечення)</span></a></li>
                                  <li id="iceMenu_243" className="iceMenuLiLevel_3"><a href="/media/docs/Рекоменд_1.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 23.07.2020 (017 Фізична культура і спорт)</span></a></li>
                                  <li id="iceMenu_244" className="iceMenuLiLevel_3"><a href="/media/docs/Рекоменд_3.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 23.07.2020 (073 Менеджмент)</span></a></li>
                                  <li id="iceMenu_245" className="iceMenuLiLevel_3"><a href="/media/docs/Рекоменд_2.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 23.07.2020 (121 Інженерія програмного забезпечення)</span></a></li>
                                  <li id="iceMenu_246" className="iceMenuLiLevel_3"><a href="/media/docs/Рекоменд_31.08.2020.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 31.08.2020 (073 Менеджмент)</span></a></li>
                                  <li id="iceMenu_247" className="iceMenuLiLevel_3"><a href="/media/docs/Списки на основі ПЗСО.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих, Заочна форма навчання, від 01.09.2020 (121 Інженерія програмного забезпечення)</span></a></li>
                                  <li id="iceMenu_248" className="iceMenuLiLevel_3"><a href="/media/docs/Списки на основі КР.pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих, Заочна форма навчання, від 01.09.2020 (072 Фінанси, банківська справа та страхування)</span></a></li>
                                  <li id="iceMenu_249" className="iceMenuLiLevel_3"><a href="/media/docs/Списки на основі ПЗСО(денна форма).pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 03.09.2020 (121 Iнженерiя програмного забезпечення)</span></a></li>
                                  <li id="iceMenu_250" className="iceMenuLiLevel_3"><a href="/media/docs/Списки на основі КР(денна форма).pdf" target="_blank" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Список рекомендованих від 02.09.2020 (017 Фiзична культура i спорт)</span></a></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_104" className="iceMenuLiLevel_1 parent">
                <a href="#" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Інше</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_182" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                        <li id="iceMenu_174" className="iceMenuLiLevel_2"><a href="/other/schedule" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Розклад занять</span></a></li>
                        <li id="iceMenu_158" className="iceMenuLiLevel_2"><a href="/other/juridical-help" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Юридична клініка</span></a></li>
                        <li id="iceMenu_157" className="iceMenuLiLevel_2"><a href="/other/gallery" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Фотоархів</span></a></li>
                        <li id="iceMenu_160" className="iceMenuLiLevel_2"><a href="/other/self-governance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Студентське самоврядування</span></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_106" className="iceMenuLiLevel_1 parent">
                <a href="/contact" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Контакти</span></a>
                <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
                  <li>
                    <div style={{float: 'left', width: '280px'}} className="iceCols">
                      <ul>
                        <li id="iceMenu_207" className="iceMenuLiLevel_2"><a href="/contact/email" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Написати email ПІБ МНТУ</span></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="iceMenu_107" className="iceMenuLiLevel_1"><a href="/sitemap" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Мапа сайту</span></a></li>
            </ul>
          </div>
          <div id="front_header_teaser">
            <div id="icetabs92" className="ice-tabs-black ice-right-sl-black clearfix" style={{height: '370px', width: 'auto'}}>
              <div className="ice-navigator-wrapper">
                <div className="ice-navigator-outer" style={{width: '322px', height: '370px'}}>
                  <ul className="ice-navigator" style={{top: '0px'}}>
                    <li style={{width: '322px', height: '74px'}}>
                      <div>
                        <img src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/vstup.jpg" title="Вступ 2020" alt="Вступ 2020" />
                        <h4 className="ice-title singleline">Вступ 2020</h4>
                      </div>
                    </li>
                    <li style={{width: '322px', height: '74px'}} className="active">
                      <div>
                        <img src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/1.jpg" title="Вступ без ЗНО" alt="Вступ без ЗНО" />
                        <h4 className="ice-title singleline">Вступ без ЗНО</h4>
                      </div>
                    </li>
                    <li style={{width: '322px', height: '74px'}}>
                      <div>
                        <img src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/business-college.jpg" title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" />
                        <h4 className="ice-title singleline">Полтавський бізнес-коледж</h4>
                      </div>
                    </li>
                    <li style={{width: '322px', height: '74px'}}>
                      <div>
                        <img src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/spec-management-sob.jpg" title="Менеджмент безпеки підприємницької діяльності" alt="Менеджмент безпеки підприємницької діяльності" />
                        <h4 className="ice-title doubleline">Менеджмент безпеки підприємницької діяльності</h4>
                      </div>
                    </li>
                    <li style={{width: '322px', height: '74px'}}>
                      <div>
                        <img src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/military.jpg" title="Військова кафедра" alt="Військова кафедра" />
                        <h4 className="ice-title singleline">Військова кафедра</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ice-main-wapper">
                <div className="ice-main-item item1" style={{display: 'block', top: '-354px', height: '354px'}}>
                  <div className="ice-description">
                    <a className="ice-readmore" target="_parent" href="/9-home/teaser/74-i" title="Вступ 2020">
                      <img src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/vstup.jpg" title="Вступ 2020" alt="Вступ 2020" /> </a>
                    <a className="ice-description-inside block center" target="_parent" href="/9-home/teaser/74-i">
                      <h3 className="ice-title dashed gold">
                        Вступ 2020
                      </h3>
                      <p>Вступ 2020</p>
                      <span className="ice-readmore">
                        Дізнатися&nbsp;більше</span>
                    </a>
                  </div>
                </div>
                <div className="ice-main-item item2" style={{top: '0px', height: '354px', display: 'block'}}>
                  <div className="ice-description">
                    <a className="ice-readmore" target="_parent" href="/9-home/teaser/100-about" title="Вступ без ЗНО">
                      <img src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/1.jpg" title="Вступ без ЗНО" alt="Вступ без ЗНО" /> </a>
                    <a className="ice-description-inside block center" target="_parent" href="/9-home/teaser/100-about">
                      <h3 className="ice-title dashed gold">
                        Вступ без ЗНО
                      </h3>
                      <p>Вступ без ЗНО</p>
                    </a>
                    <a style={{display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999999}} href="https://pib.edu.ua/images/teasers/%D0%A4%D0%9F%D0%91%D0%9A%20%D0%92%D0%A1%D0%A2%D0%A3%D0%9F%20%D0%91%D0%95%D0%97%20%20%D0%97%D0%9D%D0%9E.doc"> gthtqnb</a>
                    <span className="ice-readmore">
                      Дізнатися&nbsp;більше</span>
                  </div>
                </div>
                <div className="ice-main-item item3" style={{top: '-354px', height: '354px', display: 'block'}}>
                  <div className="ice-description">
                    <a className="ice-readmore" target="_parent" href="/9-home/teaser/33-business-college" title="Полтавський бізнес-коледж">
                      <img src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/business-college.jpg" title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" /> </a>
                    <a className="ice-description-inside block center" target="_parent" href="/9-home/teaser/33-business-college">
                      <h3 className="ice-title dashed gold">
                        Полтавський бізнес-коледж
                      </h3>
                      <p>Запрошуємо на навчання випускників 9-х, 11-х класів до бізнес-коледжу із зарахування на III курс ПІБ МНТУ після закінчення</p>
                      <span className="ice-readmore">
                        Дізнатися&nbsp;більше</span>
                    </a>
                  </div>
                </div>
                <div className="ice-main-item item4" style={{top: '-354px', height: '354px', display: 'block'}}>
                  <div className="ice-description">
                    <a className="ice-readmore" target="_parent" href="/9-home/teaser/32-spec-management" title="Менеджмент безпеки підприємницької діяльності">
                      <img src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/spec-management-sob.jpg" title="Менеджмент безпеки підприємницької діяльності" alt="Менеджмент безпеки підприємницької діяльності" /> </a>
                    <a className="ice-description-inside block center" target="_parent" href="/9-home/teaser/32-spec-management">
                      <h3 className="ice-title dashed gold">
                        Менеджмент безпеки підприємницької діяльності
                      </h3>
                      <p>Унікальна спеціалізація для тих, кто дбає про безпеку</p>
                      <span className="ice-readmore">
                        Дізнатися&nbsp;більше</span>
                    </a>
                  </div>
                </div>
                <div className="ice-main-item item5" style={{top: '-354px', height: '354px', display: 'block'}}>
                  <div className="ice-description">
                    <a className="ice-readmore" target="_parent" href="/9-home/teaser/35-military" title="Військова кафедра">
                      <img src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/military.jpg" title="Військова кафедра" alt="Військова кафедра" /> </a>
                    <a className="ice-description-inside block center" target="_parent" href="/9-home/teaser/35-military">
                      <h3 className="ice-title dashed gold">
                        Військова кафедра
                      </h3>
                      <p>Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової підготовки Військового інституту телекомунікацій та інформатизації із присвоєнням військового звання <span className="bold">молодший лейтенант запасу</span> після закінчення.</p>
                      <span className="ice-readmore">
                        Дізнатися&nbsp;більше</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="header_pseudo_search_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box" />
          </div>
          <div id="header_pseudo_schedule_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              <div className="custom">
                <br />
                <p style={{fontStyle: 'italic', textAlign: 'center'}}>Тут Ви можете завжди знайти останній розклад занять для Вашого курсу</p>
                <br />
              </div>
              <div className="easyfolderlisting">
                <ul className="123easyfolderlisting" style={{listStyle: 'none'}}>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21-25.09.20  РОЗКЛАД КОЛЕДЖ.xls">21-25.09.20 РОЗКЛАД КОЛЕДЖ</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 М-31.xls">21.09 - 25.09.20 М-31</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 Пз-41.xls">21.09 - 25.09.20 Пз-41</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ФР-21.xls">21.09 - 25.09.20 ФР-21</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ЮП-31 +ЮП-21.xls">21.09 - 25.09.20 ЮП-31 +ЮП-21</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ЮПз-41.xls">21.09 - 25.09.20 ЮПз-41</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/МЕТОДИЧКА СОЦІОЛОГІЯ.doc">МЕТОДИЧКА СОЦІОЛОГІЯ</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЕОАз-51 2018.doc">Методичка ДЕК ЕОАз-51 2018</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЗЛз51.doc">Методичка ДЕК ЗЛз51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК МОз-51.doc">Методичка ДЕК МОз-51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЮПз-51.doc">Методичка ДЕК ЮПз-51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/ОПЛАТА НАВЧАННЯ.doc">ОПЛАТА НАВЧАННЯ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="header_mail_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              There is no form with this name or may be the form is unpublished, Please check the form and the url and the form management.
            </div>
          </div>
        </div>
        <div id="front_header_maintop" />
      </div>

      <div id="front_main_wrapper">
        <ul className="front_promo">
          <li><a className="slot_1" href="/pib/benefits/#anchor1"><span className="front_promo_title_double">Якість та<br />
                досвід</span><br />
              <span className="front_promo_sub">Успішно надаємо якісну освіту вже понад 20-ть років</span></a>
          </li>
          <li><a className="slot_2" href="/pib/benefits/#anchor2"><span className="front_promo_title_double">Диплом<br />
                міжнародного зразка</span><br />
              <span className="front_promo_sub">Відкрийте для себе шлях закордон з дипломом МНТУ</span></a>
          </li>
          <li><a className="slot_3" href="/pib/benefits/#anchor3"><span className="front_promo_title_double">Професіоналізм</span><br />
              <span className="front_promo_sub">Ми знаємо як зробити так, щоб наші випускники стали найкращими</span></a>
          </li>
        </ul>
        <div id="front_info">
          <h1 className="title block center">«Почни життя з якісної освіти!»</h1>
          <p>Успішна кар'єра починається з якісного навчання. Всіх наших випускників об'єднує їх одна досягнута Мета: Висока зарплата, Високий рівень життя, Комфорт, Безпека!</p>
          <p>Забезпечення всіх умов для здобуття молоддю якісної освіти є одним із пріоритетів нашого університету!</p>
          <p>Є чудовий вислів у В. О. Сухомлинського : «Ми маємо справу з найскладнішим, неоціненним, найдорожчим, що є у житті - з людиною. Від нас, від нашого вміння, майстерності, мистецтва, мудрості залежить її життя, здоров’я, розум, характер, воля, громадянське й інтелектуальне обличчя».</p>
          <p>Головна мета ПІБ МНТУ - створити умови для розвитку та самореалізації кожної особистості як громадянина України, формувати покоління, здатне навчатися впродовж життя, створювати й розвивати цінності громадянського суспільства.<br />
            А це можливо лише при умові якісної освіти.
          </p>
          <p>Ви зараз знаходитесь на надзвичайно важливому етапі вашого самостійного життя - виборі майбутньої професії.</p>
          <a className="button block" href="/pib/about" title="Дізнатися більше про ПІБ МНТУ">Дізнатися більше про ПІБ МНТУ</a>
          <p className="bold italic">Тож зробіть правильний вибір!<br />
            Обирайте навчання в Полтавському інституті бізнесу<br />
            Міжнародного науково-технічного університету імені академіка Юрія Бугая!<br />
          </p>
        </div>
      </div>

      <div id="front_opinions_wrapper">
        <div className="slot1">
          <div id="icetabs107" className="ice-tabs-white -sl-white" style={{height: '207px', width: '655px'}}>
            <div className="ice-main-wapper" style={{height: '207px', width: '655px'}}>
              <div className="ice-main-item" style={{display: 'block', left: '0px', width: '655px'}}>
                <div className="opinions_photo">
                  <img src="/images/opinions/V-Struk.jpg" title="Вячеслав Стрюк, начальник відділення ПАТ «КБ «ГЛОБУС»" alt="Вячеслав Стрюк, начальник відділення ПАТ «КБ «ГЛОБУС»" />
                </div>
                <div className="opinions">
                  <div className="opinions_wrapper">
                    <div className="opinions_tl" />
                    <div className="opinions_tbg" />
                    <div className="opinions_tr" />
                    <div className="opinions_content">
                      <div className="opinions_quote">“</div>
                      <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>Мабуть кожен випускник ПІБ МНТУ може бути гордий тим, що навчався тут і отримав знання, які допомогли у творчому становленні в житті.</p>
                      <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>Для мене освіта, здобута в ПІБ МНТУ, забезпечила блискучий старт для подальшої кар’єри. Високий рівень теоретичних знань і практичні навички полегшили роботу та забезпечили швидкий професійний ріст. Я дуже вдячний викладачам ПІБ МНТУ за професіоналізм, наполегливість, терпіння, вміння зацікавити студентів, дати їм знання і навчити працювати!</p>
                    </div>
                    <div className="opinions_bl" />
                    <div className="opinions_bbg" />
                    <div className="opinions_br" />
                  </div>
                </div>
                <div className="opinions_author">
                  -&nbsp;Вячеслав Стрюк,<br />&nbsp; начальник відділення ПАТ «КБ «ГЛОБУС»
                </div>
                <div className="clear-both" />
              </div>
              <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
                <div className="opinions_photo">
                  <img src="/images/opinions/R-S-Shenko.jpg" title="Іщенко Роман Сергійович, керівник департаменту непрямих продажів Корпорації «SI GROUP»" alt="Іщенко Роман Сергійович, керівник департаменту непрямих продажів Корпорації «SI GROUP»" />
                </div>
                <div className="opinions">
                  <div className="opinions_wrapper">
                    <div className="opinions_tl" />
                    <div className="opinions_tbg" />
                    <div className="opinions_tr" />
                    <div className="opinions_content">
                      <div className="opinions_quote">“</div>
                      <p style={{padding: '0px'}}>Усім, хто є випускником ПІБ МНТУ, хто пов'язаний з ним, бажаю успіху в досягненні поставленої мети в житті, яка, безумовно, завжди є позитивною!</p>
                    </div>
                    <div className="opinions_bl" />
                    <div className="opinions_bbg" />
                    <div className="opinions_br" />
                  </div>
                </div>
                <div className="opinions_author">
                  -&nbsp;Іщенко Роман Сергійович,<br />&nbsp; керівник департаменту непрямих продажів Корпорації «SI GROUP»
                </div>
                <div className="clear-both" />
              </div>
              <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
                <div className="opinions_photo">
                  <img src="/images/opinions/I-Lavka.jpg" title='Лавка Ірина, ПАТ " Альфа-банк", спеціаліст відділу забезпечення продаж ' alt="Лавка Ірина, ПАТ " />
                </div>
                <div className="opinions">
                  <div className="opinions_wrapper">
                    <div className="opinions_tl" />
                    <div className="opinions_tbg" />
                    <div className="opinions_tr" />
                    <div className="opinions_content">
                      <div className="opinions_quote">“</div>
                      <p style={{fontSize: '14px', lineHeight: '16px', paddingBottom: '5px'}}>Я закінчила ПІБ МНТУ у 2012 році. </p>
                      <p style={{fontSize: '14px', lineHeight: '16px', paddingBottom: '5px'}}>У роботі, безумовно, стали в нагоді знання суті і особливостей банківських операцій, а також нормативно-правової бази, регулюючої банківську діяльність, знання бухгалтерського обліку банківських операцій, а ще діловий англійський, статистика і академічні знання решти у сфері економіки, фінансів, маркетинг. Дуже вдячна професорсько-викладацькому складу ПІБ МНТУ</p>
                    </div>
                    <div className="opinions_bl" />
                    <div className="opinions_bbg" />
                    <div className="opinions_br" />
                  </div>
                </div>
                <div className="opinions_author">
                  -&nbsp;Лавка Ірина,<br />&nbsp; ПАТ "Альфа-банк",<br />&nbsp; спеціаліст відділу забезпечення продаж
                </div>
                <div className="clear-both" />
              </div>
              <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
                <div className="opinions_photo">
                  <img src="/images/opinions/Y-Gromik.jpg" title="Громик Юрій Юрійович, головний спеціаліст та інспектор якості, економіст УАР Криничанської райдержадміністрації" alt="Громик Юрій Юрійович, головний спеціаліст та інспектор якості, економіст УАР Криничанської райдержадміністрації" />
                </div>
                <div className="opinions">
                  <div className="opinions_wrapper">
                    <div className="opinions_tl" />
                    <div className="opinions_tbg" />
                    <div className="opinions_tr" />
                    <div className="opinions_content">
                      <div className="opinions_quote">“</div>
                      <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '2px'}}>До років навчання в інституті завжди буду ставитись як до особливо продуктивного періоду мого життя, адже із самого початку поєднував роботу з навчальним процесом, який проходив під чудовим професійним керівництвом викладачів нашого рідного ВУЗу.</p>
                      <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '2px'}}>Особливо хочу подякувати кафедрі економічних дисциплін за безцінні знання, отримані під час вивчення фахових дисциплін. Хочу зазначити, що персональний підхід до кожного студента в ПІБ МНТУ це не порожнє словосполучення, а принцип роботи викладачів. </p>
                      <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '3px'}}>Від щирого серця бажаю Полтавському інституту бізнесу подальшого розвитку і процвітання, а студентам стати добрими фахівцями обраної вами справи. Будьте вдячними викладачам, котрі передають вам свій досвід та мудрість. </p>
                    </div>
                    <div className="opinions_bl" />
                    <div className="opinions_bbg" />
                    <div className="opinions_br" />
                  </div>
                </div>
                <div className="opinions_author">
                  -&nbsp;Громик Юрій Юрійович,<br />&nbsp; головний спеціаліст та інспектор якості,<br />&nbsp; економіст УАР Криничанської райдержадміністрації
                </div>
                <div className="clear-both" />
              </div>
              <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
                <div className="opinions_photo">
                  <img src="/images/opinions/E-Nechupienko.jpg" title="Нечупієнко Єлізавета Володимирівна, інспектор Управління Державної казначейської служби України" alt="Нечупієнко Єлізавета Володимирівна, інспектор Управління Державної казначейської служби України" />
                </div>
                <div className="opinions">
                  <div className="opinions_wrapper">
                    <div className="opinions_tl" />
                    <div className="opinions_tbg" />
                    <div className="opinions_tr" />
                    <div className="opinions_content">
                      <div className="opinions_quote">“</div>
                      <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>З моменту вступу до Полтавського інституту бізнесу на спеціальність «Фінанси і кредит» я жодного разу не засумнівалась у правильності зробленого мною вибору. Причина полягає не тільки в моїй цікавості до вивчення економічних і фінансових процесів, що пов’язане з моєю роботою, а й у зрозумілій формі подачі цих знань викладачами кафедри економічних дисциплін. Особливе значення має невимушена атмосфера спілкування викладачів і студентів, відсутність формалізму, наявність можливостей для позааудиторної роботи.</p>
                    </div>
                    <div className="opinions_bl" />
                    <div className="opinions_bbg" />
                    <div className="opinions_br" />
                  </div>
                </div>
                <div className="opinions_author">
                  -&nbsp;Нечупієнко Єлізавета Володимирівна,<br />&nbsp; інспектор Управління Державної казначейської служби України
                </div>
                <div className="clear-both" />
              </div>
              <div className="ice-buttons-control">
                <div className="ice-previous">Previous</div>
                <div className="ice-next">Next</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slot2">
          <ul className="likes">
            <li>
              {/* <fb:like href="http://www.facebook.com/pages/ПИБ-МНТУ/112255128857387" send="false" layout="button_count" width={123} show_faces={true} className=" fb_iframe_widget" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=0&href=http%3A%2F%2Fwww.facebook.com%2Fpages%2F%25D0%259F%25D0%2598%25D0%2591-%25D0%259C%25D0%259D%25D0%25A2%25D0%25A3%2F112255128857387&layout=button_count&locale=ru_RU&sdk=joey&send=false&show_faces=true&width=123"><span style={{verticalAlign: 'bottom', width: '105px', height: '20px'}}><iframe name="f36f65309391b68" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" allowTransparency={true} allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/plugins/like.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1e619f9427e3c8%26domain%3Dpib.edu.ua%26origin%3Dhttps%253A%252F%252Fpib.edu.ua%252Ff2c0b581bac41f8%26relation%3Dparent.parent&container_width=0&href=http%3A%2F%2Fwww.facebook.com%2Fpages%2F%25D0%259F%25D0%2598%25D0%2591-%25D0%259C%25D0%259D%25D0%25A2%25D0%25A3%2F112255128857387&layout=button_count&locale=ru_RU&sdk=joey&send=false&show_faces=true&width=123" style={{border: 'none', visibility: 'visible', width: '105px', height: '20px'}} className width="123px" height="1000px" frameBorder={0} /></span></fb:like></ul> */}
            </li>
            <li>
              <iframe id="twitter-widget-0" scrolling="no" allowFullScreen={true} className="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style={{position: 'static', visibility: 'visible', width: '79px', height: '20px'}} title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.2d7d9a6d04538bf11c7b23641e75738c.ru.html#dnt=false&id=twitter-widget-0&lang=ru&original_referer=https%3A%2F%2Fpib.edu.ua%2F&size=m&text=%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82%20%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D0%B0%20%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%BB%D1%81%D1%8F!&time=1600516888041&type=share&url=https%3A%2F%2Fpib.edu.ua%2F&via=PibIstu" frameBorder={0} />
            </li>
          </ul>
          <p style={{paddingBottom: '10px', paddingTop: '9px'}}><a href="/home/reviews">Всі відгуки</a></p>
          <p><a href="/home/reviews/#comment">Залишити відгук</a></p>
        </div>
      </div>

      <div id="front_action">
        <div id="front_action_wrapper">
          <div className="slot1">
            <a className="title" href="/pib#courses">Напрямки та спеціалізації</a> <a className="icon" href="/pib#courses" title="Ознайомитись з напрямками та спеціалізаціями ПІБ МНТУ">Ознайомитись з напрямками та спеціалізаціями ПІБ МНТУ</a>
            <p>Пропонуємо <span className="bold">7 напрямів та спеціальностей</span>, за якими здійснюється підготовка фахівців у ПІБ МНТУ, серед яких є й <span className="bold italic">унікальні спеціалізації</span>.<br />Дізнайтесь більше:</p>
            <a className="button" href="/pib#courses" title="Ознайомитись з напрямками та спеціалізаціями ПІБ МНТУ">Ознайомитись з напрямками та спеціалізаціями ПІБ МНТУ</a>
          </div>
          <div className="slot2">
            <a className="title" href="/other/juridical-help">Юридична допомога</a> <a className="icon" href="/other/juridical-help" title="Детальніше про юридичну допомогу">Детальніше про юридичну допомогу</a>
            <p>Потрібна юридична допомога, але ви не маєте змоги звернутися за платною допомогою? Скористайтеся послугами безкоштовної юридичної студентської клініки!</p>
            <a className="button" href="/other/juridical-help" title="Детальніше про юридичну допомогу">Детальніше про юридичну допомогу</a>
          </div>
          <div className="slot3">
            <a className="title" href="/entrant/apply">Бажаєш вчитися?</a><br className="clear-both" />
            <a className="icon" href="/entrant/apply" title="Подати заявку на вступ до ПІБ МНТУ">Подати заявку на вступ до ПІБ МНТУ</a>
            <p>Зацікавились ПІБ МНТУ?<br />Дякуємо за вибір нашого ВУЗу!<br />Розпочніть свій процес вступу до ПІБ МНТУ прямо зараз, в режимі онлайн:</p>
            <a className="link" href="/entrant/entrance">Вступ до ПІБ МНТУ</a><span className="arrow">&nbsp;»</span><a className="button" href="/entrant/apply" title="Подати заявку на вступ до ПІБ МНТУ">Подати заявку на вступ до ПІБ МНТУ</a>
          </div>
        </div>
      </div>

      <div id="front_news">
        <div id="front_news_wrapper">
          <div className="slot1">
            <div className="header">
              <span className="text">Останні новини</span><a className="rss" href="/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw" title="Стрічка RSS">Стрічка RSS</a><span className="all"><a className="link" href="/home/news">архів новин</a></span>
            </div>
            <div className="content">
              <ul>
                <li className="ice-item">
                  <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/104-news-2020-07-22" className="hasTip "><span>Вибори Голови студентської ради міста Полтави</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/103-news-2020-07-21" className="hasTip "><span>Проведення свята для дітей в реабілітаційному центрі з ураженнями нервової системи</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/102-news-2020-07-20" className="hasTip "><span>Похід в Музей військових конфліктів</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2020-07-19</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/101-news-2020-07-19" className="hasTip "><span>Захід до Міжнародного жіночого дня</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2019-12-09</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/89-news-2019-12-09" className="hasTip "><span>Пробне ЗНО-2020</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2019-07-01</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/news/88-news-2019-07-01" className="hasTip "><span>Висновок експертної комісії щодо акредитації за освітньо-кваліфікаційним рівнем «молодший спеціаліст...</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="vline" />
          <div className="slot2">
            <div className="header">
              <span className="text">Найближчі події</span><span className="all"><a className="link" href="/home/events">всі події</a></span>
            </div>
            <div className="content">
              <ul>
                <li className="ice-item">
                  <span className="date news">2013-12-11</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/events/70-event-2013-12-11" className="hasTip "><span>Конференція на тему «Сучасні тенденції розвитку українського суспільства в ХXІ столітті: погляд моло...</span></a>
                </li>
                <li className="ice-item">
                  <span className="date news">2013-10-28</span>&nbsp;<span className="separator">|</span>&nbsp;<a href="/home/events/71-event-2013-10-28" className="hasTip "><span>Тиждень іноземної мови</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="front_photo_wrapper">
          <div className="header">
            Останні фото:<br />
            <a className="link" href="/other/gallery">фотоархів</a>
          </div>
          <div className="mosaic" style={{float: 'left', width: '121px'}}>
            <a className="shadowbox-button-rim" title="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" href="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_l_DSC_0001.JPG" rel="shadowbox[PhocaGalleryRIM5385df48];options={slideshowDelay:5}">
              <img src="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_s_DSC_0001.JPG" alt="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" width={121} height={121} /></a>
          </div>
          <div className="mosaic" style={{float: 'left', width: '121px'}}>
            <a className="shadowbox-button-rim" title="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" href="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_l_DSC_0040.JPG" rel="shadowbox[PhocaGalleryRIM5385df48];options={slideshowDelay:5}">
              <img src="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_s_DSC_0040.JPG" alt="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" width={121} height={121} /></a>
          </div>
          <div className="mosaic" style={{float: 'left', width: '121px'}}>
            <a className="shadowbox-button-rim" title="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" href="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_l_DSC_0043.JPG" rel="shadowbox[PhocaGalleryRIM5385df48];options={slideshowDelay:5}">
              <img src="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_s_DSC_0043.JPG" alt="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" width={121} height={121} /></a>
          </div>
          <div className="mosaic" style={{float: 'left', width: '121px'}}>
            <a className="shadowbox-button-rim" title="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" href="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_l_DSC_0048.JPG" rel="shadowbox[PhocaGalleryRIM5385df48];options={slideshowDelay:5}">
              <img src="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_s_DSC_0048.JPG" alt="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" width={121} height={121} /></a>
          </div>
          <div className="mosaic" style={{float: 'left', width: '121px'}}>
            <a className="shadowbox-button-rim" title="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" href="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_l_DSC_0057.JPG" rel="shadowbox[PhocaGalleryRIM5385df48];options={slideshowDelay:5}">
              <img src="/images/phocagallery/news_2016-06-07/thumbs/phoca_thumb_s_DSC_0057.JPG" alt="Чемпіонат з міні-футболу на кубок ректора Полтавського інституту бізнесу 2016" width={121} height={121} /></a>
          </div>
          <div style={{clear: 'both'}} />
        </div>
      </div>

      <div id="footer_upper">
        <div className="shadow">
          <div className="bg">
            <div className="wrapper">
              <div className="slot1">
                <div className="header">
                  <span className="text">Коротко про ПІБ МНТУ</span>
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
                    <img className="img_float_left" src="/templates/pib/img/ban_cbs-2.gif" alt="Полтавська міська ЦБС" />
                  </a>
                  <a href="http://libgonchar.org" rel="nofollow" target="_blank" title="Полтавська обласна бібліотека для юнацтва імені Олеся Гончара">
                    <img className="img_float_left" src="/templates/pib/img/ban_BidliotekaPOBU1-2.gif" alt="Полтавська обласна бібліотека для юнацтва імені Олеся Гончара" />
                  </a>
                  <a href="http://www.mon.gov.ua/ua/" rel="nofollow" target="_blank" title="Сайт Міністерства освіти і науки, молоді та спорту України">
                    <img className="img_float_left" src="/templates/pib/img/ban_minosvit.gif" alt="Міністерство освіти і науки, молоді та спорту України" />
                  </a>
                  <a href="http://iosvita.com.ua" rel="nofollow" target="_blank" title="Сайт системи Електронний вступ">
                    <img className="img_float_left" src="/templates/pib/img/ban_register.gif" alt="Система Еклектронний вступ" />
                  </a>
                  <a href="http://rabota.ua/полтава" rel="nofollow" target="_blank" title="Rabota.ua — работа в Полтаві">
                    <img className="img_float_left" src="/templates/pib/img/partner-rabouta-ua.png" alt="Rabota.ua — работа в Полтаві" width={129} />
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
                  <p className="contact">36039 м. Полтава, вул. Сінна 7&nbsp;<a href="https://maps.google.com/maps?q=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&hl=en&ie=UTF8&sll=49.588267,34.551417&sspn=0.183173,0.308647&t=m&view=map&cid=16253679154153765982&hq=%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0+%D1%81%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F+7&z=15&iwloc=A" title="Показати ПІБ МНТУ на мапі" target="_blank"><img src="/templates/pib/img/footer_cont_mappin.png" alt="Показати ПІБ МНТУ на мапі" /></a></p>
                  <p className="contact"><a href="/contact/email">написати нам email</a>&nbsp;|&nbsp;<a href="/contact/#req">реквізити</a></p>
                </div>
                <a target="_blank" href="https://next.privat24.ua/payments/form/{&quot;token&quot;:&quot;b1141b64-69ca-413c-8d76-1c5f9593f8d2&quot;}"><img src="/templates/pib/img/privat-pay2.png" style={{marginTop: '60px'}} alt="" /></a>
              </div>
              <div className="vline2" />
              <div className="vline2" />
              <div className="slot5">
                <div className="header">
                  <span className="text">ПІБ МНТУ в мережі</span>
                </div>
                <div className="content">
                  <a className="fb" href="https://www.facebook.com/pages/ПИБ-МНТУ/112255128857387" target="_blank" title="ПІБ МНТУ в Facebook">ПІБ МНТУ в Facebook</a>
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
            © 2000-2017
          </div>
          <ul className="menu" id="footer_menu">
            <li className="item-164"><a href="/sitemap">Мапа сайту</a></li>
            <li className="item-165"><a href="/pib/benefits">Чому ПІБ МНТУ</a></li>
            <li className="item-172"><a href="/entrant/entrance">Вступ</a></li>
            <li className="item-167"><a href="/home/news">Останні новини</a></li>
            <li className="item-168"><a href="/entrant/faq">Часто запитують</a></li>
            <li className="item-166"><a href="/other/schedule">Розклад занять</a></li>
            <li className="item-170"><a href="/contact">Контакти</a></li>
            <li className="item-171"><a href="/pib/license">Ліцензія та сертифікати</a></li>
            <li className="item-169"><a href="/other/juridical-help">Юридична клініка</a></li>
          </ul>
        </div>
      </div>

      <div id="lbOverlay" style={{display: 'none'}} />

      <div id="lbCenter" style={{display: 'none'}}>
        <div id="lbImage">
          <div style={{position: 'relative'}}><a id="lbPrevLink" href="#" /><a id="lbNextLink" href="#" /></div>
        </div>
      </div>

      <div id="lbBottomContainer" style={{display: 'none'}}>
        <div id="lbBottom">
          <a id="lbCloseLink" href="#" />
          <div id="lbCaption" />
          <div id="lbNumber" />
          <div style={{clear: 'both'}} />
        </div>
      </div>

      <div id="sbox-overlay" aria-hidden={true} tabIndex={-1} style={{zIndex: 65555, opacity: 0}} />

      <div id="sbox-window" role="dialog" aria-hidden={true} className="shadow" style={{zIndex: 65557}}>
        <div id="sbox-content" style={{opacity: 0}} />
        <a id="sbox-btn-close" href="#" role="button" aria-controls="sbox-window" />
      </div>

      <div id="shadowbox_container">
        <div id="shadowbox_overlay" />
        <div id="shadowbox">
          <div id="shadowbox_title">
            <div id="shadowbox_title_inner" />
          </div>
          <div id="shadowbox_body">
            <div id="shadowbox_body_inner" />
            <div id="shadowbox_loading">
              <div id="shadowbox_loading_indicator" />
              <span><a onClick={() => (window as any).Shadowbox.close()}>Cancel</a></span>
            </div>
          </div>
          <div id="shadowbox_info">
            <div id="shadowbox_info_inner">
              <div id="shadowbox_counter" />
              <div id="shadowbox_nav"><a id="shadowbox_nav_close" title="Close" onClick={() => (window as any).Shadowbox.close()} /><a id="shadowbox_nav_next" title="Next" onClick={() => (window as any).Shadowbox.next()} /><a id="shadowbox_nav_play" title="Play" onClick={() => (window as any).Shadowbox.play()} /><a id="shadowbox_nav_pause" title="Pause" onClick={() => (window as any).Shadowbox.pause()} /><a id="shadowbox_nav_previous" title="Previous" onClick={() => (window as any).Shadowbox.previous()} /></div>
              <div className="shadowbox_clear" />
            </div>
          </div>
        </div>
      </div>
  </div>
)}
