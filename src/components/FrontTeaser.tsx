import React, { FC, useEffect } from 'react'

declare var $: any
declare var IceSlideShow: any
declare var Fx: any

interface NavItemProps {
  imageSrc: string
  heading: string
  shouldUseSingleLine?: boolean
}

const NavItem: FC<NavItemProps> = ({ imageSrc, heading, shouldUseSingleLine = true }) => {
  return (
    <li style={{width: '322px', height: '74px'}}>
      <div>
        <img width="88" height="50" style={{ objectFit: 'cover' }} src={imageSrc} alt="" />
        <h4 className={`ice-title ${shouldUseSingleLine ? 'singleline' : 'doubleline'}`}>{heading}</h4>
      </div>
    </li>
  )
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string
  heading: string
  imageSrc: string
  target?: string
}

const Item: FC<ItemProps> = ({ url, imageSrc, heading, target, children, ...props }) => {
  return (
    <div className="ice-main-item" {...props}>
      <div className="ice-description">
        <a
          className="ice-readmore"
          target={target}
          href={url}
          title={heading}
        >
          <img width="615" height="353" style={{ objectFit: 'cover' }} src={imageSrc} alt="" />
        </a>
        <a className="ice-description-inside block center" target={target} href={url}>
          <h3 className="ice-title dashed gold">{heading}</h3>
          {children}
          <span className="ice-readmore">Дізнатися&nbsp;більше</span>
        </a>
      </div>
    </div>
  )
}

const TEASERS = [
  {
    heading: "Вступ 2023",
    url: "/images/hero/Вступ-2023.png",
    target: '_blank',
    imageSrc: "/images/hero/Вступ-2023.png",
    children: null,
  },
  // Вступ без ЗНО
  // <img src="images/hero/without-oir.jpg" border="0" alt="" />
  // <p>Можливість вступу без ЗНО для випускників середніх загальноосвітніх навчальних закладів</p>
  {
    heading: "Вступ без ЗНО",
    url: "/images/hero/ФПБК%20ВСТУП%20БЕЗ%20%20ЗНО.doc",
    target: '_blank',
    imageSrc: "/images/hero/1.jpg",
    children: <p>Перелік спеціальностей та умов за яких можливий вступ без ЗНО</p>,
  },
  {
    heading: "Полтавський бізнес-коледж",
    url: "/business-college/about",
    imageSrc: "/images/hero/business-college.jpg",
    children: <p>Запрошуємо на навчання випускників 9-х, 11-х класів до бізнес-коледжу із зарахування на III курс ПІБ МНТУ після закінчення</p>,
  },
  {
    heading: "Юридична клініка",
    url: "/other/juridical-help",
    imageSrc: "images/hero/juridical-help.jpg",
    children: <>
      <p>Потрібна юридична допомога, але ви не маєте змоги звернутися за платною допомогою?</p>
      <p>Скористайтеся послугами безкоштовної юридичної студентської клініки!</p>
    </>,
    shouldUseSingleLine: false,
  },

  // {
  //   heading: "Менеджмент безпеки підприємницької діяльності",
  //   url: "/9-home/teaser/32-spec-management",
  //   imageSrc: "/images/hero/spec-management-sob.jpg",
  //   children: <p>Унікальна спеціалізація для тих, кто дбає про безпеку</p>,
  //   shouldUseSingleLine: false,
  // },

  // Унікальна спеціалізація: юрист релігійної сфери
  // <img src="images/hero/spec-rel.jpg" border="0" alt="" />
  // <p>Унікальна спеціалізація для випускників духовних навчальних закладів та осіб, які бажають отримати вищу освіту</p>
  {
    heading: "Військова кафедра",
    url: "/entrant/military",
    imageSrc: "/images/hero/military.jpg",
    children: <p>Для студентів денної форми навчання ПІБ МНТУ на базі факультету військової підготовки Військового інституту телекомунікацій та інформатизації із присвоєнням військового звання <span className="bold">молодший лейтенант запасу</span> після закінчення.</p>,
  }
]

export default () => {
  useEffect(() => {
    setTimeout(() => {
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
    }, 2_000);
  }, [])

  return (
    <div id="front_header_teaser">
      <div id="icetabs92" className="ice-tabs-black ice-right-sl-black clearfix" style={{height: '370px', width: 'auto'}}>
        <div className="ice-navigator-wrapper">
          <div className="ice-navigator-outer" style={{width: '322px', height: '370px'}}>
            <ul className="ice-navigator">
              {TEASERS.map((t) => <NavItem {...t} />)}
            </ul>
          </div>
        </div>
        <div className="ice-main-wapper">
          {TEASERS.map((t, i) => <Item {...t} style={i === 0 ? {display: 'block'} : undefined} />)}
        </div>
      </div>
    </div>
  )
}
