import React from 'react'
import { WithSidebar } from 'components/WithSidebar'

export default () => (
  <WithSidebar shouldShowSidebar={false}>
    <h1 style={{ textAlign: 'center' }}>404 — нічого не знайдено <span aria-hidden>😞</span></h1>
  </WithSidebar>
)
