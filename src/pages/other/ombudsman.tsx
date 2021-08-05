// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Студентське самоврядування"

import React from 'react';
import { WithSidebar } from 'components/WithSidebar';
import { PersonCards } from 'components/other/PersonCards';

const PERSONS = [
  {
    title: 'Студентський омбудсмен',
    name: 'Шейко Владислав',
  },
];

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Офіс студентського омбудсмена
        </h1>
      </div>

      <h2>Поточный склад</h2>

      <PersonCards persons={PERSONS} />

      <br />

      <p>Ми обожнюємо наших студентів і готові зробити все, щоб роки в МНТУ запам’яталися як один з найкращих періодів їхнього життя.</p>
      <p>У нас працює офіс студентського омбудсмена, куди кожен, хто навчається в МНТУ, може звернутися по допомогу. Конфлікт з викладачем, проблеми в гуртожитку, потрібна порада в навчанні — омбудсмен розгляне будь-яку ситуацію, де законні права чи свободи студентів були порушені.</p>

      <br />
      <h2 className="orange">Хто такий студентський омбудсмен?</h2>
      <br />

      <p>Студентський омбудсмен – це правозахисник основних свобод та інтересів здобувачів освіти, що навчаються в МНТУ, незалежно від форми навчання та членства в різних громадських організаціях. Студентський омбудсмен здійснює свою діяльність незалежно від інших посадових осіб, органів і структурних підрозділів Університету. Структурні підрозділи університету зобов’язані допомагати студентському омбудсмену в його діяльності.</p>

      <br />
      <h2 className="orange">Коли і в яких випадках звертатися до студентського омбудсмена?</h2>
      <br />

      <p>Студентський омбудсмен розглядає скарги (звернення), якщо ваші законні права та інтереси були порушені в освітньому процесі, при забезпеченні умов проживання в гуртожитку, при взаємодії з представниками керівництва Університету, його адміністрації та інших посадових осіб. За фактом порушення ваших прав ви можете звернутись до студентського омбудсмена із заявою, або отримати консультацію за розкладом роботи студентського омбудсмена.</p>

      <br />
      <h2 className="orange">Що може студентський омбудсмен?</h2>
      <br />

      <ul className="list-dots">
        <li>здійснювати заходи щодо узагальнення, узгодження, формування та безперешкодної реалізації прав і свобод студентів Університету;</li>
        <li>здійснювати нагляд за забезпеченням гендерної та расової рівності прав і свобод студентів;</li>
        <li>сприяти реалізації громадських програм і проектів соціального спрямування з метою забезпечення захисту прав, свобод і законних інтересів студентів;</li>
        <li>вносити пропозиції керівництву Університету щодо вдосконалення роботи підрозділів Університету в області дотримання, реалізації прав, свобод і законних інтересів студентів;</li>
        <li>виносити на порядок денний засідань вченої ради Університету, засідань органів студентського самоврядування питання, які входять до його компетенції;</li>
        <li>розглядати усні і письмові звернення студентів з питань дотримання їх прав, свобод і законних інтересів під час навчання в Університеті, проживання в студентських гуртожитках Університету;</li>
        <li>проводити консультації студентів з питань, які належать до його компетенції; представляти інтереси студентів з питань академічної доброчесності у відповідних органах Університету;</li>
        <li>виносити на обговорення органам управління, керівникам структурних підрозділів Університету, іншим посадовим особам Університету питання, які належать до його компетенції; розробляти пропозиції щодо вдосконалення університетської нормативної бази і вносити їх на розгляд вченої ради Університету.</li>
      </ul>

      <br />
      <h2 className="orange">Хто може звернутись до студентського омбудсмена? </h2>
      <br />

      <ul className="list-dots">
        <li>студенти, незалежно від форми навчання;</li>
        <li>студенти-громадян інших держав;</li>
        <li>студенти, які навчаються за програмами міжнародної академічної мобільності в закладах освіти інших держав;</li>
        <li>аспіранти Університету та ін.</li>
      </ul>

      <br />
      <br />

      <p>
        <a href="/media/docs/other/ombudsman/Витяг-з-положення-положення-про-уповноваженного-з-прав-студентів-ПІМ-МНТУ.pdf" className="gold external" target="_blank">Положення про уповноваженого з прав студентів</a>
      </p>

      <br />
      <br />
    </WithSidebar>
  );
};
