import { WithSidebar } from 'components/WithSidebar'
import Courses from 'components/Courses'
// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - ПІБ МНТУ"

import React from 'react'
import ReadyBannerFullSize from 'components/ReadyBannerFullSize';

export default () => {
  return (
    <WithSidebar shouldShowSidebar={false}>
      <div id="page-header">
        <h1 className="text">
          ПІБ МНТУ </h1>
      </div>
      <ul id="pib-buttons-top">
        <li className="item1 float-left rlt">
          <a href="/pib/about" className="pib-about unline block">
            <span className="title">Про ПІБ МНТУ</span>
          </a>
          <ul className="abs">
            <li>
              <a href="/pib/about" className="block unline">
                <span className="title gold ">Про ВНЗ</span><br />
                <span className="desc">Дізнатися більше про ПІБ МНТУ</span>
              </a>
            </li>
            <li>
              <a href="/pib/about#history" className="block unline">
                <span className="title gold ">Історія ПІБ МНТУ</span><br />
                <span className="desc">Як був заносваний ПІБ МНТУ</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="item2 float-left">
          <ul>
            <li className="item2-1 button-overlay">
              <a href="/pib/benefits" className="block unline">
                <span className="title">Чому ПІБ МНТУ</span><br />
                <span className="desc">Дізнайтеся про наші ключові переваги</span>
              </a>
            </li>
            <li className="item2-2 button-overlay">
              <a href="/pib/public-info" className="block unline">
                <span className="title">Публічна інформація</span><br />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="clear-both" />
      <div className="other-wrapper">
        <a id="courses" /><h1 className="pib highlight center orange uppercase">Спеціальності</h1>
        <div className="pib-courses-wrapper">
          <div className="pib-faculty">
            <h2 className="float-left gold unbold noise-bg">Факультет соціально-технічних наук та управління</h2>
          </div>
          <div className="clear-both" />
          <Courses />
        </div>
      </div>
      <ul id="pib-buttons-bottom">
        <li className="item1 float-left">
          <a href="/business-college/about" className="unline block">
            <span className="title">Полтавський бізнес-коледж</span>
            <span className="desc block">ПІБ МНТУ на базі факультету військової підготовки Військового інституту телекомунікацій та інформатизації Національного</span>
          </a>
        </li>
        <li className="item2 float-left">
          <a href="/entrant/military" className="unline block">
            <span className="title">Військова Кафедра</span>
            <span className="desc block">Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової підготовки Військового інституту йськової йськової </span>
          </a>
        </li>
      </ul>
      <div className="clear-both" />

      <ReadyBannerFullSize />
    </WithSidebar>
  )
}
