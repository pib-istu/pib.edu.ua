// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Облік і оподаткування"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'
import ReadyBanner2 from 'components/ReadyBanner2'
import Courses from 'components/Courses'
import ReadyBannerFullSize from 'components/ReadyBannerFullSize';

export default () => {
  return (
    <WithSidebar shouldShowSidebar={false}>
      <div id="page-header">
        <h1 className="text">Спеціальності</h1>
      </div>

      <Courses />

      <ReadyBanner2 />
      <ReadyBannerFullSize />
    </WithSidebar>
  )
}
