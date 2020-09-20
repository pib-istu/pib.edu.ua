import { Router } from '@reach/router'
import React, { FC, ReactNode } from 'react'
import Footer from '../components/Footer'
import FrontHeader from './FrontHeader'
import OtherHeader from './OtherHeader'

const FrontContentWrapper: FC<{ readonly path?: string, readonly child: ReactNode }> = ({ child }) => <div>{child}</div>
const OtherContentWrapper: FC<{ readonly path?: string, readonly child: ReactNode }> = ({ child }) => {
  return (
    <div id="other_main">
      <div className="top">
        <div className="bottom">
          <div className="wrapper">
            <div id="other_content">
              <div className="item-page">
                {child}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

      <div id="lbOverlay" style={{display: 'none'}} />

      <div id="lbCenter" style={{display: 'none'}}>
        <div id="lbImage">
          <div style={{position: 'relative'}}><a id="lbPrevLink" href="#" /><a id="lbNextLink" href="#" /></div>
        </div>
      </div>

      <div id="lbBottomContainer" style={{display: 'none'}}>
        <div id="lbBottom">
          <a id="lbCloseLink" href="#" />
          <div id="lbCaption" />
          <div id="lbNumber" />
          <div style={{clear: 'both'}} />
        </div>
      </div>

      <div id="sbox-overlay" aria-hidden={true} tabIndex={-1} style={{zIndex: 65555, opacity: 0}} />

      <div id="sbox-window" role="dialog" aria-hidden={true} className="shadow" style={{zIndex: 65557}}>
        <div id="sbox-content" style={{opacity: 0}} />
        <a id="sbox-btn-close" href="#" role="button" aria-controls="sbox-window" />
      </div>

      <div id="shadowbox_container">
        <div id="shadowbox_overlay" />
        <div id="shadowbox">
          <div id="shadowbox_title">
            <div id="shadowbox_title_inner" />
          </div>
          <div id="shadowbox_body">
            <div id="shadowbox_body_inner" />
            <div id="shadowbox_loading">
              <div id="shadowbox_loading_indicator" />
              <span><a onClick={() => (window as any).Shadowbox.close()}>Cancel</a></span>
            </div>
          </div>
          <div id="shadowbox_info">
            <div id="shadowbox_info_inner">
              <div id="shadowbox_counter" />
              <div id="shadowbox_nav"><a id="shadowbox_nav_close" title="Close" onClick={() => (window as any).Shadowbox.close()} /><a id="shadowbox_nav_next" title="Next" onClick={() => (window as any).Shadowbox.next()} /><a id="shadowbox_nav_play" title="Play" onClick={() => (window as any).Shadowbox.play()} /><a id="shadowbox_nav_pause" title="Pause" onClick={() => (window as any).Shadowbox.pause()} /><a id="shadowbox_nav_previous" title="Previous" onClick={() => (window as any).Shadowbox.previous()} /></div>
              <div className="shadowbox_clear" />
            </div>
          </div>
        </div>
      </div>
  </>
)}

export default Layout
