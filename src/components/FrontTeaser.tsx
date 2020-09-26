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

  // Unused or legacy teasers

  // Нова пропозиція – можливість вступу без ЗНО!
  // <p>Запрошуємо випускників середніх загальноосвітніх навчальних закладів 2008-2013 років на програму професійної підготовки,
  // яка не вимагає проходження зовнішнього незалежного оцінювання якості знань, тобто дозволяє здобути вищу освіту <span class="red"><b>без сертифікату ЗНО</b>!</span> </p>
  //   <br />
  //   <br />
  //   <br />
  //   <div class="center"><span class="highlight" style="padding:20px;"><a href="/entrant/apply-without-iee" class="gold unbold" style="padding:20px;">Подробиці</a></span></div>
  // </div>

  // Юридична клініка
  // <img src="images/teasers/juridical-help.jpg" border="0" alt="" />
  // <p>Потрібна юридична допомога, але ви не маєте змоги звернутися за платною допомогою?</p><p>Скористайтеся послугами безкоштовної юридичної студентської клініки!</p>

  // Унікальна спеціалізація: юрист релігійної сфери
  // <img src="images/teasers/spec-rel.jpg" border="0" alt="" />
  // <p>Унікальна спеціалізація для випускників духовних навчальних закладів та осіб, які бажають отримати вищу освіту</p>

  // Вступ без ЗНО
  // <img src="images/teasers/without-oir.jpg" border="0" alt="" />
  // <p>Можливість вступу без ЗНО для випускників середніх загальноосвітніх навчальних закладів</p>

  return (
    <div id="front_header_teaser">
      <div id="icetabs92" className="ice-tabs-black ice-right-sl-black clearfix" style={{height: '370px', width: 'auto'}}>
        <div className="ice-navigator-wrapper">
          <div className="ice-navigator-outer" style={{width: '322px', height: '370px'}}>
            <ul className="ice-navigator" style={{top: '0px'}}>
              <li style={{width: '322px', height: '74px'}}>
                <div>
                  <img width="88" height="50" style={{ objectFit: 'cover' }} src="/images/teasers/vstup.jpg" title="Вступ 2020" alt="Вступ 2020" />
                  <h4 className="ice-title singleline">Вступ 2020</h4>
                </div>
              </li>
              <li style={{width: '322px', height: '74px'}} className="active">
                <div>
                  <img width="88" height="50" style={{ objectFit: 'cover' }} src="/images/teasers/1.jpg" title="Вступ без ЗНО" alt="Вступ без ЗНО" />
                  <h4 className="ice-title singleline">Вступ без ЗНО</h4>
                </div>
              </li>
              <li style={{width: '322px', height: '74px'}}>
                <div>
                  <img width="88" height="50" style={{ objectFit: 'cover' }} src="/images/teasers/business-college.jpg" title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" />
                  <h4 className="ice-title singleline">Полтавський бізнес-коледж</h4>
                </div>
              </li>
              <li style={{width: '322px', height: '74px'}}>
                <div>
                  <img width="88" height="50" style={{ objectFit: 'cover' }} src="/images/teasers/spec-management-sob.jpg" title="Менеджмент безпеки підприємницької діяльності" alt="Менеджмент безпеки підприємницької діяльності" />
                  <h4 className="ice-title doubleline">Менеджмент безпеки підприємницької діяльності</h4>
                </div>
              </li>
              <li style={{width: '322px', height: '74px'}}>
                <div>
                  <img width="88" height="50" style={{ objectFit: 'cover' }} src="/images/teasers/military.jpg" title="Військова кафедра" alt="Військова кафедра" />
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
                <img width="615" height="353" style={{ objectFit: 'cover' }} src="/images/teasers/vstup.jpg" title="Вступ 2020" alt="Вступ 2020" /> </a>
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
              <a className="ice-readmore" target="_parent" href="/images/teasers/ФПБК%20ВСТУП%20БЕЗ%20%20ЗНО.doc" title="Вступ без ЗНО">
                <img width="615" height="353" style={{ objectFit: 'cover' }} src="/images/teasers/1.jpg" title="Вступ без ЗНО" alt="Вступ без ЗНО" /> </a>
              <a className="ice-description-inside block center" target="_parent" href="/images/teasers/ФПБК%20ВСТУП%20БЕЗ%20%20ЗНО.doc">
                <h3 className="ice-title dashed gold">
                  Вступ без ЗНО
                </h3>
                <p>Вступ без ЗНО</p>
                <span className="ice-readmore">
                  Дізнатися&nbsp;більше</span>
              </a>
            </div>
          </div>
          <div className="ice-main-item item3" style={{top: '-354px', height: '354px', display: 'block'}}>
            <div className="ice-description">
              <a className="ice-readmore" target="_parent" href="/9-home/teaser/33-business-college" title="Полтавський бізнес-коледж">
                <img width="615" height="353" style={{ objectFit: 'cover' }} src="/images/teasers/business-college.jpg" title="Полтавський бізнес-коледж" alt="Полтавський бізнес-коледж" /> </a>
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
                <img width="615" height="353" style={{ objectFit: 'cover' }} src="/images/teasers/spec-management-sob.jpg" title="Менеджмент безпеки підприємницької діяльності" alt="Менеджмент безпеки підприємницької діяльності" /> </a>
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
                <img width="615" height="353" style={{ objectFit: 'cover' }} src="/images/teasers/military.jpg" title="Військова кафедра" alt="Військова кафедра" /> </a>
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
  )
}
