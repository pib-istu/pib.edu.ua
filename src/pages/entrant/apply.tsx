import { WithSidebar } from 'components/WithSidebar'
// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Подати заявку на вступ"

import React from 'react'

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      {/* <link rel="stylesheet" href="/components/com_chronoforms/css/frontforms.css" />
      <link rel="stylesheet" href="/components/com_chronoforms/css/formcheck/theme/red/formcheck.css" />
      <link rel="stylesheet" href="/components/com_chronoforms/css/formcheck_fix.css" />
      <script src="/components/com_chronoforms/js/formcheck/formcheck-yui.js"></script>
      <script src="/components/com_chronoforms/js/formcheck/formcheck-max.js"></script>
      <script src="/components/com_chronoforms/js/formcheck/lang/ru.js"></script> */}

      <div id="page-header">
        <h1 className="text">
          Подати заявку на вступ
        </h1>
      </div>

      <p>Дякуємо за вибір ПІБ МНТУ!</p>
      <p>Для того, щоб подати заявку на вступ, будь ласка, зв'яжіться з нами зручним для вас способом:</p>

      <br />
      <br />

      <div className="center">
        <p>
          <a href="mailto:info@pib.edu.ua?subject=Заявка%20на%20вступ" className="highlight gold" style={{ display: 'inline-block', padding: '20px'}} target="_blank">
            Написати листа
          </a>
        </p>

        <p>
          Або зателефонуйте нам за номером{' '}
          <span className="orange bold">
            (0532) 50-81-78
          </span>
        </p>
      </div>



      {/* <form action="https://pib.edu.ua/entrant/apply?chronoform=Contact_apply&event=submit" name="Contact_apply" id="chronoform_Contact_apply" method="post" className="Chronoform hasValidation">
        <div className="ccms_form_element cfdiv_text" id="input_admin_name_container_div" style={{}}>
          <label htmlFor="input_admin_name">Ім'я:</label><input id="input_admin_name" maxLength={40} size={40} className="validate[\'required\']" type="text" defaultValue="" name="input_admin_name" />
          <div className="clear" />
          <div id="error-message-input_admin_name" />
        </div>
        <div className="ccms_form_element cfdiv_text" id="input_admin_mail_container_div" style={{}}>
          <label htmlFor="input_admin_mail">Email:</label><input id="input_admin_mail" maxLength={40} size={40} className=" validate['email']" type="email" defaultValue="" name="input_admin_mail" />
          <div className="clear" />
          <div id="error-message-input_admin_mail" />
        </div>
        <div className="ccms_form_element cfdiv_text" id="input_apply_phone_container_div" style={{}}>
          <label htmlFor="input_apply_phone">Телефон:</label><input id="input_apply_phone" maxLength={40} size={40} className=" validate['required','phone','phone_inter']" type="tel" required defaultValue="" name="input_apply_phone" />
          <div className="clear" />
          <div id="error-message-input_apply_phone" />
        </div>
        <div className="ccms_form_element cfdiv_textarea" id="input_admin_message_container_div" style={{}}>
          <label htmlFor="input_admin_message">Додаткова інформація:</label>
          <textarea id="input_admin_message" cols={42} rows={12} className=" validate['required']" name="input_admin_message" defaultValue={""} />
          <div className="clear" />
          <div id="error-message-input_admin_message" />
        </div>
        <div className="ccms_form_element cfdiv_text" id="autoID-f52f7bc815c629b76ad30c006c59f75b_container_div">
          <label>Код:</label><input maxLength={5} size={5} className="chrono_captcha_input validate['required']" type="text" required defaultValue="" name="chrono_verification" />{' '}
          <img src="https://pib.edu.ua/components/com_chronoforms/chrono_verification.php?imtype=0" alt="" />
          <div className="small-message">Введіть код на зображенні для того, щоб ми могли впевнетитись що Ви - людина, а не комп'ютер</div>
          <div className="clear" />
          <div id="error-message-chrono_verification" />
        </div>
        <div className="ccms_form_element cfdiv_submit" id="input_admin_submit_container_div" style={{textAlign: 'center'}}>
          <input name="input_admin_submit" id="input_admin_submit" className="contact_input_submit" value="Відправити" type="submit" />
          <div className="clear" />
          <div id="error-message-input_admin_submit" />
        </div>
        <input type="hidden" name="6b051dd6742fbf5be3d5122b320e8a36" defaultValue={1} />
      </form> */}
    </WithSidebar>
  )
}
