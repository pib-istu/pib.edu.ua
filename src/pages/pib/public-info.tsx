// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Ліцензія та сертифікати"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'
import { FileItem, Files } from 'components/Files'

const FILES: readonly FileItem[] = [
  {
    type: 'page',
    name: 'Ліцензія МНТУ',
    ext: 'pdf',
    url: 'https://istu.edu.ua/ліцензія'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО АКАДЕМІЧНУ ДОБРОЧЕСНІСТЬ ЗДОБУВАЧІВ ВО ТА НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО АКАДЕМІЧНУ ДОБРОЧЕСНІСТЬ ЗДОБУВАЧІВ ВО ТА НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО АКАДЕМІЧНУ МОБІЛЬНІСТЬ УЧАСНИКІВ ОСВІТНЬОГО ПРОЦЕСУ В ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО АКАДЕМІЧНУ МОБІЛЬНІСТЬ УЧАСНИКІВ ОСВІТНЬОГО ПРОЦЕСУ В ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО АНКЕТУВАННЯ (ОПИТУВАННЯ) УЧАСНИКІВ ОСВІТНЬОГО ПРОЦЕСУ ТА ВСІХ ЗАЦІКАВЛЕНИХ ОСІБ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО АНКЕТУВАННЯ (ОПИТУВАННЯ) УЧАСНИКІВ ОСВІТНЬОГО ПРОЦЕСУ ТА ВСІХ ЗАЦІКАВЛЕНИХ ОСІБ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ВИБІРКОВІ ДИСЦИПЛІНИ У ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ВИБІРКОВІ ДИСЦИПЛІНИ У ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ВИЗНАННЯ ІНОЗЕМНИХ ДОКУМЕНТІВ ПРО ОСВІТУ В ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ВИЗНАННЯ ІНОЗЕМНИХ ДОКУМЕНТІВ ПРО ОСВІТУ В ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ВІДРАХУВАННЯ, ПЕРЕРИВАННЯ НАВЧАННЯ, НАДАННЯ АКАДЕМІЧНОЇ ВІДПУСТКИ, ПОНОВЛЕННЯ І ПЕРЕВЕДЕННЯ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ВІДРАХУВАННЯ, ПЕРЕРИВАННЯ НАВЧАННЯ, НАДАННЯ АКАДЕМІЧНОЇ ВІДПУСТКИ, ПОНОВЛЕННЯ І ПЕРЕВЕДЕННЯ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ВЧЕНУ РАДУ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ВЧЕНУ РАДУ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ЕКЗАМЕНАЦІЙНУ КОМІСІЮ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ЕКЗАМЕНАЦІЙНУ КОМІСІЮ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО КАФЕДРУ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО КАФЕДРУ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО КУРАТОРІВ АКАДЕМІЧНИХ ГРУП ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО КУРАТОРІВ АКАДЕМІЧНИХ ГРУП ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО НАВЧАЛЬНУ ПРОГРАМУ, РОБОЧУ НАВЧАЛЬНУ ПРОГРАМУ ДИСЦИПЛІНИ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО НАВЧАЛЬНУ ПРОГРАМУ, РОБОЧУ НАВЧАЛЬНУ ПРОГРАМУ ДИСЦИПЛІНИ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО НАСКРІЗНУ ПРАКТИКУ ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО НАСКРІЗНУ ПРАКТИКУ ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО НАУКОВУ БІБЛІОТЕКУ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО НАУКОВУ БІБЛІОТЕКУ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ІНКЛЮЗИВНОГО НАВЧАННЯ ОСІБ З ОСОБЛИВИМИ ОСВІТНІМИ ПОТРЕБАМИ У ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ІНКЛЮЗИВНОГО НАВЧАННЯ ОСІБ З ОСОБЛИВИМИ ОСВІТНІМИ ПОТРЕБАМИ У ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ОСВІТНЬОГО ПРОЦЕСУ В ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ОСВІТНЬОГО ПРОЦЕСУ В ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ТА ПРОВЕДЕННЯ ПРАКТИК ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ОРГАНІЗАЦІЮ ТА ПРОВЕДЕННЯ ПРАКТИК ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ОСВІТНІ ПРОГРАМИ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ОСВІТНІ ПРОГРАМИ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ ТА СТАЖУВАННЯ ПЕДАГОГІЧНИХ, НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ ТА СТАЖУВАННЯ ПЕДАГОГІЧНИХ, НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ПОРЯДК РОЗРОБЛЕННЯ НАВЧАЛЬНИХ ПЛАНІВ ПІДГОТОВКИ ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ СТУПЕНЯ БАКАЛАВРА ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ПОРЯДК РОЗРОБЛЕННЯ НАВЧАЛЬНИХ ПЛАНІВ ПІДГОТОВКИ ЗДОБУВАЧІВ ВИЩОЇ ОСВІТИ СТУПЕНЯ БАКАЛАВРА ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ПОРЯДОК ВИЗНАННЯ РЕЗУЛЬТАТІВ НАВЧАННЯ ТА ВИЗНАЧЕННЯ АКАДЕМІЧНОЇ РІЗНИЦІ У ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ПОРЯДОК ВИЗНАННЯ РЕЗУЛЬТАТІВ НАВЧАННЯ ТА ВИЗНАЧЕННЯ АКАДЕМІЧНОЇ РІЗНИЦІ У ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ПРОТИДІЮ БУЛІНГУ (ЦЬКУВАННЮ) У ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ПРОТИДІЮ БУЛІНГУ (ЦЬКУВАННЮ) У ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ПСИХОЛОГІЧНУ СЛУЖБУ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ПСИХОЛОГІЧНУ СЛУЖБУ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО РЕЙТИНГОВУ СИСТЕМУ ОЦІНЮВАННЯ НАВЧАЛЬНИХ ДОСЯГНЕНЬ СТУДЕНТІВ У ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО РЕЙТИНГОВУ СИСТЕМУ ОЦІНЮВАННЯ НАВЧАЛЬНИХ ДОСЯГНЕНЬ СТУДЕНТІВ У ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО СИСТЕМУ ВНУТРІШНЬОГО ЗАБЕЗПЕЧЕННЯ ЯКОСТІ ВО В ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО СИСТЕМУ ВНУТРІШНЬОГО ЗАБЕЗПЕЧЕННЯ ЯКОСТІ ВО В ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕННЯ ПРО ЮРИДИЧНУ СЛУЖБУ ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОЛОЖЕННЯ ПРО ЮРИДИЧНУ СЛУЖБУ ПІБ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПОРЯДОК ВІДБОРУ ТА ПРИЗНАЧЕННЯ НА ПОСАДИ НАУКОВИХ ТА НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ У ПОЛТАВСЬКОМУ ІНСТИТУТІ БІЗНЕСУ ПВНЗ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПОРЯДОК ВІДБОРУ ТА ПРИЗНАЧЕННЯ НА ПОСАДИ НАУКОВИХ ТА НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ У ПОЛТАВСЬКОМУ ІНСТИТУТІ БІЗНЕСУ ПВНЗ МНТУ.pdf'
  },
  {
    type: 'file',
    name: 'ПРАВИЛА ВНУТРІШНЬОГО РОЗПОРЯДКУ ДЛЯ СТУДЕНТІВ ПОЛТАВСЬКОГО ІНСТИТУТУ БІЗНЕСУ ПРИВАТНОГО ВИЩОГО НАВЧАЛЬНОГО ЗАКЛАДУ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/ПРАВИЛА ВНУТРІШНЬОГО РОЗПОРЯДКУ ДЛЯ СТУДЕНТІВ ПОЛТАВСЬКОГО ІНСТИТУТУ БІЗНЕСУ ПРИВАТНОГО ВИЩОГО НАВЧАЛЬНОГО ЗАКЛАДУ МНТУ.pdf',
  },
  {
    type: 'file',
    name: 'ПОЛОЖЕНЯ ПРО ВІДБІРКОВУ КОМІСІЮ ПОЛТАВСЬКОГО ІНСТИТУТУ БІЗНЕСУ ЗВО «МІЖНАРОДНИЙ НАУКОВО-ТЕХНІЧНИЙ УНІВЕРСИТЕТ ІМЕНІ АКАДЕМІКА ЮРІЯ БУГАЯ»',
    ext: 'pdf',
    url: '/media/docs/public-info/Положення про ВК 2020.pdf',
  },
  {
    type: 'file',
    name: 'Правила прийому ПІБ МНТУ 2021',
    ext: 'pdf',
    url: '/media/docs/Правила прийому ПІБ МНТУ 2021.pdf',
  },
  {
    type: 'file',
    name: 'Правила прийому ПБК МНТУ 2021',
    ext: 'pdf',
    url: '/media/docs/Правила приийому ПБК ПІБ МНТУ 2021.pdf',
  },
  {
    type: 'file',
    name: 'Перелік конкурсних предметів ПІБ 2020',
    ext: 'pdf',
    url: '/media/docs/dod3.pdf?v1',
  },
  {
    type: 'file',
    name: 'Перелік конкурсних предметів ПБК 2020',
    ext: 'pdf',
    url: '/media/docs/dod3pbk.pdf?v2',
  },
  {
    type: 'file',
    name: 'Положення про Студентський парламент ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/other/student-self-governance/Положення про Студентський парламент ПІБ МНТУ.pdf',
  },
  {
    type: 'file',
    name: 'Положення про Апеляційну Комісію ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/Положення про Апеляційну Комісію ПІБ МНТУ.pdf',
  },
  {
    type: 'file',
    name: 'Положення про зарахування за результатами співбесіди ПІБ МНТУ',
    ext: 'pdf',
    url: '/media/docs/public-info/Положення про зарахування за результатами співбесіди ПІБ МНТУ.pdf',
  },
]

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">Публічна інформація</h1>
      </div>
      <div className="pib-license">
        <Files files={FILES} />
        <br />
      </div>
    </WithSidebar>
  )
}
