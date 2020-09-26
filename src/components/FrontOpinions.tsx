import React, { useEffect } from 'react'

declare var $: any
declare var IceSlideShow: any
declare var Fx: any

export default () => {
  useEffect(() => {
    var _lofmain = $('icetabs107');
    var object = new IceSlideShow(_lofmain.getElement('.ice-main-wapper'),
                  _lofmain.getElement('.ice-navigator-outer .ice-navigator'),
                  _lofmain.getElement('.ice-navigator-outer'),
                  {
                    fxObject:{
                    transition:Fx.Transitions.Sine.easeOut,
                    duration:700},
                    mainItemSelector: 'div.ice-main-item',
                    interval:10000,
                    direction :'hrright',
                    navItemHeight:100,
                    navItemWidth:290,
                    navItemsDisplay:3,
                    navPos:'0'
                  });
      object.registerButtonsControl('click', {next:_lofmain.getElement('.ice-next'),previous:_lofmain.getElement('.ice-previous')});
      object.start(1, _lofmain.getElement('.preload'));
  }, [])

  return (
    <div id="front_opinions_wrapper">
      <div className="slot1">
        <div id="icetabs107" className="ice-tabs-white -sl-white" style={{height: '207px', width: '655px'}}>
          <div className="ice-main-wapper" style={{height: '207px', width: '655px'}}>
            <div className="ice-main-item" style={{display: 'block', left: '0px', width: '655px'}}>
              <div className="opinions_photo">
                <img src="/images/opinions/V-Struk.jpg" title="Вячеслав Стрюк, начальник відділення ПАТ «КБ «ГЛОБУС»" alt="Вячеслав Стрюк, начальник відділення ПАТ «КБ «ГЛОБУС»" />
              </div>
              <div className="opinions">
                <div className="opinions_wrapper">
                  <div className="opinions_tl" />
                  <div className="opinions_tbg" />
                  <div className="opinions_tr" />
                  <div className="opinions_content">
                    <div className="opinions_quote">“</div>
                    <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>Мабуть кожен випускник ПІБ МНТУ може бути гордий тим, що навчався тут і отримав знання, які допомогли у творчому становленні в житті.</p>
                    <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>Для мене освіта, здобута в ПІБ МНТУ, забезпечила блискучий старт для подальшої кар’єри. Високий рівень теоретичних знань і практичні навички полегшили роботу та забезпечили швидкий професійний ріст. Я дуже вдячний викладачам ПІБ МНТУ за професіоналізм, наполегливість, терпіння, вміння зацікавити студентів, дати їм знання і навчити працювати!</p>
                  </div>
                  <div className="opinions_bl" />
                  <div className="opinions_bbg" />
                  <div className="opinions_br" />
                </div>
              </div>
              <div className="opinions_author">
                -&nbsp;Вячеслав Стрюк,<br />&nbsp; начальник відділення ПАТ «КБ «ГЛОБУС»
              </div>
              <div className="clear-both" />
            </div>
            <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
              <div className="opinions_photo">
                <img src="/images/opinions/R-S-Shenko.jpg" title="Іщенко Роман Сергійович, керівник департаменту непрямих продажів Корпорації «SI GROUP»" alt="Іщенко Роман Сергійович, керівник департаменту непрямих продажів Корпорації «SI GROUP»" />
              </div>
              <div className="opinions">
                <div className="opinions_wrapper">
                  <div className="opinions_tl" />
                  <div className="opinions_tbg" />
                  <div className="opinions_tr" />
                  <div className="opinions_content">
                    <div className="opinions_quote">“</div>
                    <p style={{padding: '0px'}}>Усім, хто є випускником ПІБ МНТУ, хто пов'язаний з ним, бажаю успіху в досягненні поставленої мети в житті, яка, безумовно, завжди є позитивною!</p>
                  </div>
                  <div className="opinions_bl" />
                  <div className="opinions_bbg" />
                  <div className="opinions_br" />
                </div>
              </div>
              <div className="opinions_author">
                -&nbsp;Іщенко Роман Сергійович,<br />&nbsp; керівник департаменту непрямих продажів Корпорації «SI GROUP»
              </div>
              <div className="clear-both" />
            </div>
            <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
              <div className="opinions_photo">
                <img src="/images/opinions/I-Lavka.jpg" title='Лавка Ірина, ПАТ " Альфа-банк", спеціаліст відділу забезпечення продаж ' alt="Лавка Ірина, ПАТ " />
              </div>
              <div className="opinions">
                <div className="opinions_wrapper">
                  <div className="opinions_tl" />
                  <div className="opinions_tbg" />
                  <div className="opinions_tr" />
                  <div className="opinions_content">
                    <div className="opinions_quote">“</div>
                    <p style={{fontSize: '14px', lineHeight: '16px', paddingBottom: '5px'}}>Я закінчила ПІБ МНТУ у 2012 році. </p>
                    <p style={{fontSize: '14px', lineHeight: '16px', paddingBottom: '5px'}}>У роботі, безумовно, стали в нагоді знання суті і особливостей банківських операцій, а також нормативно-правової бази, регулюючої банківську діяльність, знання бухгалтерського обліку банківських операцій, а ще діловий англійський, статистика і академічні знання решти у сфері економіки, фінансів, маркетинг. Дуже вдячна професорсько-викладацькому складу ПІБ МНТУ</p>
                  </div>
                  <div className="opinions_bl" />
                  <div className="opinions_bbg" />
                  <div className="opinions_br" />
                </div>
              </div>
              <div className="opinions_author">
                -&nbsp;Лавка Ірина,<br />&nbsp; ПАТ "Альфа-банк",<br />&nbsp; спеціаліст відділу забезпечення продаж
              </div>
              <div className="clear-both" />
            </div>
            <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
              <div className="opinions_photo">
                <img src="/images/opinions/Y-Gromik.jpg" title="Громик Юрій Юрійович, головний спеціаліст та інспектор якості, економіст УАР Криничанської райдержадміністрації" alt="Громик Юрій Юрійович, головний спеціаліст та інспектор якості, економіст УАР Криничанської райдержадміністрації" />
              </div>
              <div className="opinions">
                <div className="opinions_wrapper">
                  <div className="opinions_tl" />
                  <div className="opinions_tbg" />
                  <div className="opinions_tr" />
                  <div className="opinions_content">
                    <div className="opinions_quote">“</div>
                    <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '2px'}}>До років навчання в інституті завжди буду ставитись як до особливо продуктивного періоду мого життя, адже із самого початку поєднував роботу з навчальним процесом, який проходив під чудовим професійним керівництвом викладачів нашого рідного ВУЗу.</p>
                    <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '2px'}}>Особливо хочу подякувати кафедрі економічних дисциплін за безцінні знання, отримані під час вивчення фахових дисциплін. Хочу зазначити, що персональний підхід до кожного студента в ПІБ МНТУ це не порожнє словосполучення, а принцип роботи викладачів. </p>
                    <p style={{fontSize: '13px', lineHeight: '12px', paddingBottom: '3px'}}>Від щирого серця бажаю Полтавському інституту бізнесу подальшого розвитку і процвітання, а студентам стати добрими фахівцями обраної вами справи. Будьте вдячними викладачам, котрі передають вам свій досвід та мудрість. </p>
                  </div>
                  <div className="opinions_bl" />
                  <div className="opinions_bbg" />
                  <div className="opinions_br" />
                </div>
              </div>
              <div className="opinions_author">
                -&nbsp;Громик Юрій Юрійович,<br />&nbsp; головний спеціаліст та інспектор якості,<br />&nbsp; економіст УАР Криничанської райдержадміністрації
              </div>
              <div className="clear-both" />
            </div>
            <div className="ice-main-item" style={{left: '655px', width: '655px', display: 'block'}}>
              <div className="opinions_photo">
                <img src="/images/opinions/E-Nechupienko.jpg" title="Нечупієнко Єлізавета Володимирівна, інспектор Управління Державної казначейської служби України" alt="Нечупієнко Єлізавета Володимирівна, інспектор Управління Державної казначейської служби України" />
              </div>
              <div className="opinions">
                <div className="opinions_wrapper">
                  <div className="opinions_tl" />
                  <div className="opinions_tbg" />
                  <div className="opinions_tr" />
                  <div className="opinions_content">
                    <div className="opinions_quote">“</div>
                    <p style={{fontSize: '14px', lineHeight: '14px', paddingBottom: '5px'}}>З моменту вступу до Полтавського інституту бізнесу на спеціальність «Фінанси і кредит» я жодного разу не засумнівалась у правильності зробленого мною вибору. Причина полягає не тільки в моїй цікавості до вивчення економічних і фінансових процесів, що пов’язане з моєю роботою, а й у зрозумілій формі подачі цих знань викладачами кафедри економічних дисциплін. Особливе значення має невимушена атмосфера спілкування викладачів і студентів, відсутність формалізму, наявність можливостей для позааудиторної роботи.</p>
                  </div>
                  <div className="opinions_bl" />
                  <div className="opinions_bbg" />
                  <div className="opinions_br" />
                </div>
              </div>
              <div className="opinions_author">
                -&nbsp;Нечупієнко Єлізавета Володимирівна,<br />&nbsp; інспектор Управління Державної казначейської служби України
              </div>
              <div className="clear-both" />
            </div>
            <div className="ice-buttons-control">
              <div className="ice-previous">Previous</div>
              <div className="ice-next">Next</div>
            </div>
          </div>
        </div>
      </div>
      <div className="slot2">
        <ul className="likes">
          <li>
            {/* <fb:like href="http://www.facebook.com/pages/ПИБ-МНТУ/112255128857387" send="false" layout="button_count" width={123} show_faces={true} className=" fb_iframe_widget" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=0&href=http%3A%2F%2Fwww.facebook.com%2Fpages%2F%25D0%259F%25D0%2598%25D0%2591-%25D0%259C%25D0%259D%25D0%25A2%25D0%25A3%2F112255128857387&layout=button_count&locale=ru_RU&sdk=joey&send=false&show_faces=true&width=123"><span style={{verticalAlign: 'bottom', width: '105px', height: '20px'}}><iframe name="f36f65309391b68" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" allowTransparency={true} allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/plugins/like.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1e619f9427e3c8%26domain%3Dpib.edu.ua%26origin%3Dhttps%253A%252F%252Fpib.edu.ua%252Ff2c0b581bac41f8%26relation%3Dparent.parent&container_width=0&href=http%3A%2F%2Fwww.facebook.com%2Fpages%2F%25D0%259F%25D0%2598%25D0%2591-%25D0%259C%25D0%259D%25D0%25A2%25D0%25A3%2F112255128857387&layout=button_count&locale=ru_RU&sdk=joey&send=false&show_faces=true&width=123" style={{border: 'none', visibility: 'visible', width: '105px', height: '20px'}} className width="123px" height="1000px" frameBorder={0} /></span></fb:like></ul> */}
          </li>
          <li>
            <iframe id="twitter-widget-0" scrolling="no" allowFullScreen={true} className="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style={{position: 'static', visibility: 'visible', width: '79px', height: '20px'}} title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.2d7d9a6d04538bf11c7b23641e75738c.ru.html#dnt=false&id=twitter-widget-0&lang=ru&original_referer=https%3A%2F%2Fpib.edu.ua%2F&size=m&text=%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82%20%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D0%B0%20%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%BB%D1%81%D1%8F!&time=1600516888041&type=share&url=https%3A%2F%2Fpib.edu.ua%2F&via=PibIstu" frameBorder={0} />
          </li>
        </ul>
        <p style={{paddingBottom: '10px', paddingTop: '9px'}}><a href="/home/reviews">Всі відгуки</a></p>
        <p><a href="/home/reviews/#comment">Залишити відгук</a></p>
      </div>
    </div>
  )
}
