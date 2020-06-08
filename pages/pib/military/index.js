import React, {Fragment} from 'react';
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/Layout/Sidebar/Sidebar";
import Link from "next/link";

import Squad from '../../../assets/images/military/military.jpg';
import Loza from '../../../assets/images/military/military_loza.jpg';


const Military = () => {
    return (
        <Fragment>
            <Layout isFront={false} isSidebar={true}>
                <Sidebar>
                    <li className="item-180">
                        <span className="separator"> </span>
                    </li>
                    <li className="item-140 alias-parent-active parent">
                        <Link href={`/pib`}>
                            <a>Напрями та спеціалізації</a>
                        </Link>
                    </li>
                    <li className="item-147 current active">
                        <Link href={`/pib/military`}>
                            <a>Військова кафедра</a>
                        </Link>
                    </li>
                    <li className="item-148">
                        <Link href={`/pib/about`}>
                            <a>Про ПІБ МНТУ</a>
                        </Link>
                    </li>
                    <li className="item-149">
                        <Link href={`/pib/benefits`}>
                            <a>Чому ПІБ МНТУ</a>
                        </Link>
                    </li>
                    <li className="item-151">
                        <Link href={`/pib/license`}>
                            <a>Ліцензія та сертифікати</a>
                        </Link>
                    </li>
                    <li className="item-193">
                        <span className="separator"> </span>
                    </li>
                </Sidebar>
                <div id="other_content" className="menu-other">
                    <div className="item-page">
                        <div id="page-header">
                            <h1 className="text">
                                Військова кафедра
                            </h1>
                            <ul className="actions">
                                <li className="edit-icon">
                                    <span className="hasTip" title="">
                                        <img src="/media/system/images/checked_out.png" alt="" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <a className="thumbnail" href={Squad} target="_blank">
                            <img src={Squad} width="200px" className="thumb float-left border first" height="150" />
                        </a>
                        <p style={{paddingTop:'12px'}}>Для студентів денної форми навчання ПІБ МНТУ на базі факультету
                            військової підготовки <a href="http://viti.kpi.ua/" target="_blank" className="external">Військового
                                інституту телекомунікацій та інформатизації</a> Національного технічного університету
                            України «Київський політехнічний інститут» організовано навчання за програмою підготовки
                            офіцерів запасу.</p>
                        <p className="clear-both">Навчання триває <span className="bold">два роки</span>.</p>
                        <p>Після закінчення повного курсу військової підготовки наказом Міністра оборони України
                            випускникам присвоюється військове звання <span
                                className="bold">молодший лейтенант запасу</span>.</p>
                        <div className="highlight military">
                            <h3>Студентам до початку конкурсного відбору необхідно:</h3>
                            <ul className="list-dots">
                                <li>подати заяву на ім’я декана факультету (директора інституту) про бажання проходити
                                    військову підготовку;
                                </li>
                                <li>до заяви додати копію паспорта громадянина України ( перша сторінка), копію
                                    ідентифікаційного коду, копію приписного свідотства з відміткою про придатність до
                                    військової служби;
                                </li>
                                <li>пройти військово-лікарську комісію за місцем перебування на військовому обліку.</li>
                            </ul>
                            <p>Також рекомендовано ознайомитись з <a href="http://kpi.ua/vp" target="_blank"
                                                                     className="external gold unline">пам’яткою студенту
                                військової підготовки</a></p>
                        </div>
                        <div className="thumb border float-right" style={{width:'250px'}}>
                            <a className="thumbnail" href={Loza} target="_blank">
                                <img src={Loza} width="250px" className="thumb" height="187" />
                            </a>
                            <span>Голова Факультету військової підготовки<br />
                            полковник
                                <strong> Лоза Олександр Михайлович</strong>
                                <span />
                            </span>
                        </div>
                        <p>ВІТІ НТУУ "КПІ" є структурним підрозділом Національного технічного університету України "КПІ"
                            та здійснює набір на підготовку офіцерських кадрів за освітньо-кваліфікаційним рівнем <span
                                className="bold">"бакалавр"</span>, <span className="bold">"спеціаліст"</span> та <span
                                className="bold">"магістр"</span>.</p>
                        <p><span className="bold">Факультет очолює:</span> полковник Лоза Олександр Михайлович<br />
                            <span className="bold">Адреса:</span> вул. Московська, 45/1 (кафедри 41, 42, 43), вул.
                            Верхньоключова, 4 (кафедра 44, 45, 46,47, 48)<br />
                            <span className="bold">Телефон:</span> 406-83-31 (черговий факультету)<br />
                            <span className="bold">Офіційний сайт:</span> <a href="http://fvp.kpi.ua/" target="_blank"
                                                                             className="external gold unline">www.fvp.kpi.ua</a>
                        </p>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Military;
