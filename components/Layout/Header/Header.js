import React, {useEffect, useState, Fragment} from 'react';

import '../../../assets/css/css3_icemegamenu.css';
import '../../../assets/css/default_notjs.css';
import '../../../assets/css/jquery.megamenu.css';
import '../../../assets/css/style.css';
import '../../../assets/iceTabs/style.css';
import '../../../assets/css/unused.css';
import '../../../assets/css/ptsans.css';
import '../../../assets/css/main.css';
import '../../../assets/css/joomla.css';
import '../../../assets/css/ie7.css';
import '../../../assets/css/ie.css';
import '../../../assets/css/other.css';
import '../../../assets/css/base.css';

import Logo from '../../../assets/images/header_logo.png';
import excel from '../../../assets/icons/page_white_excel.png';
import word from '../../../assets/icons/page_white_word.png';
import Head from "next/head";
import iceSlideShow from '../../../assets/js/script_16';
const Header = (props) => {
    const [tasksOpen, setTasksOpen] = useState(false);
    const [isFrontPage, setFrontPage] = useState(false);

    useEffect(() => {
        const {isFront} = props;

        if(isFront) setFrontPage(true);
    });



    const openTasks = () => {
        setTasksOpen(!tasksOpen);
    };

    return(
        <Fragment>
            <Head>
                <script src="https://code.jquery.com/jquery-3.5.1.js"
                        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
                        crossOrigin="anonymous" />

                        <script src={iceSlideShow} />
            </Head>
            <div id={isFrontPage ? 'front_header' : 'other_header'}>
                <div id="header_pseudo">
                    <div className="wrapper">

                        <button className="schedule divslide" style={{float: 'right', marginRight: '100px'}}
                                rel="#header_pseudo_schedule_box" onClick={() => openTasks()} title="Розклад занять">Розклад
                            занять</button>
                        {
                            tasksOpen ?
                                <div id="header_pseudo_schedule_box" className="toggleDiv tooltip-box">
                                    <div className="arrow" />
                                    <div className="box">
                                        <div className="custom">
                                            <br />
                                            <p style={{fontStyle:'italic',textAlign:'center'}}>Тут Ви можете завжди знайти останній
                                                розклад занять для Вашого курсу</p>
                                            <br />
                                        </div>
                                        <div className="easyfolderlisting">

                                            <ul className="123easyfolderlisting" style={{listStyle:'none'}}>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%86%D0%9F%D0%97-41,%20%D0%9A%D0%9D-11%D0%BC.xls">01.06 - 05.06.20 ІПЗ-41, КН-11м</a>
                                                </li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%86%D0%9F%D0%97%D0%B7-31.xls">01.06
                                                        - 05.06.20 ІПЗз-31</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%9C+%D0%9C%D0%9A-31,%20%D0%86%D0%9F%D0%97-31.xls">01.06
                                                        - 05.06.20 М+МК-31, ІПЗ-31</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%9C%D0%B7-41,%20%D0%9E%D0%9F%D0%B7-11%20%D0%BC.xls">01.06
                                                        - 05.06.20 Мз-41, ОПз-11 м</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%9D%D0%93%D0%86-31%20;%20%D0%9F%D0%A3%D0%90-11%D0%BC.xls">01.06
                                                        - 05.06.20 НГІ-31 ; ПУА-11м</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%9F%D0%B7-21.xls">01.06
                                                        - 05.06.20 Пз-21</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%9F%D0%B7-31,%D0%9F-31.xls">01.06
                                                        - 05.06.20 Пз-31,П-31</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%A4%D0%A0-21.xls">01.06
                                                        - 05.06.20 ФР-21</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%A4%D0%A0-31,%D0%A4%D0%A0-41.xls">01.06
                                                        - 05.06.20 ФР-31,ФР-41</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%A4%D0%A0%D0%B7-31,%D0%A4%D0%A0%D0%B7-41.xls">01.06
                                                        - 05.06.20 ФРз-31,ФРз-41</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%AE%D0%9F-31+%D0%AE%D0%9F-41.xls">01.06
                                                        - 05.06.20 ЮП-31+ЮП-41</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06%20-%2005.06.20%20%D0%AE%D0%9F%D0%B7-31.xls">01.06
                                                        - 05.06.20 ЮПз-31</a></li>
                                                <li><img src={excel} alt="A Microsoft Excel file" />
                                                    <a href="https://pib.edu.ua/media/schedule/01.06-05.06.20%20%D0%A0%D0%9E%D0%97%D0%9A%D0%9B%D0%90%D0%94%20%D0%9A%D0%9E%D0%9B%D0%95%D0%94%D0%96.xls">01.06-05.06.20
                                                        РОЗКЛАД КОЛЕДЖ</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9C%D0%95%D0%A2%D0%9E%D0%94%D0%98%D0%A7%D0%9A%D0%90%20%D0%A1%D0%9E%D0%A6%D0%86%D0%9E%D0%9B%D0%9E%D0%93%D0%86%D0%AF.doc">МЕТОДИЧКА
                                                    СОЦІОЛОГІЯ</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%BA%D0%B0%20%D0%94%D0%95%D0%9A%20%D0%95%D0%9E%D0%90%D0%B7-51%202018.doc">Методичка
                                                    ДЕК ЕОАз-51 2018</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%BA%D0%B0%20%D0%94%D0%95%D0%9A%20%D0%97%D0%9B%D0%B751.doc">Методичка
                                                    ДЕК ЗЛз51</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%BA%D0%B0%20%D0%94%D0%95%D0%9A%20%D0%9C%D0%9E%D0%B7-51.doc">Методичка
                                                    ДЕК МОз-51</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%BA%D0%B0%20%D0%94%D0%95%D0%9A%20%D0%AE%D0%9F%D0%B7-51.doc">Методичка
                                                    ДЕК ЮПз-51</a></li>
                                                <li><img src={word} alt="A Microsoft Word file" /> <a
                                                    href="https://pib.edu.ua/media/schedule/%D0%9E%D0%9F%D0%9B%D0%90%D0%A2%D0%90%20%D0%9D%D0%90%D0%92%D0%A7%D0%90%D0%9D%D0%9D%D0%AF.doc">ОПЛАТА
                                                    НАВЧАННЯ</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <div id={isFrontPage ? 'front_header_wrapper' : 'other_header_wrapper'}>
                    <div id="header_logo">
                        <a className="link" href="https://pib.edu.ua/" title="На головну">
                            <img className="img_float_left" src={Logo} alt="ПІБ МНТУ" /> <br />
                            <div className="title">Полтавський інститут Бізнесу</div>
                            <div className="title_sub">Міжнародний науково-технічний університет імені академіка Юрія Бугая</div>
                        </a>
                    </div>
                    <div id="header_contact">

                        <a className="header_contact_mail"
                           href="mailto:info%7CThatsShould+nt.BeHere%7C@%7CThatsShould+nt.BeHere%7Cpib.edu.ua"
                           //onMouseOver="this.href=this.href.replace(/\|ThatsShould\+nt\.BeHere\|/g,&#39;&#39;);"
                           rel="#header_mail_box" title="Написати нам">Написати нам</a> <span
                        className="header_contact_phone_smaller">(0532)</span> <span
                        className="header_contact_phone">50-81-05</span>
                    </div>
                    <div className="icemegamenu" id="menu_header">
                        <ul id="icemegamenu">
                            <li id="iceMenu_101" className="iceMenuLiLevel_1 parent"><a href="https://pib.edu.ua/"
                                                                                        className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">Головна</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_179" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_137" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/home/news" className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Новини</span></a></li>
                                                <li id="iceMenu_138" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/home/events"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Розклад подій</span></a>
                                                </li>
                                                <li id="iceMenu_139" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/home/reviews"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Відгуки</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="iceMenu_102" className="iceMenuLiLevel_1 parent"><a href="https://pib.edu.ua/pib"
                                                                                        className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">ПІБ МНТУ</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_180" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_140" className="iceMenuLiLevel_2 parent"><a
                                                    href="https://pib.edu.ua/pib" className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Напрями та спеціалізації</span></a>
                                                    <ul className="icesubMenu sub_level_2" style={{width:'280px'}}>
                                                        <li>
                                                            <div style={{float:'left',width:'280px'}} className="iceCols">
                                                                <ul>
                                                                    <li id="iceMenu_185" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-law"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Право</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_224" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-psychology"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Психологія</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_226" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-petroleum-engineering-and-technology"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_191" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-it"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_223" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-radio-electronic"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Телекомунікації та радіотехніка</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_225" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-public-management-and-administration"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Публічне управління та адміністрування</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_187" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-health"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Фізична терапія, ерготерапія</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_188" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-finance"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_192" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-accountancy"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Облік і оподаткування</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_201" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-management"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Менеджмент</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_190" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/pib/courses/course-ecology"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Екологія</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="iceMenu_147" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/pib/military"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Військова кафедра</span></a>
                                                </li>
                                                <li id="iceMenu_148" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/pib/about" className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Про ПІБ МНТУ</span></a>
                                                </li>
                                                <li id="iceMenu_149" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/pib/benefits"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Чому ПІБ МНТУ</span></a>
                                                </li>
                                                <li id="iceMenu_151" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/pib/license"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Ліцензія та сертифікати</span></a>
                                                </li>
                                                <li id="iceMenu_193" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="iceMenu_103" className="iceMenuLiLevel_1 parent"><a
                                href="https://pib.edu.ua/entrant" className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">Абітурієнту</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_181" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_152" className="iceMenuLiLevel_2 parent"><a
                                                    href="https://pib.edu.ua/entrant/entrance"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Вступ до ПІБ МНТУ</span></a>
                                                    <ul className="icesubMenu sub_level_2" style={{width:'280px'}}>
                                                        <li>
                                                            <div style={{float:'left',width:'280px'}} className="iceCols">
                                                                <ul>
                                                                    <li id="iceMenu_155" className="iceMenuLiLevel_3"><a
                                                                        href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Умови прийому МОН</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_183" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B9%D0%BE%D0%BC%D1%83%20%D0%9F%D0%86%D0%91%20%D0%9C%D0%9D%D0%A2%D0%A3.pdf?v1"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Правила прийому ПІБ МНТУ</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_233" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/dod3.pdf?v1"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Перелік конкурсних предметів ПІБ 2020</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_236" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/dod4.pdf"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Перелік документiв для вступу ПІБ 2020</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="iceMenu_156" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/entrant/faq"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Часто запитують</span></a>
                                                </li>
                                                <li id="iceMenu_175" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/entrant/list"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Рейтинговий список вступників</span></a>
                                                </li>
                                                <li id="iceMenu_176" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/entrant/apply"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Подати заявку на вступ</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="iceMenu_146" className="iceMenuLiLevel_1 parent"><a
                                href="https://pib.edu.ua/business-college" className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">Бізнес-коледж</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_162" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_218" className="iceMenuLiLevel_2 parent"><a
                                                    href="https://pib.edu.ua/business-college"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Спеціальності</span></a>
                                                    <ul className="icesubMenu sub_level_2" style={{width:'280px'}}>
                                                        <li>
                                                            <div style={{float:'left',width:'280px'}} className="iceCols">
                                                                <ul>
                                                                    <li id="iceMenu_202" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-physical-education-and-sport"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Фізична культура і спорт</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_227" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-law"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Право</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_228" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-accountancy"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Облік і оподаткування</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_229" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-finance"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_230" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-management"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Менеджмент</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_231" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-it"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_232" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/business-college/courses/course-college-petroleum-engineering-and-technology"
                                                                        className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="iceMenu_173" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_220" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/business-college"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Про коледж</span></a>
                                                </li>
                                                <li id="iceMenu_221" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_219" className="iceMenuLiLevel_2 parent"><a
                                                    href="https://pib.edu.ua/business-college/entrance"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Вступ до коледжу</span></a>
                                                    <ul className="icesubMenu sub_level_2" style={{width:'280px'}}>
                                                        <li>
                                                            <div style={{float:'left',width:'280px'}} className="iceCols">
                                                                <ul>
                                                                    <li id="iceMenu_234" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/dod3pbk.pdf?v2"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Перелік конкурсних предметів ПБК 2020</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_238" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/dod4.pdf"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Перелік документiв для вступу ПБК 2020</span></a>
                                                                    </li>
                                                                    <li id="iceMenu_235" className="iceMenuLiLevel_3"><a
                                                                        href="https://pib.edu.ua/media/docs/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B9%D0%BE%D0%BC%D1%83%20%D0%9F%D0%91%D0%9A%20%D0%9C%D0%9D%D0%A2%D0%A3.pdf?v1"
                                                                        target="_blank" className=" iceMenuTitle"><span
                                                                        className="icemega_title icemega_nosubtitle">Правила прийому ПБК МНТУ</span></a>
                                                                    </li>
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
                            <li id="iceMenu_104" className="iceMenuLiLevel_1 parent"><a
                                href="https://pib.edu.ua/sitemap#" className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">Інше</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_182" className="iceMenuLiLevel_2"><a
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle"> </span></a></li>
                                                <li id="iceMenu_174" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/other/schedule"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Розклад занять</span></a>
                                                </li>
                                                <li id="iceMenu_158" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/other/juridical-help"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Юридична клініка</span></a>
                                                </li>
                                                <li id="iceMenu_157" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/other/gallery"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Фотоархів</span></a>
                                                </li>
                                                <li id="iceMenu_160" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/other/self-governance"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Студентське самоврядування</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="iceMenu_106" className="iceMenuLiLevel_1 parent"><a
                                href="https://pib.edu.ua/contact" className=" iceMenuTitle"><span
                                className="icemega_title icemega_nosubtitle">Контакти</span></a>
                                <ul className="icesubMenu sub_level_1" style={{width:'280px'}}>
                                    <li>
                                        <div style={{float:'left',width:'280px'}} className="iceCols">
                                            <ul>
                                                <li id="iceMenu_207" className="iceMenuLiLevel_2"><a
                                                    href="https://pib.edu.ua/contact/email"
                                                    className=" iceMenuTitle"><span
                                                    className="icemega_title icemega_nosubtitle">Написати email ПІБ МНТУ</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>



                    {isFrontPage ?
                        <div id="front_header_teaser">
                            <div id="icetabs92" className="ice-tabs-black ice-right-sl-black clearfix"
                                 style={{height:'370px', width:'auto'}}>
                                <div className="ice-navigator-wrapper">

                                    <div className="ice-navigator-outer" style={{width: '322px', height: '296px'}}>
                                        <ul className="ice-navigator" style={{top: '0px'}}>
                                            <li style={{width:'322px', height:'74px'}} className="">
                                                <div>
                                                    <img
                                                        src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/vstup.jpg"
                                                        title="Вступ 2020" alt="Вступ 2020" /><h4
                                                    className="ice-title singleline">Вступ 2020</h4>
                                                </div>
                                            </li>
                                            <li style={{width:'322px', height:'74px'}} className="">
                                                <div>
                                                    <img
                                                        src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/business-college.jpg"
                                                        title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" /><h4
                                                    className="ice-title singleline">Полтавський бізнес-коледж</h4>
                                                </div>
                                            </li>
                                            <li style={{width:'322px', height:'74px'}} className="active">
                                                <div>
                                                    <img
                                                        src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/spec-management-sob.jpg"
                                                        title="Менеджмент безпеки підприємницької діяльності"
                                                        alt="Менеджмент безпеки підприємницької діяльності" /><h4
                                                    className="ice-title doubleline">Менеджмент безпеки підприємницької
                                                    діяльності</h4>
                                                </div>
                                            </li>
                                            <li style={{width:'322px', height:'74px'}} className="">
                                                <div>
                                                    <img
                                                        src="https://pib.edu.ua/images/icethumbs/88x50/90/images/teasers/military.jpg"
                                                        title="Військова кафедра" alt="Військова кафедра" /><h4
                                                    className="ice-title singleline">Військова кафедра</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="ice-main-wapper">
                                    <div className="ice-main-item item1" style={{display: 'block', top: '-354px', height: '354px'}}>
                                        <div className="ice-description">
                                            <a className="ice-readmore" target="_parent" href="/9-home/teaser/74-i"
                                               title="Вступ 2020">
                                                <img
                                                    src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/vstup.jpg"
                                                    title="Вступ 2020" alt="Вступ 2020" /></a>
                                            <a className="ice-description-inside block center" target="_parent"
                                               href="/9-home/teaser/74-i">
                                                <h3 className="ice-title dashed gold">
                                                    Вступ 2020 </h3>
                                                <p>Вступ 2020</p>
                                                <span className="ice-readmore">
Дізнатися&nbsp;більше</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ice-main-item item2" style={{top: '-354px', height: '354px', display: 'block'}}>
                                        <div className="ice-description">
                                            <a className="ice-readmore" target="_parent"
                                               href="/9-home/teaser/33-business-college" title="Полтавський бізнес-коледж">
                                                <img
                                                    src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/business-college.jpg"
                                                    title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" /> </a>
                                            <a className="ice-description-inside block center" target="_parent"
                                               href="/9-home/teaser/33-business-college">
                                                <h3 className="ice-title dashed gold">
                                                    Полтавський бізнес-коледж </h3>
                                                <p>Запрошуємо на навчання випускників 9-х, 11-х класів до бізнес-коледжу із
                                                    зарахування на III курс ПІБ МНТУ після закінчення
                                                </p>
                                                <span className="ice-readmore">
Дізнатися&nbsp;більше</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ice-main-item item3" style={{top: '0px', height: '354px', display: 'block'}}>
                                        <div className="ice-description">
                                            <a className="ice-readmore" target="_parent"
                                               href="/9-home/teaser/32-spec-management"
                                               title="Менеджмент безпеки підприємницької діяльності">
                                                <img
                                                    src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/spec-management-sob.jpg"
                                                    title="Менеджмент безпеки підприємницької діяльності"
                                                    alt="Менеджмент безпеки підприємницької діяльності" /> </a>
                                            <a className="ice-description-inside block center" target="_parent"
                                               href="/9-home/teaser/32-spec-management">
                                                <h3 className="ice-title dashed gold">
                                                    Менеджмент безпеки підприємницької діяльності </h3>
                                                <p>Унікальна спеціалізація для тих, кто дбає про безпеку</p>
                                                <span className="ice-readmore">
Дізнатися&nbsp;більше</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ice-main-item item4" style={{top: '-354px', height: '354px', display: 'block'}}>
                                        <div className="ice-description">
                                            <a className="ice-readmore" target="_parent" href="/9-home/teaser/35-military"
                                               title="Військова кафедра">
                                                <img
                                                    src="https://pib.edu.ua/images/icethumbs/615x353/90/images/teasers/military.jpg"
                                                    title="Військова кафедра" alt="Військова кафедра" /> </a>
                                            <a className="ice-description-inside block center" target="_parent"
                                               href="/9-home/teaser/35-military">
                                                <h3 className="ice-title dashed gold">
                                                    Військова кафедра </h3>
                                                <p>Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової
                                                    підготовки Військового інституту телекомунікацій та інформатизації із
                                                    присвоєнням військового звання <span className="bold">молодший лейтенант запасу</span> після
                                                    закінчення.</p>
                                                <span className="ice-readmore">
Дізнатися&nbsp;більше</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}

                    <div id="header_pseudo_search_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
                        <div className="arrow"></div>
                        <div className="box">
                        </div>
                    </div>

                    <div id="header_mail_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
                        <div className="arrow"></div>
                        <div className="box">
                            There is no form with this name or may be the form is unpublished, Please check the form and
                            the url and the form management.
                        </div>
                    </div>

                </div>
                <div id="front_header_maintop">
                </div>
            </div>

        </Fragment>
    )
};

export default Header;