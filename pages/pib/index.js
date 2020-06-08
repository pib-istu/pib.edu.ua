import React, {Fragment} from 'react';
import Layout from "../../components/Layout/Layout";
import Link from "next/link";


const PIB = () => {
    return (
        <Fragment>
            <Layout isFront={false} isSidebar={false}>
                <Fragment>


                    <div id="other_content">
                        <div className="item-page">
                            <div id="page-header">
                                <h1 className="text">
                                    ПІБ МНТУ </h1>
                            </div>
                            <ul id="pib-buttons-top">
                                <li className="item1 float-left rlt">
                                    <Link href={`/pib/about`}>
                                        <a className="pib-about unline block">
                                            <span className="title">Про ПІБ МНТУ</span>
                                        </a>
                                    </Link>
                                    <ul className="abs">
                                        <li>
                                            <Link href={`/pib/about`}>
                                                <a className="block unline">
                                                    <span className="title gold ">Про ВНЗ</span><br />
                                                    <span className="desc">Дізнатися більше про ПІБ МНТУ</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/pib/about#history`}>
                                                <a className="block unline">
                                                    <span className="title gold ">Історія ПІБ МНТУ</span><br />
                                                    <span className="desc">Як був заносваний ПІБ МНТУ</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item2 float-left">
                                    <ul>
                                        <li className="item2-1 button-overlay">
                                            <Link href={`/pib/benefits`}>
                                                <a className="block unline">
                                                    <span className="title">Чому ПІБ МНТУ</span><br />
                                                    <span
                                                        className="desc">Дізнайтеся про наші ключові переваги</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item2-2 button-overlay">
                                            <Link href={`/pib/license`}>
                                                <a className="block unline">
                                                    <span className="title">Ліцензія та сертификати</span><br />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="clear-both" />
                            <div className="other-wrapper">
                                <a name="courses" id="courses" /><h1
                                className="pib highlight center orange uppercase">Напрями та
                                спеціалізації:</h1>
                                <div className="pib-courses-wrapper">
                                    <div className="pib-faculty">
                                        <h2 className="float-left gold unbold noise-bg">Факультет
                                            соціально-технічних наук та управління</h2>
                                    </div>
                                    <div className="clear-both" />
                                    <ul className="pib-courses">
                                        <li className="item1">
                                            <Link href={`/pib/courses/course-law`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">081 Право</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Юрист - це одна з найбільш поширених, необхідних і високооплачуваних професій у цивілізованому суспільстві. Кожному потрібен свій юрист, як і свій лікар.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="item3">
                                            <Link href={`/pib/courses/course-it`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">121 Інженерія програмного забезпечення</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Інженерія програмного забезпечення – спеціальність, спрямована на розробку програмних систем, які працюють надійно та ефективно, вартість розробки та супроводу яких є доступною, і які задовольняють вимогам, висунутим до них замовниками. Сьогодні фахівці з інженерії програмного забезпечення є найбільш затребуваними на ринку праці серед інших фахівців з інформаційних технологій, вони приймають участь у розробці вітчизняних і міжнародних програмних проектів, і мають достойну оплату своєї праці. Попит на фахівців з інженерії програмного забезпечення у майбутньому буде тільки зростати!</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item10">
                                            <Link href={`/pib/courses/course-radio-electronic`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">172 Телекомунікації та радіотехніка</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Розвиток телекомунікаційних і радіотехнічних технологій призводить до того, що в розвинених країнах світу телекомунікації входять у список найпрестижніших навчальних напрямів. Спеціалістами щороку створюються все більш сучасні і досконалі прилади, які роблять зв’язок якіснішим, доступнішим і полегшують життя: Internet, 3G, LTE, 5G, супутниковий зв’язок – зліт нових і розвиток досконаліших технологій неможливий без великої кількості кваліфікованих інженерів з телекомунікації, попит на яких щороку зростає.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item4">
                                            <Link href={`/pib/courses/course-health`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">227 Фізична терапія, ерготерапія</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Фізична терапія, ерготерапія (Фізична реабілітація) покращує якість лікування, прискорює процес відновлення функцій органів та систем, повертає працездатність, допомагає хворому розвинути навички самообслуговування, у випадках інвалідності пристосуватися до максимально активного життя у нових умовах, що відбулися внаслідок хвороби чи травми, а також до більш повної інтеграції в усі сфери його діяльності.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item5">
                                            <Link href={`/pib/courses/course-finance`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">072 Фінанси, банківська справа та страхування</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Галузь діяльності фінансиста - планування та управління фінансовими потоками. Головне завдання фінансиста - планувати, куди вкласти гроші; кому, в кого і скільки позичити; які акції придбати і як вигідно продати свої; вміти раціонально розпоряджатися коштами, знаходити шляхи зменшення витрат і збільшення прибутку, ефективно управляти прибутком і рентабельністю, здійснювати фінансовий контроль; обирати ефективні форми розрахунків та умови платежів; орієнтуватися в оподаткуванні, вміти захищати заощадження від інфляції.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item6">
                                            <Link href={`/pib/courses/course-accountancy`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">071 Облік і оподаткування</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>В сучасних умовах облік і аудит - інструменти управління, підвищення ефективності господарювання, оскільки забезпечують власників і управлінців, фахівців інформацією про економічні процеси і явища, ресурси та ефективність їх використання у всіх секторах економіки.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item7">
                                            <Link href={`/pib/courses/course-management`}>
                                                <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">073 Менеджмент</span>
                                                </span>
                                                    <span className="course-desc float-left block">
                                                    <p>Підготовка студентів за спеціальністю «Менеджмент» здійснюється для виконання ними в майбутньому організаційно-управлінської, комерційної, аналітичної та науково-дослідної діяльності в галузі менеджменту, маркетингу, соціальної активізації праці в умовах конкуренції та ринкових відносин в підприємствах різних форм господарювання</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="item10">
                                            <Link href={`/pib/courses/course-ecology`}>
                                            <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">101 Екологія</span>
                                                </span>
                                                <span className="course-desc float-left block">
                                                    <p>Екологічні проблеми, серед яких охорона природи і здоров'я людей, постають одними з найсуттєвіших на сучасному етапі розвитку людського суспільства. Беручи до уваги стан екології та тенденції розвитку економіки України, можна констатувати зростаючу актуальність розв'язання цих проблем.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                            </a>
                                            </Link>
                                        </li>
                                        <li className="item10">
                                            <Link href={`/pib/courses/course-psychology`}>
                                            <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">053 Психологія</span>
                                                </span>
                                                <span className="course-desc float-left block">
                                                    <p>Психологія - одна з тих наук, які з повним правом можна назвати універсальними та вічними. Людська цивілізація стрімко рухається шляхом прогресу, винаходить нові механізми, робить глобальні відкриття, що змушують поглянути на світ та його структуру під абсолютно несподіваним кутом. Але навіть у сучасному світі найбільшою загадкою, альфою та омегою, початком та кінцем всього лишається людина.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                            </a>
                                            </Link>
                                        </li>
                                        <li className="item10">
                                            <Link href={`/pib/courses/course-public-management-and-administration`}>
                                            <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">281 Публічне управління та адміністрування</span>
                                                </span>
                                                <span className="course-desc float-left block">
                                                    <p>Це якісна управлінська освіта, яка є гарантом вашої особистої конкурентоспроможності як менеджера. Мистецтво управління, якого навчають на програмі ПУБЛІЧНЕ УПРАВЛІННЯ ТА АДМІНІСТРУВАННЯ, спирається на глибоке розуміння законів і практики сучасного бізнесу, маркетингу, тенденцій розвитку бізнес-адміністрування. Практично орієнтовані методики навчання, навички реального бізнес-консалтингу, інтенсивний тренінг у прийнятті рішень за допомогою комп’ютерних ділових ігор виробляють у студентів комплексне бачення бізнес-проблем та навички швидкого реагування на виклики нової реальності ведення бізнесу в Україні та за її межами.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                            </a>
                                            </Link>
                                        </li>
                                        <li className="item10">
                                            <Link href={`/pib/courses/course-petroleum-engineering-and-technology`}>
                                            <a className="block unline">
                                                <span className="course float-left block">
                                                    <span className="orange">185 Нафтогазова інженерія та технології</span>
                                                </span>
                                                <span className="course-desc float-left block">
                                                    <p>Жодна сировина не викликає стільки хвилювань та не приносить стільки прибутків, як нафта та газ, які є головними енергоносіями. Уміння використовувати ці ключові продукти та їх запаси, тримати в руках ниточки бізнесу у цих напрямках, визначає шлях до економічного процвітання та вибору політичної і економічної стратегії держави.</p>
                                                    <span className="gold underline arrow-gold">Дізнатися більше</span>
                                                </span>
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul id="pib-buttons-bottom">
                                <li className="item1 float-left">
                                    <Link href={`/pib/business-college`}>
                                    <a className="unline block">
                                        <span className="title">Полтавський бізнес-коледж</span>
                                        <span className="desc block">ПІБ МНТУ на базі факультету військової підготовки Військового інституту телекомунікацій та інформатизації Національного</span>
                                    </a>
                                    </Link>
                                </li>
                                <li className="item2 float-left">
                                    <Link href={`/pib/military`}>
                                    <a className="unline block">
                                        <span className="title">Військова Кафедра</span>
                                        <span className="desc block">Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової підготовки Військового інституту йськової йськової </span>
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="clear-both" />
                            <div className="other-wrapper">
                                <div id="ready-apply" className="highlight">
                                    <div className="header bold float-left">
                                        Вже вирішив?<br />
                                        Подай заявку на вступ в режимі онлайн!
                                    </div>
                                    <div className="apply float-left">
                                        <a href="/entrant/apply" className="button-apply block indent">Подати
                                            заявку на вступ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Layout>
        </Fragment>
    );
};

export default PIB;
