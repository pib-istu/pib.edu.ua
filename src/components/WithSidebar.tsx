import React, { FC } from 'react'
import NavSide from './NavSide'

export const WithSidebar: FC<{ readonly shouldShowSidebar?: boolean }> = ({ shouldShowSidebar = true, children }) => {
  return (
    <>
      {shouldShowSidebar && <div id="other_menu_wrapper" />}
      {shouldShowSidebar && <NavSide />}
      <div id="other_content" className={`${shouldShowSidebar ? 'menu-other' : ''}`}>
        {children}
      </div>
    </>
  )
}
