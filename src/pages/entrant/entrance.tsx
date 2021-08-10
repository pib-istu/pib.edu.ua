import { EntranceSection1 } from 'components/entrant/entrance/EntranceSection1';
import { EntranceSection2 } from 'components/entrant/entrance/EntranceSection2';
import { EntranceSection3 } from 'components/entrant/entrance/EntranceSection3';
import { WithSidebar } from 'components/WithSidebar';
// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Абітурієнту"

import React, { useEffect } from 'react'

declare var jQuery: any

export default () => {
  useEffect(() => {
    jQuery(document).ready(function () {
      jQuery('.divslide2').bind('click', function(this: any) {
        if (jQuery(this).hasClass('active')) {
          // remove the active class
          jQuery(this).removeClass('active')
        } else {
          // remove the active class from all elements with active class
          jQuery('.divslide2.active').removeClass('active')
          // add active class to clicked element
          jQuery(this).addClass('active');
        }
      });
    });

    jQuery(document).ready(function () {
      jQuery('.divslide3').bind('click', function(this: any) {
        if (jQuery(this).hasClass('active')) {
          // remove the active class
          jQuery(this).removeClass('active')
        } else {
          // add active class to clicked element
          jQuery(this).addClass('active');
        }
      });
    });

    jQuery('.divslide2').showHide({
      speed: 500,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });

    jQuery('.divslide3').showHide({
      speed: 300,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });
  }, [])

  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Вступ до ПІБ МНТУ </h1>
      </div>
      <div id="intro" className="entrance">
        <div className="illustration float-left" />
        <p>На даній сторінці ви зможете знайти детальну інформацію щодо вступу до ПІБ МНТУ, а саме: умови вступу, перелік документів, перелік предметів, з яких подаються сертифікати та іншу важливу для вас інформацію.</p>
      </div>
      <div className="list-steps clear-both">
        <span className="step float-left">1</span>
        <h2 className="orange float-left"> Будь-ласка, вкажіть випускником якого навчального закладу Ви є:</h2>
      </div>
      <ul className="entrance-type">
        <li className="item1">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item1"><b>Середніх загальноосвітніх навчальних закладів</b></a>
        </li>
        <li className="item3">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item3">Вищих навчальних закладів <b>І-ІІ рівня акредитації</b><br /> <span className="block">для продовження навчання за спорідненими спеціальностями</span></a>
        </li>
        <li className="item2">
          <a className="divslide2 block unline center" href="#" data-rel2="#entrance-item2">Вищих навчальних закладів <b>ІІІ-ІУ рівня акредитації</b></a>
        </li>
      </ul>

      <EntranceSection1 />
      <EntranceSection2 />
      <EntranceSection3 />
    </WithSidebar>
  )
}
