import React, { CSSProperties, FC } from 'react'
import { Link, LinkProps, useLocation } from '@reach/router'

type NavLinkProps = LinkProps<{}> & React.RefAttributes<HTMLAnchorElement>

const COL_STYLE: CSSProperties = { width: '280px' }
// @todo Workarounds https://github.com/stylelint/stylelint/issues/4490
COL_STYLE.float = 'left'

const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  const isExternal = props.to.includes('//')

  if (isExternal) return (
    <a {...props} href={props.to}>{children}</a>
  )

  return (
    <Link
      getProps={({ isCurrent, isPartiallyCurrent }) => ({
        className: `${isPartiallyCurrent ? 'icemega_active active' : ''} ${isCurrent ? 'current' : ''} ${props.className ?? ''}`
      })}
      {...props}
    >
      {children}
    </Link>
  )
}

type NavItemProps = React.HTMLAttributes<HTMLLIElement> & {
  readonly match: string
  readonly shouldBeExact?: boolean
}

const NavItem: FC<NavItemProps> = ({ children, ...props }) => {
  const { match, shouldBeExact = false, className = '', ...rest } = props
  const location = useLocation()
  const hasMatch = shouldBeExact ? location.pathname === match : location.pathname.startsWith(match);

  return (
    <li
      {...rest}
      className={`${hasMatch ? 'active' : ''} ${className}`}
    >
      {children}
    </li>
  )
}

type NavItemLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  readonly id: string
  readonly className: string
  readonly to: string
  readonly linkClassName: string
  readonly spanClassName: string
  readonly target?: string
}

const NavItemLink: FC<NavItemLinkProps> = ({ children, ...props }) => {
  const {
    id,
    className,
    to,
    linkClassName,
    spanClassName,
    ...linkProps
  } = props

  return  (
    <NavItem match={to} id={id} className={className}>
      <NavLink {...linkProps} to={to} className={linkClassName}>
        <span className={spanClassName}>{children}</span>
      </NavLink>
    </NavItem>
  )
}

