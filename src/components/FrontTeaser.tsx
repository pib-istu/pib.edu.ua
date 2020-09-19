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

  return (
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
  )
}
