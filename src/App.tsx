import React from 'react'

import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import Layout from 'components/Layout'

import './app.css'
import './legacy.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Layout>
        <React.Suspense fallback={<em>...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Layout>
    </Root>
  )
}

export default App
