import React, {Fragment} from 'react';
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/Layout/Sidebar/Sidebar";
import Link from "next/link";


const License = () => {
    return (
        <Fragment>
            <Layout isFront={false} isSidebar={true}>
                <Sidebar>
                    <li className="item-180"><span className="separator"> </span>
                    </li>
                    <li className="item-140 alias-parent-active parent">
                        <Link href={`/pib`}>
                            <a>Напрями та спеціалізації</a>
                        </Link>
                    </li>
                    <li className="item-147">
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
                    <li className="item-151 current active">
                        <Link href={`/pib/license`}>
                            <a>Ліцензія та сертифікати</a>
                        </Link>
                    </li>
                    <li className="item-193"><span className="separator"> </span>
                    </li>
                </Sidebar>
                <div id="other_content" className="menu-other">
                    <div className="item-page">
                        <div id="page-header">
                            <h1 className="text">
                                Ліцензія та сертифікати </h1>
                            <ul className="actions">
                                <li className="edit-icon">
                                    <span className="hasTip" title="">
                                        <img src="/media/system/images/checked_out.png" alt="" />
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div className="pib-license">
                            <p>ПІБ МНТУ є відокремленим структурним підрозділом МНТУ, який має IV рівень
                                акредитації.</p>
                            <p>Ознайомитись з відповідними документами, ліцензіями та сертифікатами, можливо на
                                офіційному сайті МНТУ:</p>
                            <br />
                                <br />
                                    <br />
                                        <div className="center">
                                            <span className="highlight">
                                            <a href="http://www.istu.edu.ua/abiturijentu.html" className="gold external unbold" target="_blank">На офіційний сайт МНТУ</a>
                                            </span>
                                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
);
};

export default License;
