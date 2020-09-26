// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Право"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'
import ReadyBanner from 'components/ReadyBanner'
import ReadyBanner2 from 'components/ReadyBanner2'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Право </h1>
      </div>
      <div id="pib-spec">
        <ul className="course">
          <li className="course float-left bold center">напрям:</li>
          <li className="desc float-left center">Право</li>
        </ul>
        <ul className="spec">
          <li className="top_course_image_wrapper"><img src="/../templates/pib/img/universal_pictures/3.jpg" /></li>
        </ul>
        <div className="clear-both" />
        <p className="first"><span className="bold">Юри́ст</span> - це одна з найбільш поширених, необхідних і високооплачуваних професій у цивілізованому суспільстві. Кожному потрібен свій юрист, як і свій лікар.</p>
        <p>Ми готуємо фахівців, які мають необхідний рівень правових та економічних знань і здатні працювати на рівні сучасних вимог на сучасній світоглядній, науковій та методичній основі за спеціальністю «Право». Підготовка за цією спеціальністю забезпечує інтеграцію юридичних та економічних знань, комп'ютерної грамотності, високий рівень загальної культури та правосвідомості, володіння навичками цивілізованого ведення бізнесу.</p>
        <p>Навчальна програма спрямована на підготовку фахівців по підприємницькому праву зі знанням контрактного та комерційного права, правового забезпечення зовнішньоекономічних зв'язків. Поглиблено вивчається законодавство, спрямоване на створення конкурентного середовища, в тому числі антимонопольне законодавство, законодавство, що регулює операції з нерухомістю, основи страхової справи, про власність, іноземні інвестиції, податкове законодавство, закони про банкрутство, тощо. Поглиблено вивчаються іноземні мови (англійська, німецька, французька).</p>
      </div>

      <ReadyBanner2 />
      <ReadyBanner />
    </WithSidebar>
  )
}
