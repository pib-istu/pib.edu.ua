import React, { useEffect } from 'react'
import Schedule from './Schedule'

declare var jQuery: any

export default () => {
  useEffect(() => {
    jQuery('.divslide').showHide({
      speed: 300,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });
  }, [])

  return (
    <div id="header_pseudo">
      <div className="wrapper">
        <a className="schedule divslide" style={{float: 'right', marginRight: '100px'}} href="#" data-rel="#header_pseudo_schedule_box" title="Розклад занять">Розклад занять</a>
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
              <Schedule />
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
