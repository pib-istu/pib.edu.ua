import React from 'react'

export default () => {
  return (
    <div id="header_pseudo">
      <div className="wrapper">
        <a className="schedule divslide" style={{float: 'right', marginRight: '100px'}} href="#" rel="#header_pseudo_schedule_box" title="Розклад занять">Розклад занять</a>
          {/* <div id="header_pseudo_search_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box" />
          </div> */}
          <div id="header_pseudo_schedule_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              <div className="custom">
                <br />
                <p style={{fontStyle: 'italic', textAlign: 'center'}}>Тут Ви можете завжди знайти останній розклад занять для Вашого курсу</p>
                <br />
              </div>
              <div className="easyfolderlisting">
                <ul className="123easyfolderlisting" style={{listStyle: 'none'}}>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21-25.09.20  РОЗКЛАД КОЛЕДЖ.xls">21-25.09.20 РОЗКЛАД КОЛЕДЖ</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 М-31.xls">21.09 - 25.09.20 М-31</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 Пз-41.xls">21.09 - 25.09.20 Пз-41</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ФР-21.xls">21.09 - 25.09.20 ФР-21</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ЮП-31 +ЮП-21.xls">21.09 - 25.09.20 ЮП-31 +ЮП-21</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_excel.png" alt="A Microsoft Excel file" /> <a href="https://pib.edu.ua/media/schedule/21.09 - 25.09.20 ЮПз-41.xls">21.09 - 25.09.20 ЮПз-41</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/МЕТОДИЧКА СОЦІОЛОГІЯ.doc">МЕТОДИЧКА СОЦІОЛОГІЯ</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЕОАз-51 2018.doc">Методичка ДЕК ЕОАз-51 2018</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЗЛз51.doc">Методичка ДЕК ЗЛз51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК МОз-51.doc">Методичка ДЕК МОз-51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/Методичка ДЕК ЮПз-51.doc">Методичка ДЕК ЮПз-51</a></li>
                  <li><img src="https://pib.edu.ua/media/mod_easyfolderlisting/icons/page_white_word.png" alt="A Microsoft Word file" /> <a href="https://pib.edu.ua/media/schedule/ОПЛАТА НАВЧАННЯ.doc">ОПЛАТА НАВЧАННЯ</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div id="header_mail_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              Form goes here
            </div>
          </div> */}
      </div>
    </div>
  )
}
