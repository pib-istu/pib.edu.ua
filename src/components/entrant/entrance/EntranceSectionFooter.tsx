import React, { FC } from 'react'

export const EntranceSectionFooter: FC = () => {
  return (
    <>
      <li className="entrance-info">
        <div className="list-steps">
          <div className="step float-left">4</div>
          <h2 className="block orange float-left"> Додаткова інформація:</h2>
        </div>

        <div className="content">
          <ul>
            <li className="item1 float-left">
              <a href="/media/docs/entrant/entrance/Правила прийому ПІБ МНТУ 2021.pdf" className="gold external" target="_blank">Правила прийому ПІБ МНТУ</a><br />
              <a href="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" className="gold external" target="_blank">Умови прийому МОН 2015</a>
            </li>
            <li className="item2 button-overlay float-left">
              <a href="/entrant/faq" className="block unline">
                <span className="title">Часто запитують</span><br />
                <span className="desc">Відповіді на часті запитання</span>
              </a>
            </li>
            <li className="item3 button-overlay float-left">
              <a href="/pib/public-info" className="block unline">
                <span className="title">Публічна інформація</span>
              </a>
            </li>
            <li className="item4 button-overlay float-left">
              <a href="/contact" className="block unline">
                <span className="title">Є запитання?</span><br />
                <span className="desc">Зв’яжіться з нами</span>
              </a>
            </li>
          </ul>

          <p className="center clear-both">Найбільш активні студенти мають змогу отримати <span className="italic">пільги</span></p>
        </div>
      </li>

      <li className="entrance-apply">
        <a href="/entrant/apply" className="button-apply block indent">Подати заявку на вступ</a>
        <p className="center">або зателефонуйте до приймальної комісії за номером<br />
          <span className="orange bold">(0532) 50-81-05</span></p>
      </li>
    </>
  );
};
