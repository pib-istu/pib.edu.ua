// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Результати науково-практичної конференції «Актуальні проблеми розвитку сучасної науки»"

import React from 'react'
import { WithSidebar } from 'components/WithSidebar'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div className="item-page_blog">
        <div className="blog-item-header">
          <div className="date">18.05.2017</div><h2> <a href="/home/news/84-news-2017-05-18">
              Результати науково-практичної конференції «Актуальні проблеми розвитку сучасної науки»</a>
          </h2>
          <div className="clear-both" />
        </div>
        <p>18 травня 2017 року в Полтавському інституті бізнесу відбулася ХІІ Всеукраїнська науково-практична конференція «Актуальні проблеми розвитку сучасної науки», присвячена пам'яті засновника і фундатора Міжнародного науково-технічного університету — академіка, д.т.н., професора Юрія Миколайовича Бугая.</p>
        <p>Участь в конференції прийняли студенти, викладачі та провідні науковці відповідних галузей за якими бала організована конференція.</p>
        <p><a href="/media/docs/news/news-2017-05-18/Збірник-матеріалів-конференції-ПІБ-МНТУ-2017-05-18-Актуальні-проблеми-розвитку-сучасної-науки.pdf" className="gold external" target="_blank">Завантажити збірник матеріалів конференції</a></p>
      </div>
    </WithSidebar>
  )
}
