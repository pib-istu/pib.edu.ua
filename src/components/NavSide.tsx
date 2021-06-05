import React, { FC } from 'react'
import { Link, LinkProps, useLocation } from '@reach/router'

type NavLinkProps = LinkProps<{}> & React.RefAttributes<HTMLAnchorElement>

const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  const isExternal = props.to.includes('//')

  if (isExternal) return (
    <a {...props} href={props.to}>{children}</a>
  )

  return (
    <Link
      getProps={({ isCurrent, isPartiallyCurrent }) => ({
        className: `${isPartiallyCurrent ? 'active' : ''} ${isCurrent ? 'current' : ''} ${props.className ?? ''}`
      })}
      {...props}
    >
      {children}
    </Link>
  )
}

interface Matcher {
  readonly match: string
  readonly shouldBeExact?: boolean
}

const Loc: FC<Matcher> = ({ children, match, shouldBeExact = false }) => {
  const location = useLocation()
  const hasMatch = shouldBeExact ? location.pathname === match : location.pathname.startsWith(match);

  return hasMatch ? <>{children}</> : null
}

type NavItemProps = React.HTMLAttributes<HTMLLIElement> & Matcher

const NavSection: FC<NavItemProps> = ({ children, ...props }) => {
  const { match, shouldBeExact = false, className = '', ...rest } = props
  const location = useLocation()
  const hasMatch = shouldBeExact ? location.pathname === match : location.pathname.startsWith(match);

  console.log(location.pathname, match, hasMatch)

  return (
    <li
      {...rest}
      className={`${hasMatch ? 'active' : ''} ${className}`}
    >
      {children}
    </li>
  )
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
  readonly className?: string
  readonly to: string
  readonly target?: string
}

const NavItemLink: FC<NavItemLinkProps> = ({ children, ...props }) => {
  const {
    id,
    className,
    to,
    ...linkProps
  } = props

  return  (
    <NavItem match={to} id={id} className={className}>
      <NavLink {...linkProps} to={to}>
        {children}
      </NavLink>
    </NavItem>
  )
}

