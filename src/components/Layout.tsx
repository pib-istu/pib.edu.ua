import { Router } from '@reach/router'
import React, { FC, ReactNode } from 'react'
import Footer from '../components/Footer'
import FrontHeader from './FrontHeader'
import NavSide from './NavSide'
import OtherHeader from './OtherHeader'

const FrontContentWrapper: FC<{ readonly path?: string, readonly child: ReactNode }> = ({ child }) => <div>{child}</div>
const OtherContentWrapper: FC<{ readonly path?: string, readonly child: ReactNode }> = ({ child }) => {
  return (
    <div id="other_main">
      <div className="top">
        <div className="bottom">
          <div className="wrapper">
            {child}
          </div>
        </div>
      </div>
    </div>
  )
}

export const WithSidebar: FC<{ readonly shouldShowSidebar?: boolean }> = ({ shouldShowSidebar = true, children }) => {
  return (
    <>
      {shouldShowSidebar && <div id="other_menu_wrapper" />}
      {shouldShowSidebar && <NavSide />}
      <div id="other_content" className={`${shouldShowSidebar ? 'menu-other' : ''}`}>
        {/* <div className="item-page"> */}
          {children}
        {/* </div> */}
      </div>
    </>
  )
}

const Layout: FC = ({ children }) => {
  return (
    <>
      <div id="fb-root" className=" fb_reset">
        <div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}>
          <div />
        </div>
      </div>

      <div style={{display: 'none'}}>
        <img src="/templates/pib/img/b/a/front_sub_button.jpg" alt="" />
        <img src="/templates/pib/img/b/a/header_pseudo_search_button.png" alt="" />
        <img src="/templates/pib/img/b/f/front_sub_input.jpg" alt="" />
        <img src="/templates/pib/img/b/f/header_pseudo_search_input.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_bottom_sl.jpg" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_fb.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_twitter.png" alt="" />
        <img src="/templates/pib/img/b/h/footer_cont_soc_vk.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_1.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_2.png" alt="" />
        <img src="/templates/pib/img/b/h/front_action_button_3.png" alt="" />
        <img src="/templates/pib/img/b/h/front_info_button.png" alt="" />
        <img src="/templates/pib/img/b/h/front_news_rss.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_sub_button.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_sub_input.jpg" alt="" />
        <img src="/templates/pib/img/b/h/header_mail.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_schedule.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search_button.png" alt="" />
        <img src="/templates/pib/img/b/h/header_pseudo_search_input.png" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot1.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot2.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot3.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot4.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot5.jpg" alt="" />
        <img src="/templates/pib/img/p/h/front_main_promo_slot6.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_news_photo.png" alt="" />
        <img src="/templates/pib/img/b/front_op_ar_left.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_op_ar_left.jpg" alt="" />
        <img src="/templates/pib/img/b/front_op_ar_right.jpg" alt="" />
        <img src="/templates/pib/img/b/h/front_op_ar_right.jpg" alt="" />
      </div>

      <Router>
        <FrontHeader path="/" />
        <OtherHeader path="/*" />
      </Router>

      <Router>
        <FrontContentWrapper path="/" child={children} />
        <OtherContentWrapper path="/*" child={children} />
      </Router>

      <Footer />
  </>
)}

export default Layout
