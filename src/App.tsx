import React from 'react'

import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import './app.css'
import FrontHeader from 'components/FrontHeader'
import OtherHeader from 'components/OtherHeader'
import Footer from 'components/Footer'


function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>...</em>}>
        <Router>
          <Routes
            path="*"
            render={({ routePath }) => {
              const isIndex = routePath === '/'
              return isIndex ? <FrontHeader /> : <OtherHeader />
            }}
          />
        </Router>
      </React.Suspense>

      <React.Suspense fallback={<em>...</em>}>
        <Router>
          <Routes
            path="*"
            render={({ routePath, getComponentForPath }) => {
              const isIndex = routePath === '/'
              const component = getComponentForPath(routePath)

              if (isIndex) return component

              return (
                <div id="other_main">
                  <div className="top">
                    <div className="bottom">
                      <div className="wrapper">
                        {component}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        </Router>
      </React.Suspense>

      <React.Suspense fallback={<em>...</em>}>
        <Router>
          <Routes
            path="*"
            render={() => <Footer />}
          />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
