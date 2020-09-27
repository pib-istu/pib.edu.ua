import React, { FC } from 'react'
import HeaderPseudo from './HeaderPseudo'
import Header from './Header'
import Nav from './Nav'
import FrontTeaser from './FrontTeaser'

interface Props {
  readonly path?: string
}

const FrontHeader: FC<Props> = () => {
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
