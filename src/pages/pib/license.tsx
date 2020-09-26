// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Ліцензія та сертифікати"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Ліцензія та сертифікати </h1>
      </div>
      <div className="pib-license">
        <p>ПІБ МНТУ є відокремленим структурним підрозділом МНТУ, який має IV рівень акредитації.</p>
        <p>Ознайомитись з відповідними документами, ліцензіями та сертифікатами, можливо на офіційному сайті МНТУ:</p>
        <br />
        <br />
        <br />
        <div className="center"><span className="highlight"><a href="http://www.istu.edu.ua/abiturijentu.html" className="gold external unbold" target="_blank">На офіційний сайт МНТУ</a></span></div>
      </div>
    </WithSidebar>
  )
}
