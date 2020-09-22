import { WithSidebar } from 'components/Layout'
import React from 'react'

export default () => (
  <WithSidebar shouldShowSidebar={false}>
    <h1 style={{ textAlign: 'center' }}>404 — нічого не знайдено <span aria-hidden>😞</span></h1>
  </WithSidebar>
)