export default () => {
  return (
    <div className="icemegamenu" id="menu_header">
      <ul id="icemegamenu">
        <NavItem match="/" shouldBeExact={true} id="iceMenu_101" className="iceMenuLiLevel_1 parent">
          <NavLink to="/" className="iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Головна</span></NavLink>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <li id="iceMenu_179" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                  <NavItemLink id="iceMenu_137" className="iceMenuLiLevel_2" to="/home/news" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Новини</NavItemLink>
                  <NavItemLink id="iceMenu_138" className="iceMenuLiLevel_2" to="/home/events" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Розклад подій</NavItemLink>
                  <NavItemLink id="iceMenu_139" className="iceMenuLiLevel_2" to="/home/reviews" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Відгуки</NavItemLink>
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        <NavItem match="/pib" id="iceMenu_102" className="iceMenuLiLevel_1 parent">
          <NavLink to="/pib" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">ПІБ МНТУ</span></NavLink>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <li id="iceMenu_180" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                  <NavItemLink id="iceMenu_148" className="iceMenuLiLevel_2" to="/pib/about" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Про ПІБ МНТУ</NavItemLink>
                  <NavItemLink id="iceMenu_149" className="iceMenuLiLevel_2" to="/pib/benefits" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Чому ПІБ МНТУ</NavItemLink>
                  <NavItemLink id="iceMenu_151" className="iceMenuLiLevel_2" to="/pib/activity" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Наукоа діяльність</NavItemLink>
                  <NavItemLink id="iceMenu_151" className="iceMenuLiLevel_2" to="/pib/public-info" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Публічна інформація</NavItemLink>
                  <li id="iceMenu_193" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        <NavItem match='/entrant' id="iceMenu_103" className="iceMenuLiLevel_1 parent">
          <NavLink to="/entrant/courses" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Абітурієнту</span></NavLink>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <li id="iceMenu_181" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                  <NavItem match='/entrant/courses' id="iceMenu_140" className="iceMenuLiLevel_2 parent">
                    <NavLink to="/entrant/courses" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Спеціальності</span></NavLink>
                    <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                      <li>
                        <div style={COL_STYLE} className="iceCols">
                          <ul>
                            {/* <NavItemLink id="iceMenu_185" className="iceMenuLiLevel_3" to="/entrant/courses/course-law" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Право</NavItemLink> */}
                            <NavItemLink id="iceMenu_224" className="iceMenuLiLevel_3" to="/entrant/courses/course-psychology" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Психологія</NavItemLink>
                            {/* <NavItemLink id="iceMenu_226" className="iceMenuLiLevel_3" to="/entrant/courses/course-petroleum-engineering-and-technology" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</NavItemLink> */}
                            <NavItemLink id="iceMenu_191" className="iceMenuLiLevel_3" to="/entrant/courses/course-it" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</NavItemLink>
                            {/* <NavItemLink id="iceMenu_223" className="iceMenuLiLevel_3" to="/entrant/courses/course-radio-electronic" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Телекомунікації та радіотехніка</NavItemLink> */}
                            {/* <NavItemLink id="iceMenu_225" className="iceMenuLiLevel_3" to="/entrant/courses/course-public-management-and-administration" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Публічне управління та адміністрування</NavItemLink> */}
                            <NavItemLink id="iceMenu_187" className="iceMenuLiLevel_3" to="/entrant/courses/course-health" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Фізична терапія, ерготерапія</NavItemLink>
                            <NavItemLink id="iceMenu_188" className="iceMenuLiLevel_3" to="/entrant/courses/course-finance" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</NavItemLink>
                            <NavItemLink id="iceMenu_192" className="iceMenuLiLevel_3" to="/entrant/courses/course-accountancy" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Облік і оподаткування</NavItemLink>
                            <NavItemLink id="iceMenu_201" className="iceMenuLiLevel_3" to="/entrant/courses/course-management" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Менеджмент</NavItemLink>
                            {/* <NavItemLink id="iceMenu_190" className="iceMenuLiLevel_3" to="/entrant/courses/course-ecology" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Екологія</NavItemLink> */}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavItem>
                  <NavItemLink id="iceMenu_147" className="iceMenuLiLevel_2" to="/entrant/military" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Військова кафедра</NavItemLink>
                  <NavItem match='/entrant/entrance' id="iceMenu_152" className="iceMenuLiLevel_2 parent">
                    <NavLink to="/entrant/entrance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Вступ до ПІБ МНТУ</span></NavLink>
                    <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                      <li>
                        <div style={COL_STYLE} className="iceCols">
                          <ul>
                            <NavItemLink id="iceMenu_155" className="iceMenuLiLevel_3" to="https://zakon.rada.gov.ua/laws/show/z1225-20#Text" target="_blank" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Умови прийому МОН</NavItemLink>
                            <NavItemLink id="iceMenu_183" className="iceMenuLiLevel_3" to="/media/docs/public-info/Правила прийому ПІБ МНТУ 2021.pdf" target="_blank" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Правила прийому ПІБ МНТУ</NavItemLink>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavItem>
                  <NavItemLink id="iceMenu_156" className="iceMenuLiLevel_2" to="/entrant/faq" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Часто запитують</NavItemLink>
                  {/* <NavItemLink id="iceMenu_175" className="iceMenuLiLevel_2" to="/entrant/list" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Рейтинговий список вступників</NavItemLink> */}
                  {/* <NavItemLink id="iceMenu_176" className="iceMenuLiLevel_2" to="/entrant/apply" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Подати заявку на вступ</NavItemLink> */}
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        <NavItem match='/business-college' id="iceMenu_146" className="iceMenuLiLevel_1 parent">
          <NavLink to="/business-college/about" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Бізнес-коледж</span></NavLink>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <li id="iceMenu_162" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                  <NavItem match='/business-college/courses' id="iceMenu_218" className="iceMenuLiLevel_2 parent">
                    <NavLink to="/business-college/about" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Спеціальності</span></NavLink>
                    <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                      <li>
                        <div style={COL_STYLE} className="iceCols">
                          <ul>
                            <NavItemLink id="iceMenu_202" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-physical-education-and-sport" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Фізична культура і спорт</NavItemLink>
                            <NavItemLink id="iceMenu_227" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-law" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Право</NavItemLink>
                            <NavItemLink id="iceMenu_228" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-accountancy" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Облік і оподаткування</NavItemLink>
                            <NavItemLink id="iceMenu_229" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-finance" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Фінанси, банківська справа та страхування</NavItemLink>
                            <NavItemLink id="iceMenu_230" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-management" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Менеджмент</NavItemLink>
                            <NavItemLink id="iceMenu_231" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-it" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Інженерія програмного забезпечення</NavItemLink>
                            <NavItemLink id="iceMenu_232" className="iceMenuLiLevel_3" to="/business-college/courses/course-college-petroleum-engineering-and-technology" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Нафтогазова інженерія та технології</NavItemLink>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavItem>
                  <NavItemLink id="iceMenu_220" className="iceMenuLiLevel_2" to="/business-college/about" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Про коледж</NavItemLink>
                  <NavItem match='/business-college/entrance' id="iceMenu_219" className="iceMenuLiLevel_2 parent">
                    <NavLink to="/business-college/entrance" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Вступ до коледжу</span></NavLink>
                    <ul className="icesubMenu sub_level_2" style={{width: '280px'}}>
                      <li>
                        <div style={COL_STYLE} className="iceCols">
                          <ul>
                            <NavItemLink id="iceMenu_234" className="iceMenuLiLevel_3" to="/media/docs/dod3pbk.pdf?v2" target="_blank" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Перелік конкурсних предметів ПБК 2020</NavItemLink>
                            <NavItemLink id="iceMenu_238" className="iceMenuLiLevel_3" to="/media/docs/dod4.pdf" target="_blank" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Перелік документiв для вступу ПБК 2020</NavItemLink>
                            <NavItemLink id="iceMenu_235" className="iceMenuLiLevel_3" to="/media/docs/Правила прийому ПБК ПІБ МНТУ 2021.pdf" target="_blank" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Правила прийому ПБК МНТУ</NavItemLink>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavItem>
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        <NavItem match='/other' id="iceMenu_104" className="iceMenuLiLevel_1 parent">
          <a href="#" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Студенту</span></a>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <li id="iceMenu_182" className="iceMenuLiLevel_2"><a className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle"> </span></a></li>
                  <NavItemLink id="iceMenu_174" className="iceMenuLiLevel_2" to="/other/schedule" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Розклад занять</NavItemLink>
                  {/* <NavItemLink id="iceMenu_158" className="iceMenuLiLevel_2" to="/other/juridical-help" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Юридична клініка</NavItemLink> */}
                  <NavItemLink id="iceMenu_157" className="iceMenuLiLevel_2" to="/other/gallery" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Фотоархів</NavItemLink>
                  <NavItemLink id="iceMenu_160" className="iceMenuLiLevel_2" to="/other/pbc-student-self-governance" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Студентське самоврядування коледжу</NavItemLink>
                  <NavItemLink id="iceMenu_160" className="iceMenuLiLevel_2" to="/other/pib-student-self-governance" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Студентське самоврядування інституту</NavItemLink>
                  <NavItemLink id="iceMenu_160" className="iceMenuLiLevel_2" to="/other/ombudsman" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Офіс студентського омбудсмена</NavItemLink>
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        <NavItem match='/contact' id="iceMenu_106" className="iceMenuLiLevel_1 parent">
          <NavLink to="/contact" className=" iceMenuTitle"><span className="icemega_title icemega_nosubtitle">Контакти</span></NavLink>
          <ul className="icesubMenu sub_level_1" style={{width: '280px'}}>
            <li>
              <div style={COL_STYLE} className="iceCols">
                <ul>
                  <NavItemLink id="iceMenu_207" className="iceMenuLiLevel_2" to="/contact/email" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Написати email ПІБ МНТУ</NavItemLink>
                </ul>
              </div>
            </li>
          </ul>
        </NavItem>

        {/* <NavItemLink id="iceMenu_107" className="iceMenuLiLevel_1" to="/sitemap" linkClassName=" iceMenuTitle" spanClassName="icemega_title icemega_nosubtitle">Мапа сайту</NavItemLink> */}
      </ul>
    </div>
  )
}