export default () => {
  return (
    <div className="bottom_end">
      <ul className="menu" id="other_menu">
        <Loc match="/home">
        <NavSection match="/" shouldBeExact={true} id="item-101" className="lvl1 deeper parent">
          <NavLink to="/">Головна</NavLink>
          <ul>
            <li id="item-179"><span className="separator"> </span></li>
            <NavItemLink id="item-137" to="/home/news">Новини</NavItemLink>
            <NavItemLink id="item-138" to="/home/events">Розклад подій</NavItemLink>
            <NavItemLink id="item-139" to="/home/reviews">Відгуки</NavItemLink>
          </ul>
        </NavSection>
        </Loc>

        <Loc match="/pib">
        <NavSection match="/pib" id="item-102" className="lvl1 deeper parent">
          <NavLink to="/pib">ПІБ МНТУ</NavLink>
          <ul>
            <li id="item-180"><span className="separator"> </span></li>
            <NavItemLink id="item-148" to="/pib/about">Про ПІБ МНТУ</NavItemLink>
            <NavItemLink id="item-149" to="/pib/benefits">Чому ПІБ МНТУ</NavItemLink>
            <NavItemLink id="item-151" to="/pib/activity">Наукоа діяльність</NavItemLink>
            <NavItemLink id="item-151" to="/pib/public-info">Публічна інформація</NavItemLink>
            <li id="item-193"><span className="separator"> </span></li>
          </ul>
        </NavSection>
        </Loc>

        <Loc match='/entrant'>
        <NavSection match='/entrant' id="item-103" className="lvl1 deeper parent">
          <NavLink to="/entrant/courses">Абітурієнту</NavLink>
          <ul>
            <li id="item-181"><span className="separator"> </span></li>
            <NavSection match='/entrant/courses' id="item-140" className="deeper parent">
              <NavLink to="/entrant/courses">Спеціальності</NavLink>
              <Loc match='/entrant/courses'>
                <ul>
                  {/* <NavItemLink id="item-185" to="/entrant/courses/course-law">Право</NavItemLink> */}
                  <NavItemLink id="item-224" to="/entrant/courses/course-psychology">Психологія</NavItemLink>
                  {/* <NavItemLink id="item-226" to="/entrant/courses/course-petroleum-engineering-and-technology">Нафтогазова інженерія та технології</NavItemLink> */}
                  <NavItemLink id="item-191" to="/entrant/courses/course-it">Інженерія програмного забезпечення</NavItemLink>
                  {/* <NavItemLink id="item-223" to="/entrant/courses/course-radio-electronic">Телекомунікації та радіотехніка</NavItemLink> */}
                  {/* <NavItemLink id="item-225" to="/entrant/courses/course-public-management-and-administration">Публічне управління та адміністрування</NavItemLink> */}
                  <NavItemLink id="item-187" to="/entrant/courses/course-health">Фізична терапія, ерготерапія</NavItemLink>
                  <NavItemLink id="item-188" to="/entrant/courses/course-finance">Фінанси, банківська справа та страхування</NavItemLink>
                  <NavItemLink id="item-192" to="/entrant/courses/course-accountancy">Облік і оподаткування</NavItemLink>
                  <NavItemLink id="item-201" to="/entrant/courses/course-management">Менеджмент</NavItemLink>
                  {/* <NavItemLink id="item-190" to="/entrant/courses/course-ecology">Екологія</NavItemLink> */}
                </ul>
              </Loc>
            </NavSection>
            <NavItemLink id="item-147" to="/entrant/military">Військова кафедра</NavItemLink>
            <NavSection match='/entrant/entrance' id="item-152" className="deeper parent">
              <NavLink to="/entrant/entrance">Вступ до ПІБ МНТУ</NavLink>
              <Loc match='/entrant/entrance'>
                <ul>
                  <NavItemLink id="item-155" to="http://zakon2.rada.gov.ua/laws/show/z1390-14#n15" target="_blank">Умови прийому МОН</NavItemLink>
                  <NavItemLink id="item-183" to="/media/docs/entrant/entrance/Правила прийому ПІБ МНТУ 2021.pdf" target="_blank">Правила прийому ПІБ МНТУ</NavItemLink>
                  <NavItemLink id="item-233" to="/media/docs/entrant/entrance/Перелік конкурсних предметів 2021.pdf" target="_blank">Перелік конкурсних предметів</NavItemLink>
                </ul>
              </Loc>
            </NavSection>
            <NavItemLink id="item-156" to="/entrant/faq">Часто запитують</NavItemLink>
            {/* <NavItemLink id="item-175" to="/entrant/list">Рейтинговий список вступників</NavItemLink> */}
            {/* <NavItemLink id="item-176" to="/entrant/apply">Подати заявку на вступ</NavItemLink> */}
          </ul>
        </NavSection>
        </Loc>

        <Loc match='/business-college'>
        <NavSection match='/business-college' id="item-146" className="lvl1 deeper parent">
          <NavLink to="/business-college/about">Бізнес-коледж</NavLink>
          <ul>
              <li id="item-162"><span className="separator"> </span></li>
              <NavSection match='/business-college/courses' id="item-218" className="deeper parent">
                <NavLink to="/business-college/about">Спеціальності</NavLink>
                <Loc match='/business-college/courses'>
                  <ul>
                    <NavItemLink id="item-202" to="/business-college/courses/course-college-physical-education-and-sport">Фізична культура і спорт</NavItemLink>
                    <NavItemLink id="item-227" to="/business-college/courses/course-college-law">Право</NavItemLink>
                    <NavItemLink id="item-228" to="/business-college/courses/course-college-accountancy">Облік і оподаткування</NavItemLink>
                    <NavItemLink id="item-229" to="/business-college/courses/course-college-finance">Фінанси, банківська справа та страхування</NavItemLink>
                    <NavItemLink id="item-230" to="/business-college/courses/course-college-management">Менеджмент</NavItemLink>
                    <NavItemLink id="item-231" to="/business-college/courses/course-college-it">Інженерія програмного забезпечення</NavItemLink>
                    <NavItemLink id="item-232" to="/business-college/courses/course-college-petroleum-engineering-and-technology">Нафтогазова інженерія та технології</NavItemLink>
                  </ul>
                </Loc>
              </NavSection>
              <NavItemLink id="item-220" to="/business-college/about">Про коледж</NavItemLink>
              <NavSection match='/business-college/entrance' id="item-219" className="deeper parent">
                <NavLink to="/business-college/entrance">Вступ до коледжу</NavLink>
                <Loc match='/business-college/entrance'>
                  <ul>
                    <NavItemLink id="item-234" to="/media/docs/dod3pbk.pdf?v2" target="_blank">Перелік конкурсних предметів ПБК 2020</NavItemLink>
                    <NavItemLink id="item-238" to="/media/docs/dod4.pdf" target="_blank">Перелік документiв для вступу ПБК 2020</NavItemLink>
                    <NavItemLink id="item-235" to="/media/docs/Правила прийому ПБК ПІБ МНТУ 2021.pdf" target="_blank">Правила прийому ПБК МНТУ</NavItemLink>
                    <NavItemLink id="item-240" to="/media/docs/Рейтинг_1.pdf" target="_blank">Рейтинговий список від 23.07.2020 (017 Фізична культура і спорт)</NavItemLink>
                    <NavItemLink id="item-241" to="/media/docs/Рейтинг_3.pdf" target="_blank">Рейтинговий список від 23.07.2020 (073 Менеджмент)</NavItemLink>
                    <NavItemLink id="item-242" to="/media/docs/Рейтинг_2.pdf" target="_blank">Рейтинговий список від 23.07.2020 (121 Інженерія програмного забезпечення)</NavItemLink>
                    <NavItemLink id="item-243" to="/media/docs/Рекоменд_1.pdf" target="_blank">Список рекомендованих від 23.07.2020 (017 Фізична культура і спорт)</NavItemLink>
                    <NavItemLink id="item-244" to="/media/docs/Рекоменд_3.pdf" target="_blank">Список рекомендованих від 23.07.2020 (073 Менеджмент)</NavItemLink>
                    <NavItemLink id="item-245" to="/media/docs/Рекоменд_2.pdf" target="_blank">Список рекомендованих від 23.07.2020 (121 Інженерія програмного забезпечення)</NavItemLink>
                    <NavItemLink id="item-246" to="/media/docs/Рекоменд_31.08.2020.pdf" target="_blank">Список рекомендованих від 31.08.2020 (073 Менеджмент)</NavItemLink>
                    <NavItemLink id="item-247" to="/media/docs/Списки на основі ПЗСО.pdf" target="_blank">Список рекомендованих, Заочна форма навчання, від 01.09.2020 (121 Інженерія програмного забезпечення)</NavItemLink>
                    <NavItemLink id="item-248" to="/media/docs/Списки на основі КР.pdf" target="_blank">Список рекомендованих, Заочна форма навчання, від 01.09.2020 (072 Фінанси, банківська справа та страхування)</NavItemLink>
                    <NavItemLink id="item-249" to="/media/docs/Списки на основі ПЗСО(денна форма).pdf" target="_blank">Список рекомендованих від 03.09.2020 (121 Iнженерiя програмного забезпечення)</NavItemLink>
                    <NavItemLink id="item-250" to="/media/docs/Списки на основі КР(денна форма).pdf" target="_blank">Список рекомендованих від 02.09.2020 (017 Фiзична культура i спорт)</NavItemLink>
                  </ul>
                </Loc>
              </NavSection>
          </ul>
        </NavSection>
        </Loc>

        <Loc match='/other'>
        <NavSection match='/other' id="item-104" className="lvl1 deeper parent">
          <a href="#">Студенту</a>
          <ul>
            <li id="item-182"><span className="separator"> </span></li>
            <NavItemLink id="item-174" to="/other/schedule">Розклад занять</NavItemLink>
            {/* <NavItemLink id="item-158" to="/other/juridical-help">Юридична клініка</NavItemLink> */}
            <NavItemLink id="item-157" to="/other/gallery">Фотоархів</NavItemLink>
            <NavItemLink id="item-160" to="/other/self-governance">Студентське самоврядування</NavItemLink>
            <NavItemLink id="item-160" to="/other/ombudsman">Офіс студентського омбудсмена</NavItemLink>
          </ul>
        </NavSection>
        </Loc>

        <Loc match='/contact'>
        <NavSection match='/contact' id="item-106" className="lvl1 deeper parent">
          <NavLink to="/contact">Контакти</NavLink>
          <ul>
            <NavItemLink id="item-207" to="/contact/email">Написати email ПІБ МНТУ</NavItemLink>
          </ul>
        </NavSection>
        </Loc>

        {/* <Loc match='/sitemap'>
        <NavSection match='/sitemap' id="item-106" className="lvl1 deeper parent">
          <NavItemLink id="item-107" to="/sitemap">Мапа сайту</NavItemLink>
        </NavSection>
        </Loc> */}
      </ul>
    </div>
  )
}
