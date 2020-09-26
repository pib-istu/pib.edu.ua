import React from 'react'

import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Layout from 'components/Layout'

import './app.css'


function App() {
  return (
    <Root>
      <Layout>
        <React.Suspense fallback={<em>...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Layout>
    </Root>
  )
}

export default App
