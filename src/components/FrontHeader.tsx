import React from 'react'
import HeaderPseudo from './HeaderPseudo'
import Header from './Header'
import Nav from './Nav'
import FrontTeaser from './FrontTeaser'

type DF = React.FC<{ path?: String }>

export const FrontHeader: DF = () => {
  return (
    <div id="front_header">
      <HeaderPseudo />
      <div id="front_header_wrapper">
        <Header />
        <Nav />
        <FrontTeaser />
      </div>
      <div id="front_header_maintop" />
    </div>
  )
}

export default FrontHeader
