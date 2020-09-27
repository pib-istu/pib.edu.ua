import React, { FC } from 'react'
import HeaderPseudo from './HeaderPseudo'
import Header from './Header'
import Nav from './Nav'

interface Props {
  readonly path?: string
}

const OtherHeader: FC<Props> = () => {
  return (
    <div id="other_header">
      <HeaderPseudo />
      <div id="other_header_wrapper">
        <Header />
        <Nav />
      </div>
    </div>
  )
}

export default OtherHeader
